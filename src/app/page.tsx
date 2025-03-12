'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { useState } from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="flex flex-col gap-5">
      <Navbar/>
      <Intro darkMode={true}/>
      <Experience darkMode={true}/>
      <Skills darkMode={true}/>
      <Projects darkMode={true}/>
      <Contact darkMode={true}/>
      <Footer darkMode={true}/>
    </div>
  );
}
