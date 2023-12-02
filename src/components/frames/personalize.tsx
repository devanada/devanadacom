"use client";

import { MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import Image from "next/image";

import { SidebarNav } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Window from "@/components/window";
import useThemeStore from "@/utils/states/theme";
import { FenceType } from "@/utils/types/fences";
import { cn } from "@/lib/utils";

const backgrounds = [
  {
    id: 1,
    src: "/background/background1.jpg",
  },
  {
    id: 2,
    src: "/background/background2.jpg",
  },
];

const sidebarNavItems = [
  {
    title: "Background",
  },
  {
    title: "Themes",
  },
];

export default function Personalize(props: FenceType) {
  const { theme, background, setBackground, setTheme } = useThemeStore();
  const { setTheme: changeTheme } = useTheme();

  const [activeNav, setActiveNav] = useState("Background");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Window {...props}>
      <div className="flex w-full h-full overflow-hidden relative">
        <div
          className={cn(
            "min-w-[16rem] h-full hidden lg:block absolute lg:relative bg-black/50 w-full lg:w-64",
            showSidebar && "block"
          )}
          onClick={() => setShowSidebar(false)}
        >
          <div className="min-w-[16rem] h-full w-64 bg-white dark:bg-neutral-800">
            <p className="text-muted-foreground h-10 py-2 px-4">
              Personalization
            </p>
            <SidebarNav
              items={sidebarNavItems}
              active={activeNav}
              onClick={(value) => setActiveNav(value)}
            />
          </div>
        </div>
        <div className="p-6 grow overflow-auto">
          <Button
            variant="outline"
            size="sm"
            className="block lg:hidden"
            onClick={() => setShowSidebar(true)}
          >
            <MenuIcon className="h-4 w-4" />
          </Button>
          {activeNav === "Background" && (
            <div className="w-full h-full">
              <Image
                className="object-contain aspect-[4/3]"
                src={background}
                alt="Current background"
                width={500}
                height={400}
              />
              <p className="tracking-wide my-4">Choose your picture</p>
              <div className="grid grid-cols-6 gap-2 my-2 w-full lg:w-1/2">
                {backgrounds.map((background) => (
                  <Image
                    className="object-cover bg-center bg-no-repeat aspect-square"
                    key={background.id}
                    src={background.src}
                    alt={`Background image ${background.id}`}
                    width={100}
                    height={100}
                    onClick={() => setBackground(background.src)}
                  />
                ))}
              </div>
            </div>
          )}
          {activeNav === "Themes" && (
            <div className="w-full h-full">
              <div className="flex items-center space-x-2">
                <Switch
                  id="dark-mode"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => {
                    const newTheme = checked ? "dark" : "light";
                    setTheme(newTheme);
                    changeTheme(newTheme);
                  }}
                />
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
            </div>
          )}
        </div>
      </div>
    </Window>
  );
}
