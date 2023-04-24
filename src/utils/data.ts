import {
  SiPowershell,
  SiGooglechrome,
  SiCounterstrike,
  SiVisualstudiocode,
} from "react-icons/si";
import { GiDiabloSkull } from "react-icons/gi";
import { ImFolderOpen } from "react-icons/im";
import { IconType } from "react-icons";

interface MenuType {
  [key: string]: IconType;
}

export const menu: MenuType = {
  chrome: SiGooglechrome,
  vscode: SiVisualstudiocode,
  cmd: SiPowershell,
  cs: SiCounterstrike,
  diablo: GiDiabloSkull,
  folder: ImFolderOpen,
};
