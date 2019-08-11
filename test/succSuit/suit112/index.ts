import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss", "./lib/wxParse/wxParse.wxss", "./pages/auth/login/login.wxss", "./pages/auth/register/register.wxss", "./pages/auth/reset/reset.wxss", "./pages/brand/brand.wxss", "./pages/brandDetail/brandDetail.wxss", "./pages/cart/cart.wxss", "./pages/catalog/catalog.wxss", "./pages/category/category.wxss", "./pages/comment/comment.wxss", "./pages/commentPost/commentPost.wxss", "./pages/goods/goods.wxss", "./pages/hotGoods/hotGoods.wxss", "./pages/index/index.wxss", "./pages/logs/logs.wxss", "./pages/newGoods/newGoods.wxss", "./pages/pay/pay.wxss", "./pages/payResult/payResult.wxss", "./pages/search/search.wxss", "./pages/shopping/address/address.wxss", "./pages/shopping/addressAdd/addressAdd.wxss", "./pages/shopping/checkout/checkout.wxss", "./pages/topic/topic.wxss", "./pages/topicComment/topicComment.wxss", "./pages/topicDetail/topicDetail.wxss", "./pages/ucenter/address/address.wxss", "./pages/ucenter/addressAdd/addressAdd.wxss", "./pages/ucenter/collect/collect.wxss", "./pages/ucenter/coupon/coupon.wxss", "./pages/ucenter/express/express.wxss", "./pages/ucenter/feedback/feedback.wxss", "./pages/ucenter/footprint/footprint.wxss", "./pages/ucenter/index/index.wxss", "./pages/ucenter/order/order.wxss", "./pages/ucenter/orderDetail/orderDetail.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./nideshop-mini-program"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit112",
  units: [],
};
