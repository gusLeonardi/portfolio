"use client";

import { useTheme } from "@/context/theme-context";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Usar tema claro" : "Usar tema escuro"} className="control-button">{theme === "dark" ? <SunIcon className="icon"/> : <MoonIcon className="icon"/>}</button>;
}
