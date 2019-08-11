import * as path from "path";
import {ITestSuit} from "../index";

const FILES = [
  "./app.wxss",
  "./pages/air_quality/result.wxss",
];

export const testSuit: ITestSuit = {
    compilerConfig: {
        FILES,
        FILESBASE: path.join(__dirname, "./wechat-weapp-lifeTools/lifeTools"),
        cmd: ["-db", "-pc", FILES.length.toString()],
        outputDir: path.join(__dirname, "./out"),
    },
    name: "suit14",
    units: [],
};
