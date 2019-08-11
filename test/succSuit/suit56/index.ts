import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./page/home/index.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wechat-JD-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit56",
  units: [],
};
