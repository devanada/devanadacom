import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface MenuItemProps {
  icon: string;
  label: string;
  subtitle?: string;
  size?: "sm" | "md";
  hasArrow?: boolean;
}

const MenuItem = ({ icon, label, subtitle, size = "md", hasArrow }: MenuItemProps) => (
  <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2f71cd] hover:text-white cursor-default group rounded-sm mx-1">
    <img src={icon} alt={label} className={size === "md" ? "w-8 h-8 flex-shrink-0" : "w-5 h-5 flex-shrink-0"} />
    <div className="flex-1 min-w-0">
      <p className={`font-bold truncate ${size === "md" ? "text-[13px]" : "text-xs"}`}>{label}</p>
      {subtitle && <p className="text-[10px] text-gray-500 group-hover:text-blue-100 truncate">{subtitle}</p>}
    </div>
    {hasArrow && <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-white flex-shrink-0" />}
  </div>
);

interface PlaceItemProps {
  icon: string;
  label: string;
}

const PlaceItem = ({ icon, label }: PlaceItemProps) => (
  <div className="flex items-center gap-2 px-2 py-0.5 hover:bg-[#2f71cd] hover:text-white cursor-default mx-1 rounded-sm">
    <img src={icon} alt={label} className="w-6 h-6 flex-shrink-0" />
    <p className="text-[12px] font-medium truncate">{label}</p>
  </div>
);

const StartMenu = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="w-full bg-header-start-menu-gradient h-14 px-2 rounded-t-sm flex items-center text-white self-start gap-2">
        <img
          src="/assets/windows/icons/user.png"
          alt="User"
          className="w-11 h-11 rounded-sm border border-[#DEDEDECC]"
        />
        <p className="text-sm font-bold" style={{ textShadow: "1px 1px 2px #0005" }}>
          User
        </p>
      </div>

      {/* Body — two columns */}
      <div className="flex" style={{ minHeight: 340 }}>
        {/* Left column — pinned & recent programs */}
        <div className="flex-1 bg-white flex flex-col py-1.5">
          {/* Pinned programs */}
          <MenuItem icon="/assets/windows/icons/ie.png" label="Internet Explorer" subtitle="Web Browser" />
          <MenuItem icon="/assets/windows/icons/msn.png" label="MSN Messenger" subtitle="Chat" />

          <div className="my-1.5 mx-2">
            <Separator />
          </div>

          {/* Recent programs */}
          <MenuItem icon="/assets/windows/icons/winamp.png" label="Winamp" size="sm" />
          <MenuItem icon="/assets/windows/icons/solitaire.png" label="Solitaire" size="sm" />
          <MenuItem icon="/assets/windows/icons/freecell.png" label="FreeCell" size="sm" />
          <MenuItem icon="/assets/windows/icons/spider.png" label="Spider Solitaire" size="sm" />
          <MenuItem icon="/assets/windows/icons/pinball.png" label="Pinball" size="sm" />

          {/* Spacer */}
          <div className="flex-1" />

          {/* All Programs */}
          <div className="my-1 mx-2">
            <Separator />
          </div>
          <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#2f71cd] hover:text-white cursor-default group rounded-sm mx-1">
            <img src="/assets/windows/icons/all-programs.ico" alt="All Programs" className="w-5 h-5" />
            <p className="text-[12px] font-bold flex-1">All Programs</p>
            <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-[#b0c4e0] mx-0" />

        {/* Right column — places */}
        <div className="w-44 bg-[#d3e5ff] flex flex-col py-1.5 gap-0.5">
          <PlaceItem icon="/assets/windows/icons/folder.png" label="My Documents" />
          <PlaceItem icon="/assets/windows/icons/folder.png" label="My Pictures" />
          <PlaceItem icon="/assets/windows/icons/folder.png" label="My Music" />
          <PlaceItem icon="/assets/windows/icons/windows.png" label="My Computer" />
          <PlaceItem icon="/assets/windows/icons/earth.png" label="My Network Places" />

          <div className="my-1 mx-2">
            <Separator className="bg-[#82aae0]" />
          </div>

          <PlaceItem icon="/assets/windows/icons/300(32x32).png" label="Control Panel" />
          <PlaceItem icon="/assets/windows/icons/299(32x32).png" label="Set Program Access" />

          <div className="my-1 mx-2">
            <Separator className="bg-[#82aae0]" />
          </div>

          <PlaceItem icon="/assets/windows/icons/301(32x32).png" label="Help and Support" />
          <PlaceItem icon="/assets/windows/icons/309(32x32).png" label="Search" />
          <PlaceItem icon="/assets/windows/icons/308(32x32).png" label="Run..." />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-9 bg-footer-start-menu-gradient flex self-end items-center justify-end text-white px-2 gap-2">
        <div className="p-1 flex items-center hover:bg-[#3C50D280] hover:active:[&>*]:translate-x-[1px] hover:active:[&>*]:translate-y-[1px] text-[11px] gap-1 cursor-default rounded-sm">
          <img src="/assets/windows/icons/546(32x32).png" alt="Log Off" className="w-5 h-5" />
          <p>Log Off</p>
        </div>
        <div className="p-1 flex items-center hover:bg-[#3C50D280] hover:active:[&>*]:translate-x-[1px] hover:active:[&>*]:translate-y-[1px] text-[11px] gap-1 cursor-default rounded-sm">
          <img src="/assets/windows/icons/310(32x32).png" alt="Turn Off Computer" className="w-5 h-5" />
          <p>Turn Off Computer</p>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
