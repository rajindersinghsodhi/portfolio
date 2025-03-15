import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajinder Singh Sodhi",
  description: "Portfolio of Rajinder Singh Sodhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dark = true
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: dark ? "#121212" : "#FFFFFF",}}
      >
        {children}
        <div className="flex flex-col gap-20">
        <Intro darkMode={dark}/>
        <Skills darkMode={dark}/>
        <Experience darkMode={dark}/>
        <Projects darkMode={dark}/>
        <Contact darkMode={dark}/>
        </div>
      </body>
    </html>
  );
}
