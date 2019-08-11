import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./css/font.wxss",
  "./pages/address-switch/address-switch.wxss",
  "./pages/center/center.wxss",
  "./pages/coupon-detail/coupon-detail.wxss",
  "./pages/coupon-list/coupon-list.wxss",
  "./pages/detail/detail.wxss",
  "./pages/editname/editname.wxss",
  "./pages/editphone/editphone.wxss",
  "./pages/home/home.wxss",
  "./pages/index/index.wxss",
  "./pages/list/list.wxss",
  "./pages/login/login.wxss",
  "./pages/more/more.wxss",
  "./pages/order/order.wxss",
  "./pages/order-detail/order-detail.wxss",
  "./pages/region/region.wxss",
  "./pages/store-detail/store-detail.wxss",
  "./pages/user-detail/user-detail.wxss",
  "./template/cart/cart.wxss",
  "./template/cart-ctrl/cart-ctrl.wxss",
  "./template/coupon-item/coupon-item.wxss",
  "./template/product-item/product-item.wxss",
  "./template/top-nav-sel/top-nav-sel.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./dj"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit28",
  units: [],
};
