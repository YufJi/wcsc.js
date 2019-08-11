import * as path from "path";
import {ITestSuit} from "../index";

const FILES = [
  "./app.wxss",
  "./components/clist/clist.wxss",
  "./components/drawer/drawer.wxss",
  "./components/floataction/floataction.wxss",
  "./components/nlist/nlist.wxss",
  "./components/slider/slider.wxss",
  "./pages/comment/comment.wxss",
  "./pages/detail/detail.wxss",
  "./pages/favorite/favorite.wxss",
  "./pages/index/index.wxss",
  "./pages/setting/setting.wxss",
  "./pages/webview/webview.wxss",
];

export const testSuit: ITestSuit = {
    compilerConfig: {
        FILES,
        FILESBASE: path.join(__dirname, "./wechat-miniprogram-examples/ZhiHuDaily"),
        cmd: ["-db", "-pc", FILES.length.toString()],
        outputDir: path.join(__dirname, "./out"),
    },
    name: "suit11",
    units: [],
};
