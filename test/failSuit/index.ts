
export interface ICompilerConfig {
  cmd: string[];
  FILESBASE: string;
  outputDir: string;
  FILES: string[];
  writeJs ?: boolean;
}

export interface ITestCase {
  name: string;
  renderPath: string;
}

export interface ITestSuit {
  name: string;
  compilerConfig: ICompilerConfig;
  units: ITestCase[];
}
