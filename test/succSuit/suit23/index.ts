import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/aboutus/aboutus.wxss",
  "./pages/commonPage/commonPage.wxss",
  "./pages/exam/exam.wxss",
  "./pages/examprocess/examprocess.wxss",
  "./pages/examresults/examresults.wxss",
  "./pages/favorites/favorites.wxss",
  "./pages/index/index.wxss",
  "./pages/loginin/loginin.wxss",
  "./pages/practice/practice.wxss",
  "./pages/wrong/wrong.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./SHARE-weixinapp"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit23",
  units: [],
};
