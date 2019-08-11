import * as path from "path";
import {ITestSuit} from "../index";

const FILES = [
    "./index.wxss",
    "./index1.wxss",
    "./index2.wxss",
];

export const testSuit: ITestSuit = {
    compilerConfig: {
        FILES,
        FILESBASE: path.join(__dirname, "./proj"),
        cmd: ["-db", "-pc", FILES.length.toString()],
        outputDir: path.join(__dirname, "./out"),
    },
    name: "suit2",
    units: [],
};
