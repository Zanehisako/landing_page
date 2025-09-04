import * as THREE from 'three'
import { useEffect, type JSX } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import gsap from "gsap"

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial053: THREE.Mesh
    defaultMaterial: THREE.Mesh
  }
  materials: {
    metal: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
  animations: []
}

export function Watch(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/watch_optimized3-transformed.glb') as unknown as GLTFResult
  useEffect(() => {
    // Ensure both materials are transparent and start invisible
    Object.values(materials).forEach((mat) => {
      mat.transparent = true
      mat.opacity = 0
    })

    // Animate opacity to 1
    gsap.to(materials.metal, { opacity: 1, duration: 2, ease: 'power2.in' })
    gsap.to(materials.Glass, { opacity: 1, duration: 2, ease: 'power2.in', delay: 1 })
  }, [materials])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial053.geometry} material={materials.metal} />
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Glass} />
    </group>
  )
}

useGLTF.preload('/watch_optimized3-transformed.glb')
