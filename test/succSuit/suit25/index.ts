import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/account/account.wxss",
  "./pages/index/index.wxss",
  "./pages/logs/logs.wxss",
  "./pages/menu/menu.wxss",
  "./pages/upload/upload.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./mp-family"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit25",
  units: [],
};
