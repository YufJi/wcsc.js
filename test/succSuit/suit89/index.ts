import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./page/common/common.wxss",
  "./page/component/address/address.wxss",
  "./page/component/cart/cart.wxss",
  "./page/component/category/category.wxss",
  "./page/component/details/details.wxss",
  "./page/component/index.wxss",
  "./page/component/list/list.wxss",
  "./page/component/orders/orders.wxss",
  "./page/component/search/search.wxss",
  "./page/component/user/user.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wxapp-mall"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit89",
  units: [],
};
