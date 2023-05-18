"use client";

import { useEffect, useState } from "react";
import { SiWindows } from "react-icons/si";
import dayjs from "dayjs";

import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { useAppSelector } from "@/utils/redux/hooks";
import { menu } from "@/utils/data";

export default function Taskbar() {
  const windows = useAppSelector((state) => state.menuReducer.windows);
  const [timeNow, setTimeNow] = useState<string>(dayjs().format());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeNow(dayjs().format());
    }, 1000);
    return () => clearInterval(interval);
  }, [timeNow]);

  return (
    <div className="z-10 flex h-9 w-full justify-between bg-neutral-800">
      <div className="flex h-full gap-1">
        <Tooltip>
          <TooltipTrigger>
            <div className="flex h-full w-full cursor-default select-none items-center px-2 text-white hover:bg-slate-700 hover:text-blue-500 active:bg-slate-800">
              <SiWindows className="text-xl" />
            </div>
            <TooltipContent>
              <p>Start</p>
            </TooltipContent>
          </TooltipTrigger>
        </Tooltip>
        {windows.map((window) => {
          const { type, title } = window;
          const Menu = type === "program" ? menu[window.id] : menu["folder"];

          return (
            <Tooltip key={window.id}>
              <TooltipTrigger>
                <div className="flex h-full w-full cursor-default select-none items-center border-b-2 px-2 hover:bg-slate-700 active:bg-slate-800">
                  <Menu className="text-xl text-white" />
                </div>
                <TooltipContent>
                  <p>{title}</p>
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>
          );
        })}
      </div>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex h-full items-center px-2 hover:bg-slate-700 active:bg-slate-800">
            <p className="cursor-default select-none text-sm text-white">
              {dayjs(timeNow).format("HH:mm")}
            </p>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{dayjs(timeNow).format("DD MMMM YYYY")}</p>
          <p>{dayjs(timeNow).format("dddd")}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
