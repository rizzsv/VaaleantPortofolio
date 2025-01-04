import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Portofolio from "@/components/portofolio";
import Image from "next/image";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Portofolio />
     <Skills />
     <Contact /> 
     <Footer />
    </>
  );
}
