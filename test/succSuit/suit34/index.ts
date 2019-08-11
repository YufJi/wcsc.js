import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/book/book.wxss",
  "./pages/detail/detail.wxss",
  "./pages/edit_addr/edit_addr.wxss",
  "./pages/index/index.wxss",
  "./pages/technicain_detail/technicain_detail.wxss",
  "./pages/technician/technician.wxss",
  "./pages/user/user.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./weapp-meirong"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit34",
  units: [],
};
