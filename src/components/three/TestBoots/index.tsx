/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"

import * as THREE from "three"
import { useLoader } from "@react-three/fiber"
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

const TestBoots = ({ ...props }: JSX.IntrinsicElements["group"] | any) => {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF("/char/avatar_clothes/clothes.glb") as GLTFResult

  console.log("props.texture.current", props.texture.current)

  console.log("materials", materials)

  // 기본 gltf 의 material 을 변수로 저장, 해당 material 의 map 만 canvasTexture 로 덮어씌움, 나머지 설정들 유지, 즉 원본 그대로 유지
  const originalMaterial = materials.NewMat10.clone()
  originalMaterial.map = new THREE.CanvasTexture(props.texture.current)

  return (
    <group ref={group} {...props} dispose={null}>
      {/* boots */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.F_PRD_21FW_SH002_1.geometry} material={originalMaterial} castShadow>
          <meshStandardMaterial
            attach="map"
            map={originalMaterial.map}
            // normalMap={normalMap}
            // roughnessMap={specularMap}
          />
        </mesh>
        {/* <mesh geometry={nodes.F_PRD_21FW_SH002_2.geometry} material={materials.NewMat10} castShadow /> */}
        <mesh geometry={nodes.F_PRD_21FW_SH002_2.geometry} material={originalMaterial} castShadow>
          <meshStandardMaterial
            attach="map"
            map={originalMaterial.map}
            // normalMap={normalMap}
            // roughnessMap={specularMap}
          />
        </mesh>
        <mesh geometry={nodes.F_PRD_21FW_SH002_3.geometry} material={originalMaterial} castShadow>
          <meshStandardMaterial
            attach="map"
            map={originalMaterial.map}
            // normalMap={normalMap}
            // roughnessMap={specularMap}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload("/char/avatar_clothes/clothes.glb")

export default TestBoots
