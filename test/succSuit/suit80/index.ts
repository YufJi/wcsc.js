import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/detail/detail.wxss",
  "./pages/home/home.wxss",
  "./pages/home/template/template.wxss",
  "./pages/index/index.wxss",
  "./pages/search/search.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wx-movies-demo"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit80",
  units: [],
};
