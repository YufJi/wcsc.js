import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/carlist/carlist.wxss",
  "./pages/detail/detail.wxss",
  "./pages/favorites/favorites.wxss",
  "./pages/list/list.wxss",
  "./pages/message/message.wxss",
  "./pages/option/option.wxss",
  "./pages/success/success.wxss",
  "./pages/trucks/trucks.wxss",
  "./pages/user/user.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./kachezhijia"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit53",
  units: [],
};
