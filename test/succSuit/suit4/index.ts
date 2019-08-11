import * as path from "path";
import {ITestSuit} from "../index";

const FILES = [
    "./pages/index/index.wxss",
];

export const testSuit: ITestSuit = {
    compilerConfig: {
        FILES,
        FILESBASE: path.join(__dirname, "./proj"),
        cmd: ["-db", "-pc", FILES.length.toString()],
        outputDir: path.join(__dirname, "./out"),
    },
    name: "suit4",
    units: [],
};
