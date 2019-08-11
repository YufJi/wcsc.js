import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/contact/contact.wxss",
  "./pages/dynamic/dynamic.wxss",
  "./pages/dynamic/music/music.wxss",
  "./pages/index/index.wxss",
  "./pages/logs/logs.wxss",
  "./pages/message/chat/chat.wxss",
  "./pages/message/message.wxss",
  "./pages/message/search/search.wxss",
  "./pages/study/directory.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./SmallAppForQQ"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit85",
  units: [],
};
