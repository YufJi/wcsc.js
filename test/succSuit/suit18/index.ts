import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/about/about.wxss",
  "./pages/board/board.wxss",
  "./pages/detial/detial.wxss",
  "./pages/item/item.wxss",
  "./pages/list/list.wxss",
  "./pages/search/search.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./WXWebapp_Health"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit18",
  units: [],
};
