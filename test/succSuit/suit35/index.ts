import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/attention/attention.wxss",
  "./pages/common/mainTabCell.wxss",
  "./pages/index/commentCell.wxss",
  "./pages/index/detail.wxss",
  "./pages/index/index.wxss",
  "./pages/login/login.wxss",
  "./pages/logs/logs.wxss",
  "./pages/membercenter/membercenter.wxss",
  "./pages/recommend/recommend.wxss",
  "./pages/recommend/recommendLeftCell.wxss",
  "./pages/recommend/recommendRightCell.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./WXBaiSi"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit35",
  units: [],
};
