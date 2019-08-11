import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/cart/cart.wxss",
  "./pages/goodDetail/goodDetail.wxss",
  "./pages/index/index.wxss",
  "./pages/mine/mine.wxss",
  "./pages/sort/sort.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./WXNative-bpgg-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit46",
  units: [],
};
