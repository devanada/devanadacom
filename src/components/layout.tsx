import { type ReactNode } from "react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Separator } from "@/components/ui/separator";
import Taskbar from "./taskbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full grow flex flex-col bg-[url(https://i.imgur.com/Zk6TR5k.jpeg)] bg-cover overflow-hidden bg-no-repeat bg-center">
        <ContextMenu>
          <ContextMenuTrigger className="w-full h-full">
            {children}
          </ContextMenuTrigger>
          <ContextMenuContent className="rounded-none w-64">
            <ContextMenuItem>Refresh</ContextMenuItem>
            <Separator />
            <ContextMenuItem disabled aria-disabled>
              Paste
            </ContextMenuItem>
            <ContextMenuItem disabled aria-disabled>
              Paste Shortcut
            </ContextMenuItem>
            <Separator />
            <ContextMenuItem>New</ContextMenuItem>
            <Separator />
            <ContextMenuItem>Properties</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
      <Taskbar />
    </div>
  );
};

export default Layout;
