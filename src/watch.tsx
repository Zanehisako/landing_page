import gsap from "gsap"
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three/examples/jsm/Addons.js'
import { useEffect, type JSX } from 'react'

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial053: THREE.Mesh
    defaultMaterial052: THREE.Mesh
    defaultMaterial003: THREE.Mesh
    defaultMaterial011: THREE.Mesh
    defaultMaterial054: THREE.Mesh
    defaultMaterial008: THREE.Mesh
    defaultMaterial007: THREE.Mesh
    defaultMaterial006: THREE.Mesh
    defaultMaterial055: THREE.Mesh
    defaultMaterial005: THREE.Mesh
    defaultMaterial: THREE.Mesh
    defaultMaterial002: THREE.Mesh
    defaultMaterial051: THREE.Mesh
    defaultMaterial050: THREE.Mesh
    defaultMaterial049: THREE.Mesh
    defaultMaterial048: THREE.Mesh
    defaultMaterial047: THREE.Mesh
    defaultMaterial046: THREE.Mesh
    defaultMaterial045: THREE.Mesh
    defaultMaterial044: THREE.Mesh
    defaultMaterial043: THREE.Mesh
    defaultMaterial042: THREE.Mesh
    defaultMaterial041: THREE.Mesh
    defaultMaterial040: THREE.Mesh
    defaultMaterial039: THREE.Mesh
    defaultMaterial038: THREE.Mesh
    defaultMaterial037: THREE.Mesh
    defaultMaterial036: THREE.Mesh
    defaultMaterial035: THREE.Mesh
    defaultMaterial033: THREE.Mesh
    defaultMaterial032: THREE.Mesh
    defaultMaterial034: THREE.Mesh
    defaultMaterial031: THREE.Mesh
    defaultMaterial010: THREE.Mesh
    defaultMaterial030: THREE.Mesh
    defaultMaterial029: THREE.Mesh
    defaultMaterial028: THREE.Mesh
    defaultMaterial027: THREE.Mesh
    defaultMaterial026: THREE.Mesh
    defaultMaterial025: THREE.Mesh
    defaultMaterial024: THREE.Mesh
    defaultMaterial023: THREE.Mesh
    defaultMaterial022: THREE.Mesh
    defaultMaterial021: THREE.Mesh
    defaultMaterial020: THREE.Mesh
    defaultMaterial019: THREE.Mesh
    defaultMaterial018: THREE.Mesh
    defaultMaterial017: THREE.Mesh
    defaultMaterial016: THREE.Mesh
    defaultMaterial015: THREE.Mesh
    defaultMaterial014: THREE.Mesh
    defaultMaterial013: THREE.Mesh
    defaultMaterial012: THREE.Mesh
    defaultMaterial001: THREE.Mesh
    defaultMaterial004: THREE.Mesh
    defaultMaterial009: THREE.Mesh
  }
  materials: {
    metal: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export function Watch(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/watch.glb', true, true) as unknown as GLTFResult

  useEffect(() => {
    // Ensure both materials are transparent and start invisible
    Object.values(materials).forEach((mat) => {
      mat.transparent = true
      mat.opacity = 0
    })

    // Animate opacity to 1
    gsap.to(materials.metal, { opacity: 1, duration: 3, ease: 'power2.in' })
    gsap.to(materials.Glass, { opacity: 1, duration: 3, ease: 'power2.in', delay: 1 })
  }, [materials])
  return (
    <group {...props} dispose={null} position={[0, 2, 0]} scale={0.1}>
      <group  >
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial053.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial052.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial003.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial011.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial054.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial008.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial007.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial006.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial055.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial005.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial002.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial051.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial050.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial049.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial048.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial047.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial046.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial045.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial044.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial043.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial042.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial041.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial040.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial039.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial038.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial037.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial036.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial035.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial033.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial032.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial034.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial031.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial010.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial030.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial029.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial028.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial027.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial026.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial025.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial024.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial023.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial022.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial021.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial020.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial019.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial018.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial017.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial016.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial015.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial014.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial013.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial012.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial001.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial004.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial009.geometry}
            material={materials.Glass}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/watch.glb')
