import React, { Suspense, useState } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const GltfModel = () => {
  const gltf = useLoader(GLTFLoader, "/char/adam/adamHead.gltf")

  //   console.log("gltf >>>>>>>>>>>>>>", gltf)
  //   console.log("gltf.scene >>>>>>>>>>>>>>", gltf.scene)
  console.log("gltf.nodes >>>>>>>>>>>>>>", gltf)

  const [isHovered, setIsHovered] = useState(true)

  const onMaterialOver = (e: any) => {
    console.log(e.object.material)
    e.object.material.emissive.set("#ff0000")
  }

  const onMaterialOut = (e: any) => {
    e.object.material.emissive.set("#000")
  }

  return (
    <Suspense fallback={null}>
      <primitive
        position={[0, 0, 0]}
        object={gltf.scene}
        // currentColor={currentColor}
        // onPointerUp={(e: any) => console.log("up")}
        // onPointerDown={(e: any) => console.log("down")}
        // onClick={(e: any) => console.log("click")}
        // onDoubleClick={(e: any) => console.log("double click")}
        // onWheel={(e: any) => console.log("wheel spins")}
        // onPointerMove={(e: any) => console.log("move")}
        onPointerOver={onMaterialOver}
        onPointerOut={onMaterialOut}
        // onPointerLeave={(e: any) => console.log("leave")}
        // onPointerEnter={(e: any) => console.log("enter")}
        // onPointerOut={(e: any) => console.log("out")}
        onContextMenu={(e: any) => console.log("context menu")}
        // onPointerMissed={() => console.log("missed")}
        onUpdate={(self: any) => console.log("props have been updated", self)}
        // rotation={isHovered ? [0, Math.PI, 0] : [0, 0, 0]}
      />
    </Suspense>
  )
}

export default GltfModel
