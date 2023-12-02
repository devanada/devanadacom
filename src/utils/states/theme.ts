import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { setCookie, deleteCookie, getCookie } from "cookies-next";
import { create } from "zustand";

type Theme = "system" | "light" | "dark";

interface ThemeState {
  theme: Theme;
  background: string;
  setTheme: (value: Theme) => void;
  setBackground: (value: string) => void;
}

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return getCookie(name) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    setCookie(name, JSON.parse(JSON.stringify(value)));
  },
  removeItem: async (name: string): Promise<void> => {
    deleteCookie(name);
  },
};

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "dark",
      background: "/background/background2.jpg",
      setTheme: (value) => set({ theme: value }),
      setBackground: (value) => set({ background: value }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => storage),
    }
  )
);

export default useThemeStore;
