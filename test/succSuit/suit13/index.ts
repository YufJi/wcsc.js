import * as path from "path";
import {ITestSuit} from "../index";

const FILES = [
  "./app.wxss",
  "./pages/index/index.wxss",
];

export const testSuit: ITestSuit = {
    compilerConfig: {
        FILES,
        FILESBASE: path.join(__dirname, "./wechat-weather"),
        cmd: ["-db", "-pc", FILES.length.toString()],
        outputDir: path.join(__dirname, "./out"),
    },
    name: "suit13",
    units: [],
};
