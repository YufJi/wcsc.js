Error.stackTraceLimit = 99;
import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";
import { ITestSuit } from "../test/succSuit/index";
import { ITestConfigListItem, testConfigList } from "../test/config";
import * as testUtil from "../test/util";
import { WCSC, IWCSCCompileConfig, IOutMap } from "../src/index";
import { Sandbox, ICssMap, IXcInvalidMap } from "../test/sandbox";

function runSuit(testSuit: ITestSuit) {

  const needCode2Map = testUtil.needCode2Map(testSuit.compilerConfig);
  describe(testSuit.name, () => {
    it(testSuit.name + `[compile ${testSuit.compilerConfig.FILES.length} files]`, () => {
      return new Promise((resolve, reject) => {
        let wcscjsStartTime: number = 0;
        let wcscjsEndTime: number = 0;
        let wcscStartTime: number = 0;
        let wcscEndTime: number = 0;
        wcscjsStartTime = Date.now();
        testUtil.runWcscjs(testSuit.compilerConfig).then((code) => {
          wcscjsEndTime = Date.now();
          wcscStartTime = Date.now();
          testUtil.runWcsc(testSuit.compilerConfig).then((code) => {
            wcscEndTime = Date.now();
            console.log(`[wcscjs] cost: ${wcscjsEndTime - wcscjsStartTime} ms, [wcsc] cost: ${wcscEndTime - wcscStartTime} ms`);
            resolve();
          }).catch((err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        });
      });
    });
  });
}

testConfigList.forEach((testConfig: ITestConfigListItem) => {
  const suitConfig = require(testConfig.configPath);
  runSuit(suitConfig.testSuit);
});
