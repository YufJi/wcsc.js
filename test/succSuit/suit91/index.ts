import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/Recommend/recommend.wxss",
  "./pages/category/category.wxss",
  "./pages/group/group.wxss",
  "./pages/home/home.wxss",
  "./pages/login/login.wxss",
  "./pages/me/me.wxss",
  "./pages/shopCar/shopCar.wxss",
  "./pages/shopDetail/shopDetail.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wx-wineclien"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit91",
  units: [],
};
