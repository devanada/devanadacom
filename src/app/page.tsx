import type { Metadata } from "next";

import Fences from "@/components/fences";
import Frames from "@/components/frame";
import RightMenu from "@/components/right-menu";

export const metadata: Metadata = {
  title: "Devanada's Desktop",
  description: "Welcome to my desktop",
};

const programs = [
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

const folders = [
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

export default async function Page() {
  return (
    <>
      <div className="h-full w-full relative flex flex-col gap-3 p-3">
        <Fences title="Programs" datas={programs} />
        <Fences title="Other" datas={folders} />
        <Frames />
      </div>
      <RightMenu />
    </>
  );
}
