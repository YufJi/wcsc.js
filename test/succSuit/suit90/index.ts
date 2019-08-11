import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./page/component/album/index.wxss",
  "./page/component/artist/index.wxss",
  "./page/component/cloud/index.wxss",
  "./page/component/djradio/index.wxss",
  "./page/component/fm/index.wxss",
  "./page/component/home/index.wxss",
  "./page/component/login/index.wxss",
  "./page/component/me/index.wxss",
  "./page/component/mv/index.wxss",
  "./page/component/new/index.wxss",
  "./page/component/playing/index.wxss",
  "./page/component/playlist/index.wxss",
  "./page/component/program/index.wxss",
  "./page/component/recommend/index.wxss",
  "./page/component/record/index.wxss",
  "./page/component/recsongs/index.wxss",
  "./page/component/search/index.wxss",
  "./page/component/simi/index.wxss",
  "./page/component/toplist/index.wxss",
  "./page/component/user/index.wxss",
  "./utils/common.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./NeteaseMusicWxMiniApp"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit90",
  units: [],
};
