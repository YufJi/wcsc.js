import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/feeds/feeds.wxss",
  "./pages/issue/issue.wxss",
  "./pages/mine/mine.wxss",
  "./pages/person/person.wxss",
  "./pages/search/search.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./fenda-mock"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit67",
  units: [],
};
