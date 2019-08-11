import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/detail/detail.wxss",
  "./pages/hotest/hotest.wxss",
  "./pages/latest/latest.wxss",
  "./pages/node/node.wxss",
  "./pages/topicList/topicList.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wechat-v2ex"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit75",
  units: [],
};
