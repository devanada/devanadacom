import { create } from "zustand";
import { FenceType } from "@/utils/types/fences";

interface WindowsState {
  windows: FenceType[];
  addWindow: (window: FenceType) => void;
  removeWindow: (window: FenceType) => void;
}

const useWindowsStore = create<WindowsState>()((set) => ({
  windows: [],
  addWindow: (window) =>
    set((state) => ({ windows: [...state.windows, window] })),
  removeWindow: (window) =>
    set((state) => {
      const newWindows = state.windows.filter((item) => item.id !== window.id);
      return { windows: newWindows };
    }),
}));

export default useWindowsStore;
