import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/attention/attention.wxss",
  "./pages/common/common.wxss",
  "./pages/index/index.wxss",
  "./pages/mine/mine.wxss",
  "./pages/video/video.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./TodayNews-wx"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit92",
  units: [],
};
