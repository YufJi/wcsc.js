import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./pages/chat/chat.wxss", "./pages/index/index.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wafer-client-demo"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit114",
  units: [],
};
