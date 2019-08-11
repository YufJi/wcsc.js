import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/case/detaile/detaile.wxss",
  "./pages/case/list/list.wxss",
  "./pages/designer/designer.wxss",
  "./pages/pic/detaile/detaile.wxss",
  "./pages/pic/list/list.wxss",
  "./pages/yuyue/yuyue.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wx-master/demo"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit43",
  units: [],
};
