import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss", "./pages/about/about.wxss", "./pages/comments/comments.wxss", "./pages/detail/detail.wxss", "./pages/hot/hot.wxss", "./pages/index/index.wxss", "./pages/list/list.wxss", "./pages/logs/logs.wxss", "./pages/page/page.wxss", "./pages/pay/pay.wxss", "./pages/poster/poster.wxss", "./pages/readlog/readlog.wxss", "./pages/topic/topic.wxss", "./pages/webpage/webpage.wxss", "./templates/components/wxa-plugin-canvas-poster/index/index.wxss", "./templates/components/wxa-plugin-canvas-poster/poster/index.wxss", "./templates/modal-view/modal-view.wxss", "./vendor/ZanUI/index.wxss", "./wxParse/wxParse.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./winxin-app-watch-life"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit108",
  units: [],
};
