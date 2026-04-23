import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SystemDesign from "@/components/SystemDesign";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <SystemDesign />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
