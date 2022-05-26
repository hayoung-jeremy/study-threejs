import React, { Suspense, useState } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Cloud, ContactShadows, Environment, useFBX } from "@react-three/drei"
import { TextureLoader } from "three"

const GltfModel = (props: any) => {
  // const gltf = useLoader(GLTFLoader, "/char/adam/adamHead.gltf")
  const gltf = useLoader(GLTFLoader, "/char/avatar/naked.glb")
  // const gltf = useLoader(GLTFLoader, "/char/avatar_clothes/clothes.glb")
  // const fbx = useFBX("/char/avatar/WEB_AVATAR_TEST.FBX")
  //   console.log("gltf >>>>>>>>>>>>>>", gltf)
  //   console.log("gltf.scene >>>>>>>>>>>>>>", gltf.scene)
  // console.log("gltf.nodes >>>>>>>>>>>>>>", gltf)
  // const texture = useLoader(TextureLoader, [
  //   "/char/avatar/web_texture/web_texture/BODY_01_D.png",
  //   "/char/avatar/web_texture/web_texture/EYELASHES_2.png",
  //   "/char/avatar/web_texture/web_texture/EYESHADOW_2.png",
  //   "/char/avatar/web_texture/web_texture/F_Eyebrow_011.png",
  //   "/char/avatar/web_texture/web_texture/F_HAIR_1030000_D.png",
  //   "/char/avatar/web_texture/web_texture/F_HAIR_1030000_N.png",
  //   "/char/avatar/web_texture/web_texture/F_Whiteface_002_D.png",
  //   "/char/avatar/web_texture/web_texture/F_Whiteface_002_N.png",
  //   "/char/avatar/web_texture/web_texture/IRIS002_D.png",
  //   "/char/avatar/web_texture/web_texture/TEETH_D.png",
  // ])

  // console.log(texture)

  console.log(gltf)

  const [isHovered, setIsHovered] = useState(true)

  const onMaterialOver = (e: any) => {
    // console.log(e.object)
    e.object.material.emissive.r = 0.2
    // console.log(gltf.nodes[e.object.name])
  }

  const onMaterialOut = (e: any) => {
    e.object.material.emissive.r = 0
  }

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
        // rotation={isHovered ? [0, Math.PI, 0] : [0, 0, 0]}
      />
    </Suspense>
  )
}

export default GltfModel
