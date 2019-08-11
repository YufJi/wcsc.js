import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./page/index/index.wxss",
  "./page/index/search.wxss",
  "./page/mine/mine.wxss",
  "./page/shop/shop.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./a-takeaway-demo-of-wxapp"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit37",
  units: [],
};
