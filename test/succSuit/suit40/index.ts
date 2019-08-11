import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/detail/index.wxss",
  "./pages/index/index.wxss",
  "./pages/logs/logs.wxss",
  "./pages/main_page/book/index.wxss",
  "./pages/main_page/content/index.wxss",
  "./pages/main_page/exhibition/index.wxss",
  "./pages/main_page/zhanxun/index.wxss",
  "./pages/setting/index.wxss",
  "./style/app.wxss",
  "./style/weui.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./kwonWhere"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit40",
  units: [],
};
