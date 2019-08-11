import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./components/card/card.wxss", "./components/fruitMachine/fruitMachine.wxss", "./components/lock/lock.wxss", "./components/shake/shake.wxss", "./components/slotMachine/slotMachine.wxss", "./components/wheel/wheel.wxss", "./pages/fruitMachine/fruitMachine.wxss", "./pages/gestureLock/gestureLock.wxss", "./pages/gridcard/gridcard.wxss", "./pages/index/index.wxss", "./pages/scratch/scratch.wxss", "./pages/shake/shake.wxss", "./pages/slotMachine/slotMachine.wxss", "./pages/wheel/wheel.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wxapp-market"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit117",
  units: [],
};
