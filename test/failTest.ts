Error.stackTraceLimit = 99;
import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";
import { ITestSuit } from "./failSuit/index";
import { ITestConfigListItem, testConfigList } from "./failConfig";
import * as testUtil from "./util";
import { WCSC, IWCSCCompileConfig, IOutMap } from "../src/index";
import { Sandbox, ICssMap } from "./sandbox";

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
  let wcscCompileTime: number = 0;
  describe(testSuit.name, () => {
    it(testSuit.name + "[wcscjs compiles files to javascript]", () => {
      return new Promise((resolve, reject) => {
        const startTime: number = Date.now();
        testUtil.runWcscjs(testSuit.compilerConfig).then((code) => {
          const endTime = Date.now();
          wcscjsCompileTime = endTime - startTime;
          reject();
        }).catch((err) => {
          console.log(err.message);
          resolve(err.message);
        });
      });
    });

    it(testSuit.name + "[wcsc compiles files to javascript]", () => {
      return new Promise((resolve, reject) => {
        const startTime: number = Date.now();
        testUtil.runWcsc(testSuit.compilerConfig).then((code) => {
          const endTime = Date.now();
          wcscCompileTime = endTime - startTime;
          reject();
        }).catch((err) => {
          console.log(err);
          resolve(err);
        });
      });
    });
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
