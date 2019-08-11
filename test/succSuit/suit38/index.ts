import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./page/four/index.wxss",
  "./page/one/index.wxss",
  "./page/three/index.wxss",
  "./page/two/index.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./xiaoxiaoxiao/sideslip"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit38",
  units: [],
};
