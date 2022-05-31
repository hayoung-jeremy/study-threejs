import React, { Suspense, useEffect, useState } from "react"

import * as THREE from "three"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { TextureLoader } from "three"

const GltfModel = (props: any) => {
  const gltf = useLoader(GLTFLoader, "/jar/scene.gltf")

  const texture = useLoader(TextureLoader, [
    "/jar/textures/material_baseColor.jpeg",
    "/jar/textures/ml.001_baseColor.jpeg",
  ])

  // console.log(gltf)

  return (
    <Suspense fallback={null}>
      <primitive
        object={gltf.scene}
        {...props}
        // map={texture}
        // normalMap={normalMap}
        // roughnessMap={roughnessMap}
        // metalnessMap={metalnessMap}
        // onPointerOver={onMaterialOver}
        // onPointerOut={onMaterialOut}
        // currentColor={currentColor}
        // onPointerUp={(e: any) => console.log("up")}
        // onPointerDown={(e: any) => console.log("down")}
        // onClick={(e: any) => console.log("click")}
        // onDoubleClick={(e: any) => console.log("double click")}
        // onWheel={(e: any) => console.log("wheel spins")}
        // onPointerMove={(e: any) => console.log("move")}
        // onPointerLeave={(e: any) => console.log("leave")}
        // onPointerEnter={(e: any) => console.log("enter")}
        // onPointerOut={(e: any) => console.log("out")}
        // onContextMenu={(e: any) => console.log("context menu")}
        onPointerMissed={() => console.log("missed")}
        onUpdate={(self: any) => console.log("props have been updated", self)}
      />
      <canvasTexture ref={props.textureRef} attach="map" image={props.canvasRef.current} />
    </Suspense>
  )
}

export default GltfModel
