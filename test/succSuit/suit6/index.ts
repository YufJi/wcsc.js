import * as path from "path";
import {ITestSuit} from "../index";

const FILES = [
  "./app.wxss",
  "./pages/calc/calc.wxss",
  "./pages/history/history.wxss",
  "./pages/index/index.wxss",
  "./pages/index/view.wxss",
  "./pages/logs/logs.wxss",
];

export const testSuit: ITestSuit = {
    compilerConfig: {
        FILES,
        FILESBASE: path.join(__dirname, "./wxapp-sCalc"),
        cmd: ["-db", "-pc", FILES.length.toString()],
        outputDir: path.join(__dirname, "./out"),
    },
    name: "suit6",
    units: [],
};
