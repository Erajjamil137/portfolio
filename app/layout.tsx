import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eraj Jamil - AI Developer Portfolio",
  description: "AI Student & Developer building intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth bg-[#0F172A]">
      <body className={`${inter.className} text-white font-sans selection:bg-[#A855F7] selection:text-white overflow-x-hidden min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
