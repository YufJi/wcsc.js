import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/activity/activity.wxss",
  "./pages/activitydetail/activitydetail.wxss",
  "./pages/apply/apply.wxss",
  "./pages/conference/conference.wxss",
  "./pages/conferencedetail/conferencedetail.wxss",
  "./pages/index/index.wxss",
  "./pages/my/my.wxss",
  "./pages/myconferencelist/myconferencelist.wxss",
  "./pages/property/property.wxss",
  "./pages/question/question.wxss",
  "./pages/resource/resource.wxss",
  "./pages/service/service.wxss",
  "./pages/servicedetail/servicedetail.wxss",
  "./pages/space/space.wxss",
  "./pages/spacereserve/spacereserve.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./wechatapp-demo-master"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit47",
  units: [],
};
