import * as path from "path";
import * as child_process from "child_process";
import { ICompilerConfig } from "./succSuit/index";
import { WCSC, IWCSCCompileConfig, IOutMap } from "../src/index";
import * as fs from "fs";
import prettier = require("prettier");
import { unescape } from "../src/util";

let wcscPath: string;

if (process.platform === "darwin") {
  wcscPath = path.join(__dirname, "../lib/wcsc");
} else if (process.platform === "win32") {
  wcscPath = path.join(__dirname, "../lib/wcsc.exe");
}

export function NOOP() {/***/}

export interface ICodeMap {
  [key: string]: string;
}

export function runWcsc(compilerConfig: ICompilerConfig): Promise<string> {
  return new Promise((resolve, reject) => {
    let args: string[] = compilerConfig.cmd;
    const fileList: string[] = compilerConfig.FILES;
    args = args.concat(fileList);
    const wcsc = child_process.spawn(wcscPath, args, {
      cwd: compilerConfig.FILESBASE,
    });
    let out: Buffer = Buffer.from([]);
    let err: Buffer = Buffer.from([]);
    wcsc.stdout.on("data", (data: Buffer) => {
      out = Buffer.concat([out, data]);
    });

    wcsc.stderr.on("data", (data: Buffer) => {
      err = Buffer.concat([err, data]);
    });
    wcsc.on("close", (code: number) => {
      if (err.length) {
        reject(err.toString());
        return;
      }
      if (code === 0) {
        resolve(out.toString("utf8"));
      } else {
        reject(err.toString());
      }
    });
  });
}

export function runWcscjs(compilerConfig: ICompilerConfig): Promise<string | IOutMap> {
  return new Promise((resolve, reject) => {
    const qcscCompileConfig: IWCSCCompileConfig = {
      FILES: compilerConfig.FILES,
      FILESBASE: compilerConfig.FILESBASE,
      cmd: compilerConfig.cmd,
    };
    const wcscjs: WCSC = new WCSC(qcscCompileConfig);
    wcscjs.compile().then((code) => {
      resolve(code);
    }).catch((errMsg) => {
      reject(errMsg);
    });
  });
}

export function code2Map(code: string, type: string, compilerConfig: ICompilerConfig): ICodeMap {
  const map: ICodeMap = {};
  if (type === "wcscjs" || type === "wcsc") {
    const tmp: string[] = code.split("=");
    for (let i = 0; i < tmp.length && tmp[i + 1]; i += 2) {
      map[tmp[i]] = tmp[i + 1];
    }
    fs.writeFileSync(path.join(compilerConfig.outputDir, `./map.${type}.json`), prettierCode("", JSON.stringify(map), "json"), {
      encoding: "utf8",
    });
    for (const key of Object.keys(map)) {
      if (key.length && key.length <= 80) {
        const filePath = `./${key.replace(/\//g, "_")}.${type}.js`;
        map[key] = unescape(map[key]);
        if (compilerConfig.writeJs) {
          map[key] = prettierCode(key, map[key], "babel");
          fs.writeFileSync(path.join(compilerConfig.outputDir, filePath), map[key], {
              encoding: "utf8",
          });
        }

      }
    }
  }
  return map;
}

export function needCode2Map(compilerConfig: ICompilerConfig): boolean {
  if (compilerConfig.cmd.indexOf("-pc") > -1) {
    return true;
  } else {
    return false;
  }
}

export function prettierCode(key: string, code: string, parser: prettier.BuiltInParserName): string {
  if (key === "version") {
    return code;
  } else {
    parser = parser || "babel";
    return prettier.format(code, { parser });
  }
}
