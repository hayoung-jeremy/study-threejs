import React, { Suspense, useEffect, useRef } from "react"

// three
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"

import GltfModel from "../GltfModel"
import HelperSettings from "../HelperSettings"
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { MeshStandardMaterial } from "three"
import AvatarBoots from "../AvatarBoots"
import TestBoots from "../TestBoots"

interface Props {
  source: string
}

const MAX_CANVAS_WIDTH = 500
const MAX_CANVAS_HEIGHT = 500

const EditorCanvas = ({ source }: Props) => {
  const gltf = useLoader(GLTFLoader, "/jar/scene.gltf")

  const drawingCanvasRef = useRef<HTMLCanvasElement>(null)
  const textureRef = useRef<THREE.CanvasTexture>(null)

  // drawing canvas
  useEffect(() => {
    const canvas = drawingCanvasRef.current
    const context = canvas?.getContext("2d")

    // load texture image
    const image = new Image()
    image.src = source
    image.onload = () => {
      const width = image.width > image.height ? MAX_CANVAS_WIDTH : (image.width * MAX_CANVAS_HEIGHT) / image.height

      const height = image.width > image.height ? (image.height * MAX_CANVAS_WIDTH) / image.width : MAX_CANVAS_HEIGHT

      context?.drawImage(image, 0, 0, width, height)
      if (context && textureRef.current) {
        textureRef.current.needsUpdate = true
      }
    }
  }, [])

  console.log("gltf", gltf)

  return (
    <div className="bg-[rgba(0,0,0,.6)] w-screen h-screen flex items-center justify-center absolute top-0 left-0 z-[99999999]">
      <main className="grid grid-cols-2 bg-white">
        <div>
          <Canvas>
            <Suspense fallback={null}>
              {drawingCanvasRef && (
                <Center>
                  <TestBoots scale={0.05} position={[0, 0, 0]} rotation={[0, 0, 0]} texture={drawingCanvasRef} />
                  {/* <primitive object={gltf.scene} scale={2} position={[0, 0, 0]} rotation={[0, 0, 0]}>
                    <meshStandardMaterial>
                      <canvasTexture ref={textureRef} attach="map" image={drawingCanvasRef.current} />
                    </meshStandardMaterial>
                  </primitive> */}
                </Center>
              )}
            </Suspense>

            {/* settings */}
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 2]}
              // ref={camera}
              rotation={[0, 0, 0]}
              fov={50}
              // dispose={null}
              isObject3D
            />
            <OrbitControls />
            <ambientLight intensity={0.05} />
            <spotLight
              // ref={spotLight2}
              position={[-1.3, 2.85, -3.3]}
              // color="red"
              intensity={0.5}
              scale={1.5}
              angle={0.8}
              penumbra={1}
              castShadow
            />
            <spotLight
              // ref={spotLight}
              position={[1.4, 2.6, 5]}
              // color="red"
              distance={120}
              penumbra={1}
              decay={1}
              intensity={0.53}
              scale={0.05}
              angle={0.35}
              castShadow
            />
            <pointLight
              position={[0.3, 1.35, 0.8]}
              // ref={pointLight1}
              // color="#fff000"
              intensity={0.525}
            />
            {/* <gridHelper /> */}
          </Canvas>
        </div>
        <div>
          <canvas width={MAX_CANVAS_WIDTH} height={MAX_CANVAS_HEIGHT} ref={drawingCanvasRef}></canvas>
        </div>
      </main>
    </div>
  )
}

export default EditorCanvas
