import { useRef, useState, type KeyboardEvent } from "react";

const HOME = "https://www.google.com/webhp?igu=1";

const InternetExplorer = () => {
  const [history, setHistory] = useState<string[]>([HOME]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [inputUrl, setInputUrl] = useState(HOME);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentUrl = history[historyIndex];

  const navigate = (url: string) => {
    let normalized = url.trim();
    if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) {
      normalized = "https://" + normalized;
    }
    const next = history.slice(0, historyIndex + 1);
    setHistory([...next, normalized]);
    setHistoryIndex(next.length);
    setInputUrl(normalized);
    setIframeKey((k) => k + 1);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const idx = historyIndex - 1;
      setHistoryIndex(idx);
      setInputUrl(history[idx]);
      setIframeKey((k) => k + 1);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const idx = historyIndex + 1;
      setHistoryIndex(idx);
      setInputUrl(history[idx]);
      setIframeKey((k) => k + 1);
    }
  };

  const refresh = () => setIframeKey((k) => k + 1);

  const goHome = () => navigate(HOME);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") navigate(inputUrl);
  };

  const canBack = historyIndex > 0;
  const canForward = historyIndex < history.length - 1;

  return (
    <div className="flex flex-col h-full">
      {/* Menu bar */}
      <div className="flex items-center gap-3 px-2 py-0.5 bg-[#ece9d8] border-b border-gray-300 text-xs text-gray-700">
        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
          <span key={item} className="hover:bg-blue-600 hover:text-white px-1 cursor-default">{item}</span>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1 bg-[#ece9d8] border-b border-gray-300">
        {/* Back */}
        <button
          onClick={goBack}
          disabled={!canBack}
          className="flex items-center gap-0.5 px-1 py-0.5 hover:bg-blue-100 disabled:opacity-40 cursor-default"
          title="Back"
        >
          <img src="/assets/windows/icons/back.png" alt="Back" className="w-5 h-5" />
          <span className="text-[10px]">▾</span>
        </button>

        {/* Forward */}
        <button
          onClick={goForward}
          disabled={!canForward}
          className="flex items-center gap-0.5 px-1 py-0.5 hover:bg-blue-100 disabled:opacity-40 cursor-default"
          title="Forward"
        >
          <img src="/assets/windows/icons/forward.png" alt="Forward" className="w-5 h-5" />
          <span className="text-[10px]">▾</span>
        </button>

        <div className="w-px h-6 bg-gray-400 mx-1" />

        {/* Stop */}
        <button className="px-1 py-0.5 hover:bg-blue-100 cursor-default opacity-40" title="Stop">
          <img src="/assets/windows/icons/stop.png" alt="Stop" className="w-5 h-5" />
        </button>

        {/* Refresh */}
        <button onClick={refresh} className="px-1 py-0.5 hover:bg-blue-100 cursor-default" title="Refresh">
          <img src="/assets/windows/icons/refresh.png" alt="Refresh" className="w-5 h-5" />
        </button>

        {/* Home */}
        <button onClick={goHome} className="px-1 py-0.5 hover:bg-blue-100 cursor-default" title="Home">
          <img src="/assets/windows/icons/home.png" alt="Home" className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-400 mx-1" />

        {/* Address bar */}
        <div className="flex items-center flex-1 gap-1">
          <span className="text-xs text-gray-600 shrink-0">Address</span>
          <div className="flex flex-1 items-center border border-gray-400 bg-white">
            <img src="/assets/windows/icons/ie.png" alt="" className="w-4 h-4 mx-1 shrink-0" />
            <input
              className="flex-1 text-xs outline-none px-1 py-0.5 bg-white"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
            />
          </div>
          <button
            onClick={() => navigate(inputUrl)}
            className="px-2 py-0.5 bg-[#ece9d8] border border-gray-400 text-xs hover:bg-blue-100 cursor-default"
          >
            Go
          </button>
        </div>

        <div className="w-px h-6 bg-gray-400 mx-1" />

        {/* Links */}
        <button className="px-1 py-0.5 hover:bg-blue-100 cursor-default" title="Links">
          <img src="/assets/windows/icons/links.png" alt="Links" className="w-5 h-5" />
        </button>
      </div>

      {/* Iframe */}
      <iframe
        key={iframeKey}
        ref={iframeRef}
        src={currentUrl}
        className="flex-1 w-full border-0"
        title="Internet Explorer"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />

      {/* Status bar */}
      <div className="flex items-center px-2 py-0.5 bg-[#ece9d8] border-t border-gray-300 text-[10px] text-gray-600">
        <span className="flex-1">Done</span>
        <div className="flex items-center gap-1">
          <img src="/assets/windows/icons/ie.png" alt="" className="w-3 h-3" />
          <span>Internet</span>
        </div>
      </div>
    </div>
  );
};

export default InternetExplorer;
