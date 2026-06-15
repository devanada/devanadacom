import { type ReactNode } from "react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Separator } from "@/components/ui/separator";
import Taskbar, { type TaskbarWindow } from "./taskbar";

interface LayoutProps {
  children: ReactNode;
  windows?: TaskbarWindow[];
  onWindowClick?: (id: string) => void;
}

const Layout = ({ children, windows, onWindowClick }: LayoutProps) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full grow relative bg-[url(https://i.imgur.com/Zk6TR5k.jpeg)] bg-cover bg-no-repeat bg-center">
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="absolute inset-0">
              {children}
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="rounded-none w-64">
            <ContextMenuItem>Refresh</ContextMenuItem>
            <Separator />
            <ContextMenuItem disabled aria-disabled>Paste</ContextMenuItem>
            <ContextMenuItem disabled aria-disabled>Paste Shortcut</ContextMenuItem>
            <Separator />
            <ContextMenuItem>New</ContextMenuItem>
            <Separator />
            <ContextMenuItem>Properties</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
      <Taskbar windows={windows} onWindowClick={onWindowClick} />
    </div>
  );
};

export default Layout;
