import { useState } from "react";

interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick?: () => void;
}

const DesktopIcon = ({ icon, label, onDoubleClick }: DesktopIconProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-1 w-20 cursor-default select-none"
      onClick={() => setSelected(true)}
      onDoubleClick={onDoubleClick}
      onBlur={() => setSelected(false)}
      tabIndex={0}
    >
      <div
        className={`p-1 rounded-sm ${selected ? "bg-[#0A246A]/60 outline outline-1 outline-white/50 outline-dashed" : ""}`}
      >
        <img src={icon} alt={label} className="w-10 h-10" draggable={false} />
      </div>
      <span
        className={`text-white text-xs text-center leading-tight px-0.5 text-shadow-sm ${
          selected ? "bg-[#0A246A]" : ""
        }`}
        style={{ textShadow: "1px 1px 2px #000, 0 0 4px #000" }}
      >
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
