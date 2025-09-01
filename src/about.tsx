import { Canvas, useFrame, useThree } from '@react-three/fiber';
import fragmentShader from "./shader/fragment.glsl";
import vertexShader from "./shader/vertex.glsl";
import { useRef } from "react";
import { type ShaderMaterial } from 'three';
import { FlipLink } from './FlipLink';

function FullscreenPlane() {
  const { viewport, size } = useThree();
  const materialRef = useRef<ShaderMaterial>(null);

  // This useFrame loop is now guaranteed to always have a live, valid material to work with.
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  // We no longer need a useEffect to handle the resolution uniform.
  // The `key` prop will force the material to be recreated with the correct initial value.

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        // --- THIS IS THE FIX ---
        // By tying the key to the size, we tell React:
        // "If the size changes, this is a NEW material. Destroy the old one and create this one."
        // This prevents any stale state and guarantees the shader runs on a fresh instance.
        key={`${size.width}-${size.height}`}

        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          // This initial value will be correct every time the material is recreated.
          uResolution: { value: [size.width, size.height] }
        }}
      />
    </mesh>
  );
}

export function GradiantBackground() {
  return (
    <Canvas
      className='w-full h-dvh'
      frameloop='always'
      // This prop is still essential to fix the shader stopping on mobile scroll.
      resize={{ scroll: false }}
    >
      <FullscreenPlane />
    </Canvas>
  );
}

export default function About() {
  return (
    <div id="canvas-container" className='flex relative h-dvh w-full items-center justify-center bg-lime-200'>
      <FlipLink className='z-1 absolute' href="about">about↗</FlipLink>
    </div>
  );
}
