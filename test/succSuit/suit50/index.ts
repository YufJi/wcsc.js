import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/detail/detail.wxss",
  "./pages/image/image.wxss",
  "./pages/index/index.wxss",
  "./pages/logs/logs.wxss",
  "./pages/main/main.wxss",
  "./pages/video/video.wxss",
  "./pages/voice/voice.wxss",
  "./pages/word/word.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./BS-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit50",
  units: [],
};
