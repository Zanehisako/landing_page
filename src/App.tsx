import gsap from "gsap";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import ScrollSmoother from "gsap/ScrollSmoother"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Landing() {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#appMain",
      smooth: 1,        // Higher value = more smoothness
      smoothTouch: 0.1, // Smooth scrolling on mobile (0.1 is subtle)
    })
  }, [])

  return (
    <div id="smooth-wrapper">
      <main id="appMain" >
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  );
}
