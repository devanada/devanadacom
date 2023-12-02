import {
  SiPowershell,
  SiGooglechrome,
  SiCounterstrike,
  SiVisualstudiocode,
} from "react-icons/si";
import { GiDiabloSkull } from "react-icons/gi";
import { ImFolderOpen } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { VscFilePdf } from "react-icons/vsc";
import { IconType } from "react-icons";

import { FenceType } from "@/utils/types/fences";

interface MenuType {
  [key: string]: IconType;
}

export const menu: MenuType = {
  chrome: SiGooglechrome,
  vscode: SiVisualstudiocode,
  cmd: SiPowershell,
  cs: SiCounterstrike,
  diablo: GiDiabloSkull,
  projects: ImFolderOpen,
  works: ImFolderOpen,
  about: FaUserCircle,
  resume: VscFilePdf,
  personalize: FaGear,
};

export const programs: FenceType[] = [
  {
    id: "chrome",
    title: "Chrome",
    src: "https://www.google.com/webhp?igu=1",
    type: "program",
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    src: "https://github1s.com/devanada/devanadacom",
    type: "program",
  },
  {
    id: "cmd",
    title: "Windows Powershell",
    src: "https://cmd.to",
    type: "program",
  },
  {
    id: "cs",
    title: "Counter Strike",
    src: "https://play-cs.com/en/servers",
    type: "program",
  },
  {
    id: "diablo",
    title: "Diablo",
    src: "https://d07riv.github.io/diabloweb",
    type: "program",
  },
];

export const folders: FenceType[] = [
  {
    id: "projects",
    title: "Projects",
    src: "https://api.github.com/users/devanada/starred?sort=updated",
    type: "folder",
  },
  {
    id: "works",
    title: "Works",
    src: "https://cache.showwcase.com/user/devanada/experiences",
    type: "folder",
  },
  {
    id: "about",
    title: "About Me",
    src: "https://www.showwcase.com/devanada",
    type: "program",
  },
  {
    id: "resume",
    title: "Resume",
    src: "https://resume.showwcase.com/devanada.pdf",
    type: "program",
  },
];
