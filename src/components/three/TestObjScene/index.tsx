import React from "react"
import { useLoader } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"

const TestObjScene = () => {
  const materials = useLoader(MTLLoader, "/obj/unityexport.mtl")
  const object = useLoader(OBJLoader, "/obj/unityexport.obj", (loader: any) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  //   const obj = useLoader(OBJLoader, "/obj/unityexport.obj")
  //   console.log("obj >>>>>>>>>>>>>>>>>>>", obj)
  return (
    <>
      <primitive object={object} />
    </>
  )
}

export default TestObjScene
