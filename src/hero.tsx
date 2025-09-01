import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FlipLink } from "./FlipLink";
import { GradiantBackground } from "./about";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const href = "hero";

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${href}`,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: true
      }
    });

    tl.to(".hero-link", { y: -600, ease: "power1.in" }, 0);
  }, []);

  return (
    <div id={href} className="relative flex h-dvh w-full justify-center">

      <FlipLink className='hero-link z-1 absolute self-end' href={href}>Hero ↗</FlipLink>

      {/* This child will now correctly fill its `relative` parent */}
      <GradiantBackground />
    </div>
  );
}
