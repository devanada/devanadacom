import { useRef, useState, type ReactNode } from "react";
import { Rnd } from "react-rnd";

interface XpWindowProps {
  title: string;
  icon?: string;
  children: ReactNode;
  defaultX?: number;
  defaultY?: number;
  defaultWidth?: number;
  defaultHeight?: number;
  minimized?: boolean;
  zIndex?: number;
  onFocus?: () => void;
  onMinimize?: () => void;
  onClose?: () => void;
}

const TITLEBAR_H = 26;

const btnBase: React.CSSProperties = {
  border: "1px solid #0040a0",
  boxShadow: "inset 0 1px 0 #8fd0ff, inset 1px 0 0 #8fd0ff",
  background: "linear-gradient(to bottom, #5cb4f7 0%, #3090e8 50%, #2176d4 100%)",
};

const XpWindow = ({
  title,
  icon,
  children,
  defaultX = 100,
  defaultY = 60,
  defaultWidth = 480,
  defaultHeight = 360,
  minimized = false,
  zIndex = 10,
  onFocus,
  onMinimize,
  onClose,
}: XpWindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const restored = useRef({ x: defaultX, y: defaultY, w: defaultWidth, h: defaultHeight });

  const handleMaximize = () => setIsMaximized((v) => !v);

  const titleBar = (
    <div
      className="xp-titlebar flex items-center gap-1.5 px-2 flex-shrink-0 select-none"
      style={{
        height: TITLEBAR_H,
        cursor: isMaximized ? "default" : "move",
        background:
          "linear-gradient(to bottom, #0058ee 0%, #3893f7 4%, #288ef5 6%, #127fe8 8%, #0b6ed8 15%, #0c6fd9 54%, #0972db 86%, #0560c7 92%, #0052aa 95%)",
      }}
      onDoubleClick={handleMaximize}
    >
      {icon && <img src={icon} alt="" className="w-4 h-4 flex-shrink-0" />}
      <span className="text-white text-xs font-bold flex-1 truncate" style={{ textShadow: "1px 1px 2px #0005" }}>
        {title}
      </span>

      <div className="flex gap-0.5 ml-1">
        <button onClick={onMinimize} className="w-[22px] h-[22px] rounded-sm flex items-center justify-center" style={btnBase}>
          <div className="w-3 h-0.5 bg-white" style={{ marginTop: 8 }} />
        </button>

        <button onClick={handleMaximize} className="w-[22px] h-[22px] rounded-sm flex items-center justify-center" style={btnBase}>
          {isMaximized ? (
            <div className="relative w-3 h-3">
              <div className="absolute top-0 right-0 w-2 h-2 border border-white bg-transparent" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border border-white bg-[#3090e8]" />
            </div>
          ) : (
            <div className="w-2.5 h-2 border border-white bg-transparent" />
          )}
        </button>

        <button
          onClick={onClose}
          className="w-[22px] h-[22px] rounded-sm flex items-center justify-center ml-0.5"
          style={{
            background: "linear-gradient(to bottom, #f07070 0%, #d93030 50%, #c02020 100%)",
            border: "1px solid #800000",
            boxShadow: "inset 0 1px 0 #ffaaaa, inset 1px 0 0 #ffaaaa",
          }}
        >
          <span className="text-white text-xs font-bold leading-none" style={{ textShadow: "1px 1px 1px #0005" }}>✕</span>
        </button>
      </div>
    </div>
  );

  const content = <div className="flex-1 bg-white overflow-auto">{children}</div>;

  // When maximized: skip Rnd, use absolute inset-0 so it fills exactly the desktop container
  if (isMaximized) {
    return (
      <div
        className="absolute inset-0 flex flex-col overflow-hidden shadow-[2px_4px_12px_#0005] border border-[#0a53a8]"
        style={{ zIndex, display: minimized ? "none" : "flex" }}
        onMouseDown={onFocus}
      >
        {titleBar}
        {content}
      </div>
    );
  }

  return (
    <Rnd
      default={{ x: defaultX, y: defaultY, width: defaultWidth, height: defaultHeight }}
      minWidth={200}
      minHeight={TITLEBAR_H}
      dragHandleClassName="xp-titlebar"
      onDragStop={(_e, d) => {
        restored.current = { ...restored.current, x: d.x, y: d.y };
      }}
      onResizeStop={(_e, _dir, ref, _delta, pos) => {
        restored.current = { x: pos.x, y: pos.y, w: ref.offsetWidth, h: ref.offsetHeight };
      }}
      onMouseDown={onFocus}
      style={{ zIndex, display: minimized ? "none" : "block" }}
    >
      <div className="w-full h-full flex flex-col rounded-t-[6px] overflow-hidden shadow-[2px_4px_12px_#0005] border border-[#0a53a8]">
        {titleBar}
        {content}
      </div>
    </Rnd>
  );
};

export default XpWindow;
