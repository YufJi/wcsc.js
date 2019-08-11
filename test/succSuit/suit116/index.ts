import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss", "./comm/style/animation.wxss", "./comm/style/tab.wxss", "./component/filmList/filmList.wxss", "./component/list/list.wxss", "./component/message/message.wxss", "./component/nullTip/nullTip.wxss", "./pages/about/about.wxss", "./pages/coming/coming.wxss", "./pages/editPersonInfo/editPersonInfo.wxss", "./pages/favorite/favorite.wxss", "./pages/filmDetail/filmDetail.wxss", "./pages/gallery/gallery.wxss", "./pages/history/history.wxss", "./pages/location/location.wxss", "./pages/my/my.wxss", "./pages/personDetail/personDetail.wxss", "./pages/personInfo/personInfo.wxss", "./pages/popular/popular.wxss", "./pages/search/search.wxss", "./pages/searchResult/searchResult.wxss", "./pages/setting/setting.wxss", "./pages/shake/shake.wxss", "./pages/skin/skin.wxss", "./pages/systemInfo/systemInfo.wxss", "./pages/top/top.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wechat-weapp-movie"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit116",
  units: [],
};
