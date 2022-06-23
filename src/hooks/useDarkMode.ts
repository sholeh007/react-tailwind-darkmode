import { useEffect } from "react";
import { useAtom } from "jotai";
import { themePersistance } from "../atom/theme";

export default function useDarkMode() {
  const [theme, setTheme] = useAtom(themePersistance);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "dark" : "light");
    root.classList.add(isDark ? "light" : "dark");
  }, [theme]);

  return [theme, setTheme] as const;
}
