import { useState } from "react";
import { Layout } from "@/components";
import DesktopIcon from "@/components/desktop-icon";
import XpWindow from "@/components/xp-window";

interface WindowDef {
  id: string;
  title: string;
  icon: string;
  minimized: boolean;
}

const WINDOW_CONFIGS: Record<string, Omit<WindowDef, "minimized">> = {
  "my-computer": { id: "my-computer", title: "My Computer", icon: "/assets/windows/icons/windows.png" },
  "my-documents": { id: "my-documents", title: "My Documents", icon: "/assets/windows/icons/folder.png" },
  "ie": { id: "ie", title: "Internet Explorer", icon: "/assets/windows/icons/ie.png" },
  "recycle-bin": { id: "recycle-bin", title: "Recycle Bin", icon: "/assets/windows/icons/290.png" },
};

const Index = () => {
  const [windows, setWindows] = useState<WindowDef[]>([]);
  const [windowOrder, setWindowOrder] = useState<string[]>([]);

  const bringToFront = (id: string) => {
    setWindowOrder((prev) => [...prev.filter((w) => w !== id), id]);
  };

  const openWindow = (id: string) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        return prev.map((w) => w.id === id ? { ...w, minimized: false } : w);
      }
      return [...prev, { ...WINDOW_CONFIGS[id], minimized: false }];
    });
    bringToFront(id);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    setWindowOrder((prev) => prev.filter((w) => w !== id));
  };

  const toggleMinimize = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => w.id === id ? { ...w, minimized: !w.minimized } : w)
    );
    bringToFront(id);
  };

  return (
    <Layout windows={windows} onWindowClick={toggleMinimize}>
      {/* Desktop icons */}
      <div className="flex flex-col gap-3 p-3 items-start">
        <DesktopIcon
          icon="/assets/windows/icons/windows.png"
          label="My Computer"
          onDoubleClick={() => openWindow("my-computer")}
        />
        <DesktopIcon
          icon="/assets/windows/icons/folder.png"
          label="My Documents"
          onDoubleClick={() => openWindow("my-documents")}
        />
        <DesktopIcon
          icon="/assets/windows/icons/ie.png"
          label="Internet Explorer"
          onDoubleClick={() => openWindow("ie")}
        />
        <DesktopIcon
          icon="/assets/windows/icons/290.png"
          label="Recycle Bin"
          onDoubleClick={() => openWindow("recycle-bin")}
        />
      </div>

      {/* Windows */}
      {windows.map((win, i) => {
        const offsets = [120, 160, 140, 180];
        const x = offsets[i % offsets.length];
        const y = 60 + i * 20;
        return (
          <XpWindow
            key={win.id}
            title={win.title}
            icon={win.icon}
            defaultX={x}
            defaultY={y}
            minimized={win.minimized}
            zIndex={10 + windowOrder.indexOf(win.id)}
            onFocus={() => bringToFront(win.id)}
            onMinimize={() => toggleMinimize(win.id)}
            onClose={() => closeWindow(win.id)}
          >
            {win.id === "my-computer" && (
              <div className="p-4 text-sm text-gray-700">
                <p className="font-bold mb-2">Hard Disk Drives</p>
                <div className="flex items-center gap-2 hover:bg-blue-100 p-1 cursor-default">
                  <img src="/assets/windows/icons/288(32x32).png" alt="Drive" className="w-8 h-8" />
                  <span>Local Disk (C:)</span>
                </div>
              </div>
            )}
            {win.id === "my-documents" && (
              <div className="p-4 text-sm text-gray-500 italic">This folder is empty.</div>
            )}
            {win.id === "ie" && (
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 border-b text-xs">
                  <img src="/assets/windows/icons/back.png" alt="Back" className="w-4 h-4 opacity-50" />
                  <img src="/assets/windows/icons/forward.png" alt="Forward" className="w-4 h-4 opacity-50" />
                  <img src="/assets/windows/icons/refresh.png" alt="Refresh" className="w-4 h-4" />
                  <img src="/assets/windows/icons/home.png" alt="Home" className="w-4 h-4" />
                  <div className="flex-1 mx-2 bg-white border border-gray-400 px-2 py-0.5 text-xs">about:blank</div>
                  <img src="/assets/windows/icons/ie.png" alt="Go" className="w-4 h-4" />
                </div>
                <div className="flex-1 bg-white flex items-center justify-center text-gray-400 text-sm">
                  This page cannot be displayed
                </div>
              </div>
            )}
            {win.id === "recycle-bin" && (
              <div className="p-4 text-sm text-gray-500 italic">Recycle Bin is empty.</div>
            )}
          </XpWindow>
        );
      })}
    </Layout>
  );
};

export default Index;
