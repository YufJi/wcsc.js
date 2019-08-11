import * as path from "path";
export interface ITestConfigListItem {
    configPath: string;
}

export let testConfigList: ITestConfigListItem[] = [
  {
    configPath: path.join(__dirname, "./failSuit/suit0/index"),
  },
  {
    configPath: path.join(__dirname, "./failSuit/suit1/index"),
  },
  {
    configPath: path.join(__dirname, "./failSuit/suit2/index"),
  },
];
