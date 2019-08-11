import * as path from "path";
import {ITestSuit} from "../index";

const FILES = [
  "./app.wxss",
  "./pages/brand/index.wxss",
  "./pages/cart/index.wxss",
  "./pages/classify/index.wxss",
  "./pages/details/index.wxss",
  "./pages/index/index.wxss",
  "./pages/list/index.wxss",
  "./pages/my/index.wxss",
  "./style/layout.wxss",
];

export const testSuit: ITestSuit = {
    compilerConfig: {
        FILES,
        FILESBASE: path.join(__dirname, "./wechat-weapp-mall"),
        cmd: ["-db", "-pc", FILES.length.toString()],
        outputDir: path.join(__dirname, "./out"),
    },
    name: "suit12",
    units: [],
};
