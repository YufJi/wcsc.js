import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/cinema/index.wxss",
  "./pages/home/index.wxss",
  "./pages/logs/logs.wxss",
  "./pages/my/index.wxss",
  "./style/layout.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-weipiao"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit77",
  units: [],
};
