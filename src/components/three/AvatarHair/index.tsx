/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    [keys: string]: THREE.Mesh
  }
  materials: {
    [keys: string]: THREE.MeshStandardMaterial
  }
}

const AvatarHair = ({ ...props }: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF("/char/avatar_clothes/clothes.glb") as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      {/* hair */}
      <mesh
        geometry={nodes.F_HAIR_1030000.geometry}
        material={materials.NewMat03}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
      />
    </group>
  )
}

useGLTF.preload("/char/avatar_clothes/clothes.glb")

export default AvatarHair