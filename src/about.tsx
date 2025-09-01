import { Canvas, useFrame, useThree } from '@react-three/fiber'
import fragmentShader from "./shader/fragment.glsl"
import vertexShader from "./shader/vertex.glsl"
import { useRef } from "react"
import { type ShaderMaterial } from 'three'
import { FlipLink } from './FlipLink'

function FullscreenPlane() {
  const { viewport } = useThree()
  const { width, height } = viewport
  const materialRef = useRef<ShaderMaterial>(undefined)

  // Animate uTime each frame
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })


  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: [window.innerWidth, window.innerHeight] }
        }}
      />
    </mesh>
  )
}

export function GradiantBackground() {
  return (
    <Canvas className='w-full h-[dvw]' frameloop='always' aria-disabled resize={{ offsetSize: false, scroll: false }}>
      <FullscreenPlane />
    </Canvas>
  )
}

export default function About() {
  return (
    <div id="canvas-container" className='flex relative h-dvh w-full items-center justify-center bg-lime-200'>
      <FlipLink className='z-1 absolute' href="about">about↗</FlipLink>
    </div>
  );
}
