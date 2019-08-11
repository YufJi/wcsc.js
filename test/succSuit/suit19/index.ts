import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./channel/channel.wxss",
  "./channel/channel_alllist/channel_alllist.wxss",
  "./channel/channel_apply/channel_apply.wxss",
  "./channel/channel_check/channel_check.wxss",
  "./channel/channel_checklist/channel_checklist.wxss",
  "./channel/channel_view/channel_view.wxss",
  "./neiwang/grsw_forward/grsw_forward.wxss",
  "./neiwang/grsw_list/grsw_list.wxss",
  "./neiwang/grsw_reply/grsw_reply.wxss",
  "./neiwang/grsw_select_person/grsw_select_person.wxss",
  "./neiwang/news_list/news_list.wxss",
  "./neiwang/page_detail/page_detail.wxss",
  "./neiwang/tongxunlu/tongxunlu.wxss",
  "./page_rec_photo/page_add/page_add.wxss",
  "./page_rec_photo/page_main/page_main.wxss",
  "./pages/file_download/file_download.wxss",
  "./pages/index/index.wxss",
  "./pages/page_bind/page_bind.wxss",
  "./pages/page_preview_image/page_preview_image.wxss",
  "./pages/webview/webview.wxss",
  "./wxParse/wxParse.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wxPrj"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit19",
  units: [],
};
