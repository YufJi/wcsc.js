import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/broadcast/broadcast.wxss",
  "./pages/explore/explore.wxss",
  "./pages/for-you/for-you.wxss",
  "./pages/index/index.wxss",
  "./pages/logs/logs.wxss",
  "./pages/main/main.wxss",
  "./pages/my-music/my-music.wxss",
  "./pages/search/search.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./AppleMusic"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit81",
  units: [],
};
