import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/component/index.wxss",
  "./pages/i/index.wxss",
  "./pages/index/index.wxss",
  "./pages/list/index.wxss",
  "./pages/logs/logs.wxss",
  "./style/layout.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./SmallApp"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit74",
  units: [],
};
