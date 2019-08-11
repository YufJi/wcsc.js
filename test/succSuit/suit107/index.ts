import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss", "./pages/asset/index.wxss", "./pages/authorize/index.wxss", "./pages/category/category.wxss", "./pages/coupons/index.wxss", "./pages/goods-details/index.wxss", "./pages/index/index.wxss", "./pages/kanjia/index.wxss", "./pages/maidan/index.wxss", "./pages/my/index.wxss", "./pages/mycoupons/index.wxss", "./pages/notice/show.wxss", "./pages/recharge/index.wxss", "./pages/score/index.wxss", "./pages/score-excharge/index.wxss", "./pages/shop-cart/index.wxss", "./pages/sign/index.wxss", "./pages/start/start.wxss", "./pages/template-cart/template-cart.wxss", "./pages/to-pay-order/index.wxss", "./pages/withdraw/index.wxss", "./pages/wuliu/index.wxss", "./template/calendar/index.wxss", "./template/datepicker/index.wxss", "./weui/base/fn.wxss", "./weui/base/mixin/setArrow.wxss", "./weui/base/mixin/setOnepx.wxss", "./weui/base/mixin/text.wxss", "./weui/base/reset.wxss", "./weui/base/variable/color.wxss", "./weui/base/variable/global.wxss", "./weui/base/variable/weui-button.wxss", "./weui/base/variable/weui-cell.wxss", "./weui/base/variable/weui-dialog.wxss", "./weui/base/variable/weui-grid.wxss", "./weui/base/variable/weui-msg.wxss", "./weui/base/variable/weui-progress.wxss", "./weui/weui.wxss", "./weui/widget/weui-agree/weui-agree.wxss", "./weui/widget/weui-animate/weui-animate.wxss", "./weui/widget/weui-button/weui-button.wxss", "./weui/widget/weui-cell/weui-access.wxss", "./weui/widget/weui-cell/weui-cell.wxss", "./weui/widget/weui-cell/weui-check.wxss", "./weui/widget/weui-cell/weui-form/weui-form-preview.wxss", "./weui/widget/weui-cell/weui-form/weui-form_common.wxss", "./weui/widget/weui-cell/weui-form/weui-select.wxss", "./weui/widget/weui-cell/weui-form/weui-vcode.wxss", "./weui/widget/weui-cell/weui-form.wxss", "./weui/widget/weui-cell/weui-switch.wxss", "./weui/widget/weui-cell/weui-uploader.wxss", "./weui/widget/weui-flex/weui-flex.wxss", "./weui/widget/weui-footer/weui-footer.wxss", "./weui/widget/weui-grid/weui-grid.wxss", "./weui/widget/weui-loading/weui-loading.wxss", "./weui/widget/weui-media-box/weui-media-box.wxss", "./weui/widget/weui-page/weui-article.wxss", "./weui/widget/weui-page/weui-msg.wxss", "./weui/widget/weui-panel/weui-panel.wxss", "./weui/widget/weui-progress/weui-progress.wxss", "./weui/widget/weui-searchbar/weui-searchbar.wxss", "./weui/widget/weui-tab/weui-navbar.wxss", "./weui/widget/weui-tab/weui-tab.wxss", "./weui/widget/weui-tips/weui-badge.wxss", "./weui/widget/weui-tips/weui-loadmore.wxss", "./wxParse/wxParse.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./noodle_shop_procedures"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit107",
  units: [],
};
