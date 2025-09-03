import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react";

import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Environment, Float } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function Hero() {
  const href = "hero";
  const gltf = useLoader(GLTFLoader, '/invicta_watch/scene.gltf')

  useGSAP(() => {
    let split;
    SplitText.create("#text", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 2,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
        });
        return split;
      }
    });

  }, []);

  return (
    <div id={href} className="relative flex h-dvh w-full justify-center overflow-hidden bg-black">

      <Canvas
        className='w-full h-dvh'
        frameloop='always'
      >
        <lightProbe></lightProbe>
        <Environment preset="city"></Environment>
        <scene scale={[20, 20, 20]} rotation={[1, 0, 0]}>
          <Float floatIntensity={0.4}>
            <primitive object={gltf.scene} />
          </Float>
        </scene>
      </Canvas>
      <a className="absolute left-5 top-5 font-extrabold italic text-white z-1">Aurum</a>
      {/* <NavBar className="absolute self-start top-2 right-10 z-1" /> */}
      <a id="text" className="absolute text-1xl w-2xl text-white font-poppins font-bold uppercase self-center">
        blending tradition and modern design.
        Each watch is handmade with decades of expertise, aimed at collectors and connoisseurs.
      </a>

    </div>
  );
}
