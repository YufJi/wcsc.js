import { ICodeMap, NOOP } from "./util";
import * as vm from "vm";
import prettier = require("prettier");
import * as fs from "fs";
import * as path from "path";
import { ICompilerConfig } from "./succSuit/index";
import { strict } from "assert";
import { string } from "postcss-selector-parser";
import CleanCSS from "clean-css";
import * as babelParser from "@babel/parser";
import { ExpressionStatement, CallExpression, StringLiteral } from "@babel/types";

class Node {
  public childNodes: Node[];
  public constructor() {
    this.childNodes = [];
  }
  public appendChild(node: Node) {
    this.childNodes.push(node);
  }
}

class Element extends Node {
  public childNodes: Element[];
  public tag: string;
  public type: string;
  public attributes: {
    [key: string]: string;
  };
  public styleSheet: {
    cssText: string;
  };
  public constructor(tag: string) {
    super();
    this.tag = tag;
    this.type = "";
    this.attributes = {};
    this.styleSheet = {
      cssText: "",
    };
    this.childNodes = [];
  }
  public setAttribute(key: string, value: string) {
    this.attributes[key] = value;
  }
}

export interface ISandbox {
  document: {
    createElement: (tag: string) => Element;
    head: Element;
  };
  navigator: {
    userAgent: string;
  };
  window: {
    devicePixelRatio: number;
    screen: {
      height: number;
      width: number;
    };
  };
}

export interface ICssMap {
  [key: string]: string;
}

export interface IXcInvalidMap {
  [key: string]: string | undefined;
}

export class Sandbox {
  public codeMap: ICodeMap = {};
  public cssCodeMap: ICodeMap = {};
  public xcInvalidMap: IXcInvalidMap = {};
  private sandbox: ISandbox;
  private compilerConfig: ICompilerConfig;
  private type: string;
  private ranComm: boolean = false;
  private alreadyRun: boolean = false;
  public constructor(codeMap: ICodeMap, compilerConfig: ICompilerConfig, type: string) {
    this.codeMap = codeMap;
    this.sandbox = {
      document: {
        createElement: this.createElement,
        head: new Element("head"),
      },
      navigator: {
        userAgent: "nodejs",
      },
      window: {
        devicePixelRatio: 3,
        screen: {
          height: 812,
          width: 357,
        },
      },
    };
    this.compilerConfig = compilerConfig;
    this.type = type;
    vm.createContext(this.sandbox);
  }
  public createElement(tag: string) {
    return new Element(tag);
  }
  public run() {
    this.runComm();
    this.runOthers();
    this.alreadyRun = true;
  }
  public runOne(key: string) {
    if (key !== "version") {
      const code = this.handleCode(this.codeMap[key], key);
      vm.runInContext(code, this.sandbox);
    }
  }
  public getXcInvalidMap(): IXcInvalidMap {
    return this.xcInvalidMap;
  }
  public getCssMap(): ICodeMap {
    if (!this.alreadyRun) {
      this.run();
    }
    const head: Element = this.sandbox.document.head;
    const elements: Element[] = head.childNodes;
    const cssMap: ICssMap = {};
    const keys = Object.keys(this.codeMap);
    elements.forEach((element) => {
      if (element.tag === "style" && element.type === "text/css") {
        const key = element.attributes["wxss:path"];
        if (key) {
          cssMap[key] = element.styleSheet.cssText;
          const filePath = `./${key.replace(/\//g, "_")}.${this.type}.css`;
          // cssMap[key] = prettier.format(cssMap[key], {parser: "css"});
          cssMap[key] = new CleanCSS({}).minify(cssMap[key]).styles; // 压缩下，去掉无关的差异，比如空格啊换行啊这些差异
          // fs.writeFileSync(path.join(this.compilerConfig.outputDir, filePath), cssMap[key], {
          //   encoding: "utf8",
          // });

        }
      }
    });
    return cssMap;
  }
  private runComm() {
    if (!this.ranComm) {
      this.runOne("comm");
      this.ranComm = true;
    }
  }
  private runOthers() {
    for (const key of Object.keys(this.codeMap)) {
      if (key !== "comm") {
        this.runOne(key);
      }
    }
  }
  private handleCode(code: string, key: string): string {
    if (key !== "comm" && key !== "version") {
      const ast = babelParser.parse(code);
      let xcInvalid: string | undefined;
      if (ast.program.body[0]) {
        const expressionStatement = ast.program.body[0] as ExpressionStatement;
        const callExpression = expressionStatement.expression as CallExpression;
        if (callExpression.arguments && callExpression.arguments[1] && callExpression.arguments[1].type === "StringLiteral") {
          const stringLiteral = callExpression.arguments[1] as StringLiteral;
          xcInvalid = stringLiteral.value;
        }
      }
      this.xcInvalidMap[key] = xcInvalid;
      return `var func=${code};func();`;
    } else {
      return code;
    }
  }
}
