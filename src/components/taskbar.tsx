import { useEffect, useState } from "react";
import { format } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import StartMenu from "./start-menu";

const Taskbar = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(format(now, "p"));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-8 bg-start-menu-gradient flex">
      <div className="grow h-full">
        <Popover>
          <PopoverTrigger asChild>
            <img
              src="/assets/windows/start.png"
              alt="Start Menu"
              className="mr-2.5 relative hover:brightness-105 active:brightness-75 active:cursor-none"
            />
          </PopoverTrigger>
          <PopoverContent
            sideOffset={0}
            className="rounded-b-none rounded-t-sm w-96 p-0 border-[#4282D6] border-2"
          >
            <StartMenu />
          </PopoverContent>
        </Popover>
      </div>
      <div className="h-full bg-sub-start-menu-gradient flex items-center gap-0.5 px-2.5">
        <img
          className="h-4 w-4"
          src="/assets/windows/icons/690(16x16).png"
          alt="Sound icon"
        />
        <img
          className="h-4 w-4"
          src="/assets/windows/icons/394(16x16).png"
          alt="USB icon"
        />
        <p className="text-white font-light text-xs">{time}</p>
      </div>
    </div>
  );
};

export default Taskbar;
