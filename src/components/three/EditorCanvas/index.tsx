import React, { Suspense, useEffect, useRef } from "react"

// three
import * as THREE from "three"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"

import HelperSettings from "../HelperSettings"
import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import TestBoots from "../TestBoots"

interface Props {
  source: string
}

const MAX_CANVAS_WIDTH = 500
const MAX_CANVAS_HEIGHT = 500

const EditorCanvas = ({ source }: Props) => {
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
      const width =
        image.width > image.height
          ? MAX_CANVAS_WIDTH
          : (image.width * MAX_CANVAS_HEIGHT) / image.height

      const height =
        image.width > image.height
          ? (image.height * MAX_CANVAS_WIDTH) / image.width
          : MAX_CANVAS_HEIGHT

      context?.drawImage(image, 0, 0, width, height)
      if (context && textureRef.current) {
        textureRef.current.needsUpdate = true
      }
    }
  }, [])

  return (
    <div className="w-fit h-fit flex items-end justify-end absolute bottom-0 right-0 z-[99999999]">
      <main className="grid grid-cols-2 bg-white">
        <div>
          <Canvas>
            <Suspense fallback={null}>
              {drawingCanvasRef && (
                <Center>
                  <TestBoots
                    scale={0.015}
                    position={[0, 0, 0]}
                    rotation={[0, -Math.PI / 8, 0]}
                    texture={drawingCanvasRef}
                  />
                </Center>
              )}
            </Suspense>

            {/* settings */}
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 2]}
              rotation={[0, 0, 0]}
              fov={20}
            />
            <OrbitControls />
            <ambientLight intensity={0.05} />
            <spotLight
              position={[-1.3, 2.85, -3.3]}
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
            <pointLight position={[0.3, 1.35, 0.8]} intensity={0.525} />
            <gridHelper />
          </Canvas>
        </div>
        <div>
          <canvas
            width={MAX_CANVAS_WIDTH}
            height={MAX_CANVAS_HEIGHT}
            ref={drawingCanvasRef}
            draggable={true}
          ></canvas>
        </div>
      </main>
    </div>
  )
}

export default EditorCanvas
