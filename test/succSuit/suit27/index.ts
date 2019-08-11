import * as path from "path";
import { ITestSuit } from "../index";

const FILES = [
  "./app.wxss",
  "./pages/movies/more-movie/more-movie.wxss",
  "./pages/movies/movie/movie-template.wxss",
  "./pages/movies/movie-grid/movie-grid-template.wxss",
  "./pages/movies/movie-list/movie-list-template.wxss",
  "./pages/movies/movies-detail/movies-detail.wxss",
  "./pages/movies/movies.wxss",
  "./pages/movies/stars/stars-template.wxss",
  "./pages/posts/post-detail/post-detail.wxss",
  "./pages/posts/post-item/post-item-template.wxss",
  "./pages/posts/post.wxss",
  "./pages/welcome/welcome.wxss",
];

export const testSuit: ITestSuit = {
  compilerConfig: {
    FILES,
    FILESBASE: path.join(__dirname, "./WeChat_Reader-Movie"),
    cmd: ["-db", "-pc", FILES.length.toString()],
    outputDir: path.join(__dirname, "./out"),
    writeJs: false,
  },
  name: "suit27",
  units: [],
};
