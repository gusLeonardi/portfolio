"use client";

import { useLanguage } from "@/context/language-context";
import { dictionary, siteConfig } from "@/data/content";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export function Footer({ year }: { year: number }) {
  const { locale } = useLanguage();
  const links = [{ href: `mailto:${siteConfig.email}`, label: "Email", icon: MailIcon }, { href: siteConfig.linkedin, label: "LinkedIn", icon: LinkedinIcon }, { href: siteConfig.github, label: "GitHub", icon: GithubIcon }];
  return <footer className="site-footer"><div className="page-shell footer-inner"><div><p>© {year} {siteConfig.name}. {dictionary.footer.rights[locale]}</p><p>{dictionary.footer.builtWith[locale]}</p></div><div className="social-icons">{links.map(({ href, label, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label}><Icon className="icon"/></a>)}</div></div></footer>;
}
