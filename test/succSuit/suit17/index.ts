import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/common/index.wxss",
  "./pages/common/lib/weui.wxss",
  "./pages/index/index.wxss",
  "./pages/info/auth/auth.wxss",
  "./pages/info/index/index.wxss",
  "./pages/info/payment/payment.wxss",
  "./pages/info/salary/salary.wxss",
  "./pages/logs/logs.wxss",
  "./pages/overwork/create/create.wxss",
  "./pages/sample/index/index.wxss",
  "./pages/settings/settings.wxss",
  "./pages/timecard/history/history.wxss",
  "./pages/timecard/normal/normal.wxss",
  "./pages/user/user.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-attendance"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit17",
  units: [],
};
