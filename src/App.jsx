/**
 * @copyright 2024 Abdhulla
 * @license Apache-2.0
 */

import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skill } from "./components/Skill";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certfications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { React } from "react";

export default function App() {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        ScrollTrigger: {
          trigger: element,
          start:'-200 bottom',
          end:'bottom 80%',
          scrub: true,
        },
        y:0,
        opacity:1,
        duration:1,
        ease:'power2.out'

      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
}
