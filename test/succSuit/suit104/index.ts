import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/allJoke/allJoke.wxss",
  "./pages/detailInfo/detailInfo.wxss",
  "./pages/index/index.wxss",
  "./pages/logs/logs.wxss",
  "./pages/lookBigPicture/lookBigPicture.wxss",
  "./pages/play/play.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./JokeProject"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit104",
  units: [],
};
