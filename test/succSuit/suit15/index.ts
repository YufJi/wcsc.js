import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/alarm/alarm.wxss",
  "./pages/common/blockSection.wxss",
  "./pages/env/env.wxss",
  "./pages/equipment/div.wxss",
  "./pages/equipment/equipment-add.wxss",
  "./pages/equipment/server.wxss",
  "./pages/equipment/switch.wxss",
  "./pages/equipment/tma.wxss",
  "./pages/idc/idc.wxss",
  "./pages/index/index.wxss",
  "./pages/login/login.wxss",
  "./pages/logs/logs.wxss",
  "./pages/profile/profile.wxss",
  "./pages/project/project.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./first-wx-project"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
  },
  name: "suit15",
  units: [],
};
