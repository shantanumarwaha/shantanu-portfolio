import type { Metadata } from "next";
import { Carlito, Inter, Newsreader } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Calibri itself isn't licensed for web embedding; Carlito is the
// metric-compatible open-source substitute, so it renders identically
// when the visitor doesn't have Calibri installed locally.
const carlito = Carlito({
  variable: "--font-carlito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: profile.statement,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${carlito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
