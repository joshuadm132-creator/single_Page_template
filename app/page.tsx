import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Awards/>
      <Contact />
    </main>
  );
}