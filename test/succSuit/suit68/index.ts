import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./dist/wa-ui.wxss",
  "./pages/background-color/background-color.wxss",
  "./pages/basic/basic.wxss",
  "./pages/button/button.wxss",
  "./pages/button-icon/button-icon.wxss",
  "./pages/general/general.wxss",
  "./pages/grid/grid.wxss",
  "./pages/grid-view/grid-view.wxss",
  "./pages/index/index.wxss",
  "./pages/input/input.wxss",
  "./pages/list/list.wxss",
  "./pages/mark/mark.wxss",
  "./pages/start/start.wxss",
  "./pages/test/test.wxss",
  "./wa-ui.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./Wa-UI"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit68",
  units: [],
};
