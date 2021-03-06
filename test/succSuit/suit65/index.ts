import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/index/index.wxss",
  "./pages/logs/logs.wxss",
  "./pages/setting/setting.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./timer"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit65",
  units: [],
};
