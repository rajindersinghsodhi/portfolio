import Image from "next/image";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Intro/>
      <Experience/>
    </div>
  );
}
