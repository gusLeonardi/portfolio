"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import type { Locale } from "@/lib/types";

interface LanguageContextValue { locale: Locale; setLocale: (locale: Locale) => void; toggleLocale: () => void }
const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "portfolio-locale";
const localeListeners = new Set<() => void>();

function getStoredLocale(): Locale {
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "pt";
}

function subscribeToLocale(listener: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) listener();
  };

  localeListeners.add(listener);
  window.addEventListener("storage", handleStorage);

  return () => {
    localeListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, getStoredLocale, (): Locale => "pt");

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const setLocale = (next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
    localeListeners.forEach((listener) => listener());
  };
  const toggleLocale = () => setLocale(locale === "pt" ? "en" : "pt");
  const value = { locale, setLocale, toggleLocale };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
