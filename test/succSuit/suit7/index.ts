import * as path from "path";
import {ITestSuit} from "../index";

const FILES = [
  "./app.wxss",
  "./pages/movie/movie.wxss",
  "./pages/search/search.wxss",
  "./pages/top250/top250.wxss",
];

export const testSuit: ITestSuit = {
    compilerConfig: {
        FILES,
        FILESBASE: path.join(__dirname, "./wxapp-movie"),
        cmd: ["-db", "-pc", FILES.length.toString()],
        outputDir: path.join(__dirname, "./out"),
    },
    name: "suit7",
    units: [],
};
