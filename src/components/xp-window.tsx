import { useRef, useState, type ReactNode } from "react";

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
const MIN_W = 200;
const MIN_H = 100;

const btnBase: React.CSSProperties = {
  border: "1px solid #0040a0",
  boxShadow: "inset 0 1px 0 #8fd0ff, inset 1px 0 0 #8fd0ff",
  background: "linear-gradient(to bottom, #5cb4f7 0%, #3090e8 50%, #2176d4 100%)",
};

type ResizeDir = "n" | "ne" | "e" | "se" | "s" | "sw" | "w" | "nw";

const CURSORS: Record<ResizeDir, string> = {
  n: "n-resize", ne: "ne-resize", e: "e-resize", se: "se-resize",
  s: "s-resize", sw: "sw-resize", w: "w-resize", nw: "nw-resize",
};

const XpWindow = ({
  title, icon, children,
  defaultX = 100, defaultY = 60,
  defaultWidth = 480, defaultHeight = 360,
  minimized = false,
  zIndex = 10,
  onFocus, onMinimize, onClose,
}: XpWindowProps) => {
  const [rect, setRect] = useState({ x: defaultX, y: defaultY, w: defaultWidth, h: defaultHeight });
  const [isMaximized, setIsMaximized] = useState(false);
  const savedRect = useRef(rect);

  const handleMaximize = () => {
    if (!isMaximized) savedRect.current = rect;
    setIsMaximized((v) => !v);
  };

  const startDrag = (e: React.MouseEvent) => {
    if (isMaximized) return;
    e.preventDefault();
    onFocus?.();
    const startMx = e.clientX;
    const startMy = e.clientY;
    const startX = rect.x;
    const startY = rect.y;

    const onMove = (ev: MouseEvent) => {
      setRect((r) => ({ ...r, x: startX + ev.clientX - startMx, y: startY + ev.clientY - startMy }));
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  const startResize = (e: React.MouseEvent, dir: ResizeDir) => {
    e.preventDefault();
    e.stopPropagation();
    onFocus?.();
    const { clientX: mx, clientY: my } = e;
    const { x, y, w, h } = rect;

    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - mx;
      const dy = ev.clientY - my;
      setRect((r) => {
        let nx = r.x, ny = r.y, nw = r.w, nh = r.h;
        if (dir.includes("e")) nw = Math.max(MIN_W, w + dx);
        if (dir.includes("s")) nh = Math.max(MIN_H, h + dy);
        if (dir.includes("w")) { nw = Math.max(MIN_W, w - dx); if (nw > MIN_W) nx = x + dx; }
        if (dir.includes("n")) { nh = Math.max(MIN_H, h - dy); if (nh > MIN_H) ny = y + dy; }
        return { x: nx, y: ny, w: nw, h: nh };
      });
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  const titleBar = (
    <div
      className="flex items-center gap-1.5 px-2 shrink-0 select-none"
      style={{
        height: TITLEBAR_H,
        cursor: isMaximized ? "default" : "move",
        background: "linear-gradient(to bottom, #0058ee 0%, #3893f7 4%, #288ef5 6%, #127fe8 8%, #0b6ed8 15%, #0c6fd9 54%, #0972db 86%, #0560c7 92%, #0052aa 95%)",
      }}
      onMouseDown={startDrag}
      onDoubleClick={handleMaximize}
    >
      {icon && <img src={icon} alt="" className="w-4 h-4 shrink-0" />}
      <span className="text-white text-xs font-bold flex-1 truncate" style={{ textShadow: "1px 1px 2px #0005" }}>
        {title}
      </span>

      <div className="flex gap-0.5 ml-1" onMouseDown={(e) => e.stopPropagation()}>
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

        <button onClick={onClose} className="w-[22px] h-[22px] rounded-sm flex items-center justify-center ml-0.5"
          style={{ background: "linear-gradient(to bottom, #f07070 0%, #d93030 50%, #c02020 100%)", border: "1px solid #800000", boxShadow: "inset 0 1px 0 #ffaaaa, inset 1px 0 0 #ffaaaa" }}>
          <span className="text-white text-xs font-bold leading-none" style={{ textShadow: "1px 1px 1px #0005" }}>✕</span>
        </button>
      </div>
    </div>
  );

  // Maximized: fill parent
  if (isMaximized) {
    return (
      <div
        className="absolute inset-0 flex flex-col overflow-hidden shadow-[2px_4px_12px_#0005] border border-[#0a53a8]"
        style={{ zIndex, display: minimized ? "none" : "flex" }}
        onMouseDown={onFocus}
      >
        {titleBar}
        <div className="flex-1 bg-white overflow-auto">{children}</div>
      </div>
    );
  }

  return (
    <div
      className="absolute flex flex-col rounded-t-[6px] overflow-hidden shadow-[2px_4px_12px_#0005] border border-[#0a53a8]"
      style={{
        left: rect.x, top: rect.y,
        width: rect.w, height: rect.h,
        zIndex,
        display: minimized ? "none" : "flex",
      }}
      onMouseDown={onFocus}
    >
      {titleBar}
      <div className="flex-1 bg-white overflow-auto">{children}</div>

      {/* Resize handles */}
      {(["n","ne","e","se","s","sw","w","nw"] as ResizeDir[]).map((dir) => (
        <div
          key={dir}
          onMouseDown={(e) => startResize(e, dir)}
          style={{
            position: "absolute",
            cursor: CURSORS[dir],
            ...(dir === "n"  && { top: 0,    left: 4,    right: 4,   height: 4 }),
            ...(dir === "ne" && { top: 0,    right: 0,   width: 8,   height: 8 }),
            ...(dir === "e"  && { top: 4,    right: 0,   bottom: 4,  width: 4 }),
            ...(dir === "se" && { bottom: 0, right: 0,   width: 8,   height: 8 }),
            ...(dir === "s"  && { bottom: 0, left: 4,    right: 4,   height: 4 }),
            ...(dir === "sw" && { bottom: 0, left: 0,    width: 8,   height: 8 }),
            ...(dir === "w"  && { top: 4,    left: 0,    bottom: 4,  width: 4 }),
            ...(dir === "nw" && { top: 0,    left: 0,    width: 8,   height: 8 }),
          }}
        />
      ))}
    </div>
  );
};

export default XpWindow;
