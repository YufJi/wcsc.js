import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/board/board.wxss",
  "./pages/common/movie-list.wxss",
  "./pages/item/item.wxss",
  "./pages/list/list.wxss",
  "./pages/profile/profile.wxss",
  "./pages/search/search.wxss",
  "./pages/splash/splash.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-douban"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit88",
  units: [],
};
