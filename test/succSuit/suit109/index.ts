import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss", "./page/API/animation/animation.wxss", "./page/API/background-audio/background-audio.wxss", "./page/API/canvas/canvas.wxss", "./page/API/download-file/download-file.wxss", "./page/API/file/file.wxss", "./page/API/get-location/get-location.wxss", "./page/API/get-network-type/get-network-type.wxss", "./page/API/get-system-info/get-system-info.wxss", "./page/API/get-user-info/get-user-info.wxss", "./page/API/image/image.wxss", "./page/API/index/index.wxss", "./page/API/login/login.wxss", "./page/API/navigation-bar-loading/navigation-bar-loading.wxss", "./page/API/navigator/navigator.wxss", "./page/API/on-accelerometer-change/on-accelerometer-change.wxss", "./page/API/on-compass-change/on-compass-change.wxss", "./page/API/open-location/open-location.wxss", "./page/API/pull-down-refresh/pull-down-refresh.wxss", "./page/API/request/request.wxss", "./page/API/request-payment/request-payment.wxss", "./page/API/set-navigation-bar-title/set-navigation-bar-title.wxss", "./page/API/storage/storage.wxss", "./page/API/upload-file/upload-file.wxss", "./page/API/voice/voice.wxss", "./page/API/web-socket/web-socket.wxss", "./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxss", "./page/component/component-pages/wx-button/wx-button.wxss", "./page/component/component-pages/wx-checkbox/wx-checkbox.wxss", "./page/component/component-pages/wx-form/wx-form.wxss", "./page/component/component-pages/wx-icon/wx-icon.wxss", "./page/component/component-pages/wx-image/wx-image.wxss", "./page/component/component-pages/wx-input/wx-input.wxss", "./page/component/component-pages/wx-label/wx-label.wxss", "./page/component/component-pages/wx-navigator/wx-navigator.wxss", "./page/component/component-pages/wx-picker/wx-picker.wxss", "./page/component/component-pages/wx-progress/wx-progress.wxss", "./page/component/component-pages/wx-radio/wx-radio.wxss", "./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxss", "./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxss", "./page/component/component-pages/wx-swiper/wx-swiper.wxss", "./page/component/component-pages/wx-view/wx-view.wxss", "./page/component/index.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wechat-app-demo"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit109",
  units: [],
};
