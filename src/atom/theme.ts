import { atom } from "jotai";

export const theme = atom(localStorage.getItem("theme") || "light");
export const themePersistance = atom(
  (get) => get(theme),
  (get, set, newVal: string) => {
    set(theme, newVal);
    localStorage.setItem("theme", newVal);
  }
);
