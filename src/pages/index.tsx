import { type ReactNode, useState } from "react";
import { Code2, Crosshair, Skull, Terminal } from "lucide-react";

import { Layout } from "@/components";
import DesktopIcon from "@/components/desktop-icon";
import XpWindow from "@/components/xp-window";
import Projects from "@/components/frames/projects";
import Works from "@/components/frames/works";
import InternetExplorer from "@/components/frames/internet-explorer";

interface WindowDef {
  id: string;
  title: string;
  icon: string;
  minimized: boolean;
}

const WINDOW_CONFIGS: Record<string, Omit<WindowDef, "minimized">> = {
  "my-computer":  { id: "my-computer",  title: "My Computer",       icon: "/assets/windows/icons/windows.png" },
  "my-documents": { id: "my-documents", title: "My Documents",      icon: "/assets/windows/icons/folder.png"  },
  "ie":           { id: "ie",           title: "Internet Explorer",  icon: "/assets/windows/icons/ie.png"      },
  "recycle-bin":  { id: "recycle-bin",  title: "Recycle Bin",        icon: "/assets/windows/icons/290.png"     },
  "projects":     { id: "projects",     title: "Projects",           icon: "/assets/windows/icons/folder.png"  },
  "works":        { id: "works",        title: "Works",              icon: "/assets/windows/icons/folder.png"  },
  "cs":           { id: "cs",           title: "Counter-Strike",     icon: "/assets/windows/icons/ie.png"      },
  "diablo":       { id: "diablo",       title: "Diablo",             icon: "/assets/windows/icons/ie.png"      },
  "vscode":       { id: "vscode",       title: "Visual Studio Code", icon: "/assets/windows/icons/ie.png"      },
  "cmd":          { id: "cmd",          title: "Windows PowerShell", icon: "/assets/windows/icons/ie.png"      },
};

const DESKTOP_ICONS: { id: string; label: string; icon: string | ReactNode }[] = [
  { id: "my-computer",  label: "My Computer",      icon: "/assets/windows/icons/windows.png" },
  { id: "my-documents", label: "My Documents",     icon: "/assets/windows/icons/folder.png"  },
  { id: "ie",           label: "Internet Explorer",icon: "/assets/windows/icons/ie.png"      },
  { id: "recycle-bin",  label: "Recycle Bin",      icon: "/assets/windows/icons/290.png"     },
  { id: "projects",     label: "Projects.exe",     icon: "/assets/windows/icons/folder.png"  },
  { id: "works",        label: "Works.exe",        icon: "/assets/windows/icons/folder.png"  },
  { id: "cs",           label: "Counter-Strike.exe", icon: <Crosshair className="w-10 h-10 text-orange-400" />  },
  { id: "diablo",       label: "Diablo.exe",        icon: <Skull className="w-10 h-10 text-red-500" />          },
  { id: "vscode",       label: "VS Code.exe",       icon: <Code2 className="w-10 h-10 text-blue-500" />         },
  { id: "cmd",          label: "PowerShell.exe",    icon: <Terminal className="w-10 h-10 text-blue-300" />      },
];

const DEFAULT_SIZES: Record<string, { w: number; h: number }> = {
  ie:       { w: 720, h: 520 },
  projects: { w: 620, h: 440 },
  works:    { w: 560, h: 420 },
  cs:     { w: 680, h: 480 },
  diablo: { w: 680, h: 520 },
  vscode: { w: 760, h: 540 },
  cmd:    { w: 640, h: 440 },
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
        {DESKTOP_ICONS.map((item) => (
          <DesktopIcon
            key={item.id}
            icon={item.icon}
            label={item.label}
            onDoubleClick={() => openWindow(item.id)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((win, i) => {
        const sizes = DEFAULT_SIZES[win.id];
        const w = sizes?.w ?? 480;
        const h = sizes?.h ?? 360;
        const x = 80 + (i % 4) * 30;
        const y = 40 + (i % 4) * 24;

        return (
          <XpWindow
            key={win.id}
            title={win.title}
            icon={win.icon}
            defaultX={x}
            defaultY={y}
            defaultWidth={w}
            defaultHeight={h}
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

            {win.id === "ie" && <InternetExplorer />}

            {win.id === "recycle-bin" && (
              <div className="p-4 text-sm text-gray-500 italic">Recycle Bin is empty.</div>
            )}

            {win.id === "projects" && <Projects />}

            {win.id === "works" && <Works />}

            {win.id === "cs" && (
              <iframe
                src="https://play-cs.com/en/servers"
                className="w-full h-full border-0"
                title="Counter-Strike"
              />
            )}

            {win.id === "diablo" && (
              <iframe
                src="https://d07riv.github.io/diabloweb"
                className="w-full h-full border-0"
                title="Diablo"
              />
            )}

            {win.id === "vscode" && (
              <iframe
                src="https://github1s.com/devanada/devanadacom"
                className="w-full h-full border-0"
                title="Visual Studio Code"
              />
            )}

            {win.id === "cmd" && (
              <iframe
                src="https://cmd.to"
                className="w-full h-full border-0"
                title="Windows PowerShell"
              />
            )}
          </XpWindow>
        );
      })}
    </Layout>
  );
};

export default Index;
