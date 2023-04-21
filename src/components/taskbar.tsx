"use client";

import { useEffect, useState } from "react";
import { SiWindows } from "react-icons/si";
import dayjs from "dayjs";

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
    <div className="z-10 flex h-9 w-full justify-between bg-neutral-800 pr-3">
      <div className="flex h-full gap-1">
        <div className="flex h-full w-full items-center px-2 hover:bg-slate-700 active:bg-slate-800">
          <SiWindows className="text-xl text-white" />
        </div>
        {windows.map((window) => {
          const Menu = menu[window.id];

          return (
            <div
              key={window.id}
              className="flex h-full w-full items-center border-b-2 px-2 hover:bg-slate-700 active:bg-slate-800"
            >
              <Menu className="text-xl text-white" />
            </div>
          );
        })}
      </div>
      <div className="flex h-full items-center px-2 hover:bg-slate-700 active:bg-slate-800">
        <p className="cursor-default text-base text-white">
          {dayjs(timeNow).format("h:mm")}
        </p>
      </div>
    </div>
  );
}
