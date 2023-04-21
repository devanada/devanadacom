import { IconType } from "react-icons";
import {
  SiPowershell,
  SiGooglechrome,
  SiVisualstudiocode,
  SiCounterstrike
} from "react-icons/si";
import {GiDiabloSkull} from "react-icons/gi"

interface MenuType {
  [key: string]: IconType;
}

export const menu: MenuType = {
  chrome: SiGooglechrome,
  vscode: SiVisualstudiocode,
  cmd: SiPowershell,
  cs: SiCounterstrike,
  diablo: GiDiabloSkull
};
