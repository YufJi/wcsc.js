import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./common/weui.wxss",
  "./common/wxParse/wxParse.wxss",
  "./pages/about/about.wxss",
  "./pages/index/index.wxss",
  "./pages/index/list/list.wxss",
  "./pages/index/markdown/markdown.wxss",
  "./pages/index/panel/panel.wxss",
  "./pages/index/timeline/timeline.wxss",
  "./pages/tree/tree.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./growth"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit21",
  units: [],
};
