import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/context/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/data/content";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.name} — Software Engineering`,
  description: "Portfólio de Gustavo Leonardi: engenharia de software, desenvolvimento full-stack e inteligência artificial.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const year = new Date().getFullYear();

  return <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}><body><Providers><Header/><main>{children}</main><Footer year={year}/></Providers></body></html>;
}
