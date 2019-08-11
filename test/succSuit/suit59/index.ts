import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/course/course.wxss",
  "./pages/courseintro/courseintro.wxss",
  "./pages/index/index.wxss",
  "./pages/login/login.wxss",
  "./pages/logs/logs.wxss",
  "./pages/my/my.wxss",
  "./pages/reading/reading.wxss",
  "./pages/result/result.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wxreading-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit59",
  units: [],
};
