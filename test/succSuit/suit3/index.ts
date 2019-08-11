import * as path from "path";
import {ITestSuit} from "../index";

const FILES = [
    "./index1.wxss",
    "./index.wxss",
    "./index2.wxss",
    "./index3.wxss",
    "./app.wxss",
];

export const testSuit: ITestSuit = {
    compilerConfig: {
        FILES,
        FILESBASE: path.join(__dirname, "./proj"),
        cmd: ["-db", "-pc", FILES.length.toString()],
        outputDir: path.join(__dirname, "./out"),
    },
    name: "suit3",
    units: [],
};
