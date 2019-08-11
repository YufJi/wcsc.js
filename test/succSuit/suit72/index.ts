import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/answer/answer.wxss",
  "./pages/chat/chat.wxss",
  "./pages/discovery/discovery.wxss",
  "./pages/index/index.wxss",
  "./pages/more/more.wxss",
  "./pages/notify/notify.wxss",
  "./pages/question/question.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-wechat-zhihu"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit72",
  units: [],
};
