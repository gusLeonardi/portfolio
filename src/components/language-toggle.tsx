"use client";

import { useLanguage } from "@/context/language-context";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();
  return (
    <button type="button" onClick={toggleLocale} aria-label={locale === "pt" ? "Switch to English" : "Mudar para português"} className="control-button language-button">
      <span className={locale === "pt" ? "active" : ""}>PT</span><span aria-hidden>/</span><span className={locale === "en" ? "active" : ""}>EN</span>
    </button>
  );
}
