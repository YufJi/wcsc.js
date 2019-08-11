import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./component/calendar/iconfont/iconfont.wxss", "./component/calendar/index.wxss", "./pages/calendar/index.wxss", "./pages/calendarTemplate/index.wxss", "./pages/datepickerTemplate/index.wxss", "./pages/index/index.wxss", "./template/calendar/index.wxss", "./template/datepicker/index.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wx_calendar/src"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit113",
  units: [],
};
