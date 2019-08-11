import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/found/index/index.wxss",
  "./pages/information/detail/detail.wxss",
  "./pages/information/index/index.wxss",
  "./pages/logs/logs.wxss",
  "./pages/personal/index/index.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./MiniApp-TouTiao"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit71",
  units: [],
};
