import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import { useGSAP } from "@gsap/react";
import { FlipLink } from "./FlipLink";
import { GradiantBackground } from "./about";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, useGSAP);

export default function Hero() {
  const href = "hero";

  useGSAP(() => {

    // --- FIX 1: Add this ---
    // This is the key to fixing the mobile scroll jank and the white bar.
    // It should be run once, ideally in your main layout component, but here is fine.
    ScrollTrigger.normalizeScroll(true);

    gsap.to(`.hero-link`, {
      duration: 1,
      scrambleText: "Hero ↗"
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${href}`,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        // markers: true
      }
    });

    tl.to(".hero-link", { y: -100, ease: "power1.in" }, 0);

    // It's good practice to return a cleanup function to revert the normalization
    // when the component unmounts.
    return () => {
      if (ScrollTrigger.isTouch) { // Only affects touch devices
        ScrollTrigger.normalizeScroll(false);
      }
    };
  }, []);

  return (
    <div id={href} className="relative flex h-dvh w-full justify-center overflow-hidden">

      <FlipLink className='hero-link z-1 absolute self-center' href={href} children="Hero ↗" />

      <GradiantBackground />
    </div>
  );
}
