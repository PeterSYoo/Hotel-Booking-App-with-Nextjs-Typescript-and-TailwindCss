import create from "zustand";
import { persist } from "zustand/middleware";
import { THEME_TYPES } from "../constants";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

const useThemeStore = create(
  persist(
    (set) => ({
      theme: THEME_LIGHT,
      toggleTheme: () =>
        set((state: any) => ({
          theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;
