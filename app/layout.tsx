import type { Metadata } from "next";
import { Geist_Mono, Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srishti Mehta — Product Leader in AI & Enterprise SaaS",
  description: "Srishti Mehta is a Senior Product Manager building AI, cybersecurity, and enterprise platform products.",
  icons: { icon: "/srishti-mark.png", shortcut: "/srishti-mark.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${newsreader.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
