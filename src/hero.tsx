import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FlipLink } from "./FlipLink";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const href = "hero";

  useGSAP(() => {
    gsap.to(`#${href}`, {
      scrollTrigger: {
        trigger: `#${href}`,
        start: "top top",
        end: "+=300",
        scrub: true,
        pin: true,
        markers: true, // <--- add this while debugging

      },
      opacity: 0.0,
      y: 50
    });
  }, []);

  return (
    <div id="background" className="flex flex-col h-dvh w-full items-center justify-center  bg-red-200">
      <div id={href}>
        <FlipLink href={href}>Hero ↗</FlipLink>
      </div>
    </div>
  );
}
