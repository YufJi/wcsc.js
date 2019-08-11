import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss", "./pages/discover/discover.wxss", "./pages/index/index.wxss", "./pages/login/login.wxss", "./pages/qrcode/qrcode.wxss", "./pages/register/register.wxss", "./pages/setting/setting.wxss", "./pages/work-detail/work-detail.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-artand"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit115",
  units: [],
};
