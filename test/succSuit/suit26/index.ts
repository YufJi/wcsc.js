import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/index/index.wxss",
  "./pages/movie/movie.wxss",
  "./pages/movieDetail/movieDetail.wxss",
  "./pages/music/music.wxss",
  "./pages/musicDetail/musicDetail.wxss",
  "./pages/read/read.wxss",
  "./pages/readDetail/readDetail.wxss",
  "./wxParse/wxParse.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./Information-WX-App"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit26",
  units: [],
};
