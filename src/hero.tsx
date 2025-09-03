import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react";
import { Canvas } from '@react-three/fiber'
import { Environment, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react"; // We bring back useState
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
  const href = "hero";


  useGSAP(() => {
    const split = SplitText.create("#text", {
      type: "words,lines",
      linesClass: "line",
    });

    // 2. Create the GSAP animation timeline.
    gsap.from(split.lines, {
      duration: 2,
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    });
  }, [modelLoaded]); // Empty dependency array ensures this runs only once.

  return (
    <div id={href} className="relative flex h-dvh w-full justify-center overflow-hidden bg-black">
      <Canvas
        className='w-full h-dvh'
      >
        <lightProbe />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <Float floatIntensity={0.4}>
            <Watch />
          </Float>
          <ReadySignal onReady={() => setTimeout(() => {
            setModelLoaded(true)
          }, 1000)} />
        </Suspense>
      </Canvas>
      {/* 3. This component will trigger our state change once the Watch model is loaded */}
      <a className="absolute left-5 top-5 font-extrabold italic text-white z-1">Aurum</a>
      {modelLoaded &&
        <a id="text" className="absolute text-[clamp(1rem,4vw,4rem)] w-1xl text-white font-poppins font-bold uppercase self-center">
          blending tradition and modern design
        </a>
      }

    </div>
  );
}
