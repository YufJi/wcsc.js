import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/collection/collection.wxss",
  "./pages/girl/girl.wxss",
  "./pages/index/index.wxss",
  "./pages/my/my.wxss",
  "./pages/recommend/recommend.wxss",
  "./pages/submitgank/submitgank.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./GankCamp-WechatAPP-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit55",
  units: [],
};
