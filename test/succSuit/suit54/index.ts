import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./WxEmojiView/WxEmojiView.wxss",
  "./app.wxss",
  "./pages/index/index.wxss",
  "./pages/logs/logs.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./WxEmojiView-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit54",
  units: [],
};
