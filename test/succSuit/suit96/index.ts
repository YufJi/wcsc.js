import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/douban/coming_soon/coming_soon.wxss",
  "./pages/douban/detail/detail.wxss",
  "./pages/douban/in_theathers/in_theathers.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-douban-film"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit96",
  units: [],
};
