import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/detail/detail.wxss",
  "./pages/index/index.wxss",
  "./pages/info/borrow/borrow.wxss",
  "./pages/info/borrow/comment/comment.wxss",
  "./pages/info/collect/collect.wxss",
  "./pages/info/good/good.wxss",
  "./pages/info/info.wxss",
  "./pages/info/login/login.wxss",
  "./pages/info/message/message.wxss",
  "./pages/info/order/order.wxss",
  "./pages/info/profile/profile.wxss",
  "./pages/info/reg/reg.wxss",
  "./pages/info/reserve/reserve.wxss",
  "./pages/info/setting/setting.wxss",
  "./pages/more/more.wxss",
  "./pages/search/search.wxss",
  "./pages/session/session.wxss",
  "./pages/template/template-book/template-book.wxss",
  "./pages/template/template-list/template-list.wxss",
  "./pages/template/template-star/template-star.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./WxBook/WxBook"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit16",
  units: [],
};
