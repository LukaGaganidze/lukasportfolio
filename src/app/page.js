import Hero from "@/sections/hero/hero";
import About from "@/sections/about/about";
import Skills from "@/sections/skills/Skills";
import Projects from "@/sections/projects/Projects";
import Footer from "@/componenets/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
