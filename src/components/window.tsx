"use client";

import { useState, ReactNode } from "react";
import {
  VscChromeMinimize as Minimize,
  VscChromeMaximize as Maximize,
  VscChromeRestore as Restore,
  VscChromeClose as Close,
} from "react-icons/vsc";
import { Rnd } from "react-rnd";

import useWindowsStore from "@/utils/states/windows";
import { FenceType } from "@/utils/types/fences";
import { menu } from "@/utils/constants/constant";

interface WindowProps extends FenceType {
  children: ReactNode;
}

interface SizeType {
  x: number;
  y: number;
  width: number | string;
  height: number | string;
}

export default function Window(props: Readonly<WindowProps>) {
  const { id, title, children } = props;
  const { removeWindow } = useWindowsStore((state) => state);

  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [size, setSize] = useState<SizeType>({
    x: 0,
    y: 0,
    width: "75%",
    height: "65%",
  });
  const menus = Object.keys(menu);

  const handleResize = (resize: boolean) => {
    setIsFullScreen(resize);
    setSize(
      resize
        ? { x: 0, y: 0, width: "100%", height: "100%" }
        : { x: 0, y: 0, width: "75%", height: "65%" }
    );
  };

  const handleZindex = (zIndex: string) => {
    menus.forEach((menu) => {
      if (document.getElementById(menu)) {
        document.getElementById(menu)!.style.zIndex = "10";
      }
    });
    document.getElementById(id)!.style.zIndex = zIndex !== "" ? zIndex : "20";
  };

  const handleClose = () => {
    removeWindow(props);
  };

  return (
    <Rnd
      id={id}
      className="flex h-full w-full flex-col border border-black bg-white dark:bg-neutral-800 z-10"
      default={size}
      size={size}
      position={size}
      minHeight={"50%"}
      minWidth={"45%"}
      enableResizing={!isFullScreen}
      disableDragging={isFullScreen}
      dragHandleClassName="handle"
      bounds="parent"
      onMouseDown={() => handleZindex("")}
      onDragStop={(e, d) => {
        setSize({ ...size, x: d.x, y: d.y });
      }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          ...position,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
    >
      <div className="sticky top-0 flex h-8 w-full items-center justify-between bg-white dark:bg-zinc-950 px-3">
        <div className="handle flex flex-grow items-center">
          <p className="font-normal text-zinc-950 dark:text-white">{title}</p>
        </div>
        <div className="flex h-full items-center justify-end gap-1">
          <div
            id="action-minimize"
            className="flex h-full cursor-default items-center px-3 hover:bg-neutral-600 active:bg-slate-800"
            onClick={handleClose}
          >
            <Minimize className="text-xl text-zinc-950 dark:text-white" />
          </div>
          <div
            id="action-resize"
            className="flex h-full cursor-default items-center px-3 hover:bg-neutral-600 active:bg-slate-800"
            onClick={() => {
              handleResize(isFullScreen ? false : true);
              handleZindex("20");
            }}
          >
            {isFullScreen ? (
              <Restore className="text-xl text-zinc-950 dark:text-white" />
            ) : (
              <Maximize className="text-xl text-zinc-950 dark:text-white" />
            )}
          </div>
          <div
            id="action-close"
            className="flex h-full cursor-default items-center px-3 hover:bg-neutral-600 active:bg-slate-800"
            onClick={handleClose}
          >
            <Close className="text-xl text-zinc-950 dark:text-white" />
          </div>
        </div>
      </div>
      <div className="w-full overflow-auto h-[calc(100%-2.25rem)]">
        {children}
      </div>
    </Rnd>
  );
}
