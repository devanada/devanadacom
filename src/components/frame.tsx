"use client";

import React from "react";

import Window from "./window";

import { useAppSelector } from "@/utils/redux/hooks";
import { FrameType } from "@/utils/types/frame";

function Frame(props: FrameType) {
  const { title, src } = props;

  return (
    <Window {...props}>
      <iframe className="h-full w-full" title={title} src={src} />
    </Window>
  );
}

export default function Frames() {
  const windows = useAppSelector((state) => state.menuReducer.windows);

  return (
    <>
      {windows.map((window) => (
        <Frame key={window.id} {...window} />
      ))}
    </>
  );
}
