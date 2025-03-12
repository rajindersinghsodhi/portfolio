'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="flex flex-col gap-5">
      <Navbar/>
      <Intro darkMode={true}/>
      <Experience darkMode={true}/>
      <Skills darkMode={true}/>
    </div>
  );
}
