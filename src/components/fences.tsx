"use client";

import { FcOpenedFolder } from "react-icons/fc";
import React from "react";

import Program from "./program";

export default function Fences() {
  const programs = [
    {
      id: "chrome",
      title: "Chrome",
      src: "https://www.google.com/webhp?igu=1",
    },
    {
      id: "vscode",
      title: "Visual Studio Code",
      src: "https://github1s.com/devanada/desktop-app",
    },
    {
      id: "cmd",
      title: "Windows Powershell",
      src: "https://cmd.to",
    },
    {
      id: "cs",
      title: "Counter Strike",
      src: "https://play-cs.com/en/servers",
    },
    {
      id: "diablo",
      title: "Diablo",
      src: "https://d07riv.github.io/diabloweb",
    },
  ];
  const folders = [
    {
      title: "Projects",
    },
  ];

  return (
    <div className="h-fit w-1/3 rounded-lg bg-black/70">
      <div className="flex w-full justify-center rounded-t-lg bg-black/75">
        <p className="text-center text-white">Programs</p>
      </div>
      <div className="grid auto-cols-max auto-rows-max grid-cols-6 gap-1 p-2">
        {programs.map((data) => (
          <Program key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
