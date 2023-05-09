import type { Metadata } from "next";

import Fences from "@/components/fences";
import Frames from "@/components/frame";
import { FenceType } from "@/utils/types/fences";

export const metadata: Metadata = {
  title: "Devanada's Desktop",
  description: "Welcome to my desktop",
};

const programs: FenceType[] = [
  {
    id: "chrome",
    title: "Chrome",
    src: "https://www.google.com/webhp?igu=1",
    type: "program",
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    src: "https://github1s.com/devanada/desktop-app",
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

const folders: FenceType[] = [
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
];

export default async function Page() {
  return (
    <div className="flex flex-grow flex-col h-full w-full p-3 gap-3 overflow-hidden">
      <Fences title="Programs" datas={programs} />
      <Fences title="Folders" datas={folders} />
      <Frames />
    </div>
  );
}
