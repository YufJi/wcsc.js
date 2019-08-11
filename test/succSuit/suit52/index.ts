import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./components/trip/trip.wxss",
  "./pages/destination/destination.wxss",
  "./pages/explore/explore.wxss",
  "./pages/index/index.wxss",
  "./pages/trip/trip.wxss",
  "./pages/user/user.wxss",
  "./pages/waypoint/waypoint.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-demo-breadtrip-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit52",
  units: [],
};
