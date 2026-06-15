import { useEffect, useState } from "react";
import { format } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import StartMenu from "./start-menu";

export interface TaskbarWindow {
  id: string;
  title: string;
  icon?: string;
  minimized: boolean;
}

interface TaskbarProps {
  windows?: TaskbarWindow[];
  onWindowClick?: (id: string) => void;
}

const Taskbar = ({ windows = [], onWindowClick }: TaskbarProps) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => setTime(format(new Date(), "p"));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-8 bg-start-menu-gradient flex items-stretch">
      {/* Start button */}
      <Popover>
        <PopoverTrigger asChild>
          <img
            src="/assets/windows/start.png"
            alt="Start Menu"
            className="mr-2.5 hover:brightness-105 active:brightness-75 active:cursor-none self-end"
          />
        </PopoverTrigger>
        <PopoverContent
          sideOffset={0}
          className="rounded-b-none rounded-t-sm w-96 p-0 border-[#4282D6] border-2"
        >
          <StartMenu />
        </PopoverContent>
      </Popover>

      {/* Separator line */}
      <div className="w-px bg-[#1042af] mx-0.5 my-1" />
      <div className="w-px bg-[#18bbff] mr-1 my-1" />

      {/* Open window buttons */}
      <div className="flex-1 flex items-center gap-1 overflow-x-auto px-1">
        {windows.map((win) => (
          <button
            key={win.id}
            onClick={() => onWindowClick?.(win.id)}
            className="flex items-center gap-1.5 h-6 px-2 min-w-[120px] max-w-[160px] text-white text-xs font-bold truncate rounded-sm"
            style={{
              background: win.minimized
                ? "linear-gradient(to bottom, #1a4faa 0%, #2060c8 100%)"
                : "linear-gradient(to bottom, #3a7bd5 0%, #2060c0 50%, #1a50b0 100%)",
              border: win.minimized ? "1px solid #0a3080 inset" : "1px solid #4080e0",
              boxShadow: win.minimized
                ? "inset 1px 1px 2px #0004"
                : "inset 0 1px 0 #6aa0f0",
              textShadow: "1px 1px 1px #0005",
            }}
          >
            {win.icon && <img src={win.icon} alt="" className="w-4 h-4 flex-shrink-0" />}
            <span className="truncate">{win.title}</span>
          </button>
        ))}
      </div>

      {/* System tray */}
      <div className="h-full bg-sub-start-menu-gradient flex items-center gap-0.5 px-2.5">
        <img className="h-4 w-4" src="/assets/windows/icons/690(16x16).png" alt="Sound icon" />
        <img className="h-4 w-4" src="/assets/windows/icons/394(16x16).png" alt="USB icon" />
        <p className="text-white font-light text-xs">{time}</p>
      </div>
    </div>
  );
};

export default Taskbar;
