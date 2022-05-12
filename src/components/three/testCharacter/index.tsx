/**
 * ----------------------------------------    default
 */
import React, { Suspense, useState } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const TestCharacter = () => {
  const gltf = useLoader(GLTFLoader, "/char/adam/adamHead.gltf")
  console.log(gltf)

  const [isHovered, setIsHovered] = useState(true)

  return (
    <primitive
      object={gltf.scene}
      // onPointerUp={(e: any) => console.log("up")}
      // onPointerDown={(e: any) => console.log("down")}
      // onClick={(e: any) => console.log("click")}
      // onDoubleClick={(e: any) => console.log("double click")}
      // onWheel={(e: any) => console.log("wheel spins")}
      // onPointerMove={(e: any) => console.log("move")}
      onPointerOver={(e: any) => e.object.material.color.set("red")}
      onPointerOut={(e: any) => e.object.material.color.set("white")}
      // onPointerLeave={(e: any) => console.log("leave")}
      // onPointerEnter={(e: any) => console.log("enter")}
      // onPointerOut={(e: any) => console.log("out")}
      onContextMenu={(e: any) => console.log("context menu")}
      // onPointerMissed={() => console.log("missed")}
      onUpdate={(self: any) => console.log("props have been updated", self)}
      rotation={isHovered ? [0, Math.PI, 0] : [0, 0, 0]}
    />
  )
}

export default TestCharacter
