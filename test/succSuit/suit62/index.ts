import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/detail/detail.wxss",
  "./pages/index/index.wxss",
  "./pages/login/login.wxss",
  "./pages/logs/logs.wxss",
  "./pages/topics/topics.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wechat-cnode"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit62",
  units: [],
};
