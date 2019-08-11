Error.stackTraceLimit = 99;
import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";
import { ITestSuit } from "./succSuit/index";
import { ITestConfigListItem, testConfigList } from "./config";
import * as testUtil from "./util";
import { WCSC, IWCSCCompileConfig, IOutMap } from "../src/index";
import { Sandbox, ICssMap, IXcInvalidMap } from "./sandbox";

let testCase: [string];

process.argv.forEach((val, index) => {
  if (val === "--case") {
    const tmp: string = process.argv[index + 1];
    const tmp1: string[] = tmp.split("_");
    if (tmp1.length === 2) {
      testCase = [tmp1[0]];
    }
  }
});

function runSuit(testSuit: ITestSuit) {
  let wcscjsCompileTime: number = 0;
  let wcscjsOutputCode: string = "";
  let wcscjsCodeMap: testUtil.ICodeMap = {};
  let wcscjsCssMap: ICssMap = {};
  let wcscjsSandbox: Sandbox;
  let wcscjsXcInvalidMap: IXcInvalidMap = {};
  let wcscCompileTime: number = 0;
  let wcscOutputCode: string = "";
  let wcscCodeMap: testUtil.ICodeMap = {};
  let wcscCssMap: ICssMap = {};
  let wcscSandbox: Sandbox;
  let wcscXcInvalidMap: IXcInvalidMap = {};
  const needCode2Map = testUtil.needCode2Map(testSuit.compilerConfig);
  describe(testSuit.name, () => {
    it(testSuit.name + "[wcscjs compiles files to javascript]", () => {
      return new Promise((resolve, reject) => {
        const startTime: number = Date.now();
        testUtil.runWcscjs(testSuit.compilerConfig).then((code) => {
          const endTime = Date.now();
          wcscjsCompileTime = endTime - startTime;
          wcscjsOutputCode = code as string;
          fs.writeFileSync(path.join(testSuit.compilerConfig.outputDir, "./code.wcscjs.css"), code, {
            encoding: "utf8",
          });
          if (needCode2Map) {
            wcscjsCodeMap = testUtil.code2Map(wcscjsOutputCode, "wcscjs", testSuit.compilerConfig);
          }
          resolve();
        }).catch((err) => {
          reject(err);
        });
      });
    });

    it(testSuit.name + "[wcsc compiles files to javascript]", () => {
      return new Promise((resolve, reject) => {
        const startTime: number = Date.now();
        testUtil.runWcsc(testSuit.compilerConfig).then((code) => {
          const endTime = Date.now();
          wcscCompileTime = endTime - startTime;
          wcscOutputCode = code;
          fs.writeFileSync(path.join(testSuit.compilerConfig.outputDir, "./code.wcsc.css"), code, {
            encoding: "utf8",
          });
          if (needCode2Map) {
            wcscCodeMap = testUtil.code2Map(wcscOutputCode, "wcsc", testSuit.compilerConfig);
          }
          resolve();
        }).catch((err) => {
          reject(err);
        });
      });
    });

    if (needCode2Map) {
      it(testSuit.name + "[assert wcscjs and wcsc output]", () => {
        return new Promise((resolve, reject) => {
          try {
            wcscjsSandbox = new Sandbox(wcscjsCodeMap, testSuit.compilerConfig, "wcscjs");
            wcscSandbox = new Sandbox(wcscCodeMap, testSuit.compilerConfig, "wcsc");
            wcscjsSandbox.run();
            wcscSandbox.run();
            wcscjsCssMap = wcscjsSandbox.getCssMap();
            wcscCssMap = wcscSandbox.getCssMap();
            wcscjsXcInvalidMap = wcscjsSandbox.getXcInvalidMap();
            wcscXcInvalidMap = wcscSandbox.getXcInvalidMap();
            fs.writeFileSync(path.join(testSuit.compilerConfig.outputDir, "./_xcInvalidMap.wcscjs.json"), wcscjsXcInvalidMap, {
              encoding: "utf8",
            });
            fs.writeFileSync(path.join(testSuit.compilerConfig.outputDir, "./_xcInvalidMap.wcsc.json"), wcscXcInvalidMap, {
              encoding: "utf8",
            });
            const wcscjsCssMapKeys = Object.keys(wcscjsCssMap);
            const wcscCssMapKeys = Object.keys(wcscCssMap);
            // assert.deepEqual(wcscjsXcInvalidMap, wcscXcInvalidMap);
            wcscjsCssMapKeys.sort();
            wcscCssMapKeys.sort();
            assert.deepEqual(wcscjsCssMapKeys, wcscCssMapKeys);
            wcscCssMapKeys.forEach((key) => {
              try {
                assert.equal(wcscjsCssMap[key], wcscCssMap[key]);
              } catch (err) {
                console.error(`key: ${key}`);
                throw err;
              }
            });
          } catch (err) {
            reject(err);
          }
          resolve();
        });
      });
    }
  });
}

testConfigList.forEach((testConfig: ITestConfigListItem) => {
  const suitConfig = require(testConfig.configPath);
  if (testCase && testCase.length) {
    if (suitConfig.name === testCase[0]) {
      runSuit(suitConfig.testSuit);
    }
  } else {
    runSuit(suitConfig.testSuit);
  }
});
