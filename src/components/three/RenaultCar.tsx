import React from "react"
import { useLoader } from "@react-three/fiber"
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    [keys: string]: THREE.Mesh
  }
  materials: {
    [keys: string]: THREE.MeshStandardMaterial
  }
}

const RenaultCar = ({ ...props }: JSX.IntrinsicElements["group"]) => {
  const fbx = useLoader(FBXLoader, "/assets/xm3_high.fbx")
  console.log(fbx.children)
  //   fbx.children[0].material.color.r = 0.5
  return <primitive object={fbx} {...props} />
}
export default RenaultCar
