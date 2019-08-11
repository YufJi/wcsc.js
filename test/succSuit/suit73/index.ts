import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/audio/audio.wxss",
  "./pages/find/find.wxss",
  "./pages/index/index.wxss",
  "./pages/info/info.wxss",
  "./pages/logs/logs.wxss",
  "./pages/message/message.wxss",
  "./pages/mine/mine.wxss",
  "./pages/moments/moments.wxss",
  "./pages/newfriend/newfriend.wxss",
  "./pages/note/note.wxss",
  "./pages/picker/picker.wxss",
  "./pages/upload/upload.wxss",
  "./pages/wechat/wechat.wxss",
  "./pages/ws/ws.wxss",
  "./wa-ui.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./WeApp"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit73",
  units: [],
};
