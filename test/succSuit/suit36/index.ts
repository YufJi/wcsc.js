import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/history/history.wxss",
  "./pages/index/detail/detail.wxss",
  "./pages/index/index.wxss",
  "./pages/index/monthly/monthly.wxss",
  "./pages/movie/detail/detail.wxss",
  "./pages/movie/movie.wxss",
  "./pages/music/detail/detail.wxss",
  "./pages/music/monthly/monthly.wxss",
  "./pages/music/music.wxss",
  "./pages/reading/essay/essay.wxss",
  "./pages/reading/monthly/monthly.wxss",
  "./pages/reading/question/question.wxss",
  "./pages/reading/reading.wxss",
  "./pages/reading/serial/serial.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-one"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit36",
  units: [],
};
