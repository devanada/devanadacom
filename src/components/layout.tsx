import { type ReactNode } from "react";
import Taskbar from "./taskbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full grow flex flex-col bg-[url(https://i.imgur.com/Zk6TR5k.jpeg)] bg-cover overflow-hidden bg-no-repeat bg-center">
        {children}
      </div>
      <Taskbar />
    </div>
  );
};

export default Layout;
