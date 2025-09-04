import * as THREE from "three"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react";
import { Canvas } from '@react-three/fiber'
import { Environment, Float } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react"; // We bring back useState
import { Watch } from "./watch";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

function ReadySignal({ onReady }: { onReady: any }) {
  useEffect(() => {
    // This effect runs only once when the component mounts.
    onReady();
  }, [onReady]); // Dependency array ensures it runs when onReady changes, but it won't here.

  return null; // This component renders nothing.
}


export default function Hero() {
  // 1. Use state to control when the Canvas is mounted.
  const [modelLoaded, setModelLoaded] = useState(false);
  const watchRef = useRef<THREE.Mesh>(null);
  const href = "hero";


  useGSAP(() => {

    if (!modelLoaded || !watchRef.current) return;

    const split = SplitText.create("#text", {
      type: "words,lines",
      linesClass: "line",
    });
    const splitClients = SplitText.create("#clientText", {
      type: "words,lines",
      linesClass: "line",
    });

    const splitHistory = SplitText.create("#historyText", {
      type: "words,lines",
      linesClass: "line",
    });


    // Best practice: Create the timeline first
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 3,
      },
      // Set defaults for all tweens in this timeline for cleaner code
      defaults: {
        ease: "power2.inOut",
        duration: 3
      }
    });

    // Add the first animation to the timeline. It starts at time 0.
    gsap.from(split.words, {
      yPercent: 200,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    });

    // --- GROUP 1: Second text reveal + First watch animation ---
    // We want these to happen together, starting after the first text reveal.

    // Add the second text animation. It starts right after the previous one finishes.
    tl.from(splitClients.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    });

    // Now, animate the watch. The "<" tells it to start at the SAME TIME
    // as the splitClients.words animation above.
    tl.to(watchRef.current.position, {
      x: -1.5,
      y: -0.5,
      z: 0,
      ease: "expo.out",
    }, "<"); // <-- Position parameter: Start with previous animation

    // Animate the scale. The "<" tells it to also start at the same time.
    tl.to(watchRef.current.scale, {
      x: 0.2,
      y: 0.2,
      z: 0.2,
      ease: "expo.out",
    }, "<"); // <-- Position parameter: Start with previous animation

    // Animate the rotation. Again, "<" ensures it runs concurrently.
    tl.to(watchRef.current.rotation, {
      x: -Math.PI / 3,
      y: Math.PI / 3,
      z: 0,
      ease: "expo.out",
    }, "<"); // <-- Position parameter: Start with previous animation


    // --- GROUP 2: Third text reveal + Second watch animation ---
    // We want these to happen together as well.

    // Add the third text animation. It starts after GROUP 1 is done.
    tl.from(splitHistory.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
    });

    // Animate the watch to its next state. The "<" makes it happen
    // at the same time as the splitHistory.words animation.
    tl.to(watchRef.current.position, {
      x: 1,
      y: -3.1,
      z: 0,
      ease: "expo.out",
    }, "<"); // <-- Position parameter

    tl.to(watchRef.current.rotation, {
      x: -Math.PI / 3,
      y: -Math.PI / 3,
      z: -Math.PI / 3,
      ease: "expo.out",
    }, "<"); // <-- Position parameter


    ;

  }, [modelLoaded]); // Empty dependency array ensures this runs only once.

  return (
    <div id={href} className="relative flex h-[300dvh] w-full justify-center overflow-hidden bg-black">
      {/* 3. This component will trigger our state change once the Watch model is loaded */}
      {modelLoaded && <>
        <a id="text" className="absolute text-[clamp(1rem,4vw,4rem)] w-1xl text-white font-poppins font-bold uppercase top-20">
          blending tradition and modern design
        </a>
        <a id="clientText" className="absolute text-[clamp(1rem,2vw,2rem)] w-80 right-0 text-white font-poppins font-bold uppercase self-center">
          Clients clients liek shfldsafj df a word again sd ensures fiber
        </a>
        <a id="historyText" className="absolute text-[clamp(1rem,2vw,2rem)] w-80 left-10 text-white font-poppins font-bold uppercase bottom-50">
          blending tradition and modern design
        </a>
      </>
      }
      <Canvas
        className='w-full h-[300dvh]'
      >
        <lightProbe />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <Float>
            <Watch ref={watchRef} />
          </Float>
          <ReadySignal onReady={() => setTimeout(() => {
            setModelLoaded(true)
          }, 1000)} />
        </Suspense>
      </Canvas>

    </div>
  );
}
