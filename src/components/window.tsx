"use client";

import { useState, ReactNode } from "react";
import {
  VscChromeMinimize as Minimize,
  VscChromeMaximize as Maximize,
  VscChromeRestore as Restore,
  VscChromeClose as Close,
} from "react-icons/vsc";
import { Rnd } from "react-rnd";
import clsx from "clsx";

import { removeWindow } from "@/utils/redux/features/menuSlice";
import { useAppDispatch } from "@/utils/redux/hooks";
import { FenceType } from "@/utils/types/fences";
import { menu } from "@/utils/data";

interface WindowProps extends FenceType {
  children: ReactNode;
}

interface SizeType {
  x: number;
  y: number;
  width: number | string;
  height: number | string;
}

export default function Window(props: WindowProps) {
  const { id, title, children } = props;
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [size, setSize] = useState<SizeType>({
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  });
  const dispatch = useAppDispatch();
  const menus = Object.keys(menu);

  const handleResize = (resize: boolean) => {
    setIsFullScreen(resize);
    setSize(
      resize
        ? { x: 0, y: 0, width: "100%", height: "100%" }
        : { x: 0, y: 0, width: 800, height: 600 }
    );
  };

  const handleZindex = (zIndex: string) => {
    menus.forEach((menu) => {
      if (document.getElementById(menu)) {
        document.getElementById(menu)!.style.zIndex = "0";
      }
    });
    document.getElementById(id)!.style.zIndex = zIndex !== "" ? zIndex : "10";
  };

  const handleClose = () => {
    dispatch(removeWindow(props.id));
  };

  return (
    <Rnd
      id={id}
      className="flex h-full w-full flex-col border border-black bg-neutral-800"
      default={size}
      size={size}
      position={size}
      minHeight={100}
      minWidth={100}
      enableResizing={!isFullScreen}
      disableDragging={isFullScreen}
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
      <div className="sticky top-0 flex h-8 w-full items-center justify-between bg-black px-3">
        <div className="basis-1/3" />
        <p className="basis-1/3 text-center font-normal text-white">{title}</p>
        <div className="flex h-full basis-1/3 items-center justify-end gap-1">
          <div
            className="flex h-full items-center px-3 hover:bg-neutral-600 active:bg-slate-800"
            onClick={handleClose}
          >
            <Minimize className="text-xl text-white" />
          </div>
          <div
            className="flex h-full items-center px-3 hover:bg-neutral-600 active:bg-slate-800"
            onClick={() => {
              handleResize(isFullScreen ? false : true);
              handleZindex("10");
            }}
          >
            {isFullScreen ? (
              <Restore className="text-xl text-white" />
            ) : (
              <Maximize className="text-xl text-white" />
            )}
          </div>
          <div
            className="flex h-full items-center px-3 hover:bg-neutral-600 active:bg-slate-800"
            onClick={handleClose}
          >
            <Close className="text-xl text-white" />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          isFullScreen ? "h-[calc(100%-4.25rem)]" : "h-full",
          "w-full"
        )}
      >
        {children}
      </div>
    </Rnd>
  );
}
