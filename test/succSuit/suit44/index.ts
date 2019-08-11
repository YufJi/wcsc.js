import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./page/activity/discount/discount.wxss",
  "./page/activity/lists/lists.wxss",
  "./page/activity/tenGroup/tenGroup.wxss",
  "./page/component/detail/detail.wxss",
  "./page/component/group/group.wxss",
  "./page/eval/eval.wxss",
  "./page/hot/hot.wxss",
  "./page/index/index.wxss",
  "./page/search/search.wxss",
  "./page/user/user.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wechat-app-ipinbb-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit44",
  units: [],
};
