import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss", "./pages/billing/index.wxss", "./pages/charge/index.wxss", "./pages/index/index.wxss", "./pages/logs/logs.wxss", "./pages/my/index.wxss", "./pages/scanresult/index.wxss", "./pages/wallet/index.wxss", "./pages/warn/index.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./ofo-applet-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit111",
  units: [],
};
