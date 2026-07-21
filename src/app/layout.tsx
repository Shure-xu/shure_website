import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { montserrat, taipeiSans } from "./fonts";
import { CursorTrail } from "@/components/cursor-trail";
import { AboutTransitionOverlay } from "@/components/about-transition-overlay";
import { SmoothScroll } from "@/components/smooth-scroll";
import { WorksTransitionOverlay } from "@/components/works-transition-overlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Studio",
  description: "A personal website inspired by editorial design, strategy, and careful digital craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${taipeiSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
        <AboutTransitionOverlay />
        <WorksTransitionOverlay />
        <CursorTrail />
      </body>
    </html>
  );
}
