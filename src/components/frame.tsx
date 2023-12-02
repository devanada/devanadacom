"use client";

import { ElementType } from "react";

import { Projects, Works, Personalize } from "./frames";
import Window from "./window";

import useWindowsStore from "@/utils/states/windows";
import { FenceType } from "@/utils/types/fences";

interface FolderType {
  [key: string]: ElementType;
}

export const folders: FolderType = {
  projects: Projects,
  works: Works,
  personalize: Personalize,
};

function Frame(props: Readonly<FenceType>) {
  const { title, src, type, id } = props;

  if (type === "program") {
    return (
      <Window {...props}>
        {src && <iframe className="h-full w-full" title={title} src={src} />}
      </Window>
    );
  } else {
    const Folders = folders[id];

    return <Folders {...props} />;
  }
}

export default function Frames() {
  const windows = useWindowsStore((state) => state.windows);

  return (
    <>
      {windows.map((window) => (
        <Frame key={window.id} {...window} />
      ))}
    </>
  );
}
