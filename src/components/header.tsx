"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { dictionary, siteConfig } from "@/data/content";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { CloseIcon, MenuIcon } from "@/components/icons";

const navItems = [{ href: "/", key: "about" as const }, { href: "/projetos", key: "projects" as const }, { href: "/experiencias", key: "experience" as const }, { href: "/contato", key: "contact" as const }];

export function Header() {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">GL</span><span>{siteConfig.name}</span></Link>
        <nav className="desktop-nav" aria-label="Principal">{navItems.map(item => <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{dictionary.nav[item.key][locale]}</Link>)}</nav>
        <div className="desktop-controls"><LanguageToggle/><ThemeToggle/></div>
        <button type="button" className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <CloseIcon className="icon"/> : <MenuIcon className="icon"/>}</button>
      </div>
      {open && <div className="mobile-menu"><nav>{navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname === item.href ? "active" : ""}>{dictionary.nav[item.key][locale]}</Link>)}</nav><div><LanguageToggle/><ThemeToggle/></div></div>}
    </header>
  );
}
