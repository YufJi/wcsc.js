import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/main/main.wxss",
  "./pages/post/post.wxss",
  "./pages/specific/specific.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-demo"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit87",
  units: [],
};
