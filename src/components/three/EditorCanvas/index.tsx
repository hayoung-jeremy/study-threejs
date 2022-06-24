import React, { Suspense, useEffect, useRef, useState } from "react"

// three
import * as THREE from "three"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"

import HelperSettings from "../HelperSettings"
import {
  Center,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei"
import TestBoots from "../TestBoots"
import {
  Body,
  OutsoleOpt1,
  OutsoleOpt2,
  OutsoleOpt3,
  OutsoleOpt4,
} from "../HausBoots"
import { cls } from "../../../utils/utils"

interface Props {
  source: string
}

const MAX_CANVAS_WIDTH = 500
const MAX_CANVAS_HEIGHT = 500

const EditorCanvas = ({ source }: Props) => {
  const drawingCanvasRef = useRef<HTMLCanvasElement>(null)
  const textureRef = useRef<THREE.CanvasTexture>(null)

  const [outsoleOption, setOutsoleOption] = useState(0)

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
      <main className="w-screen h-screen bg-white">
        <div className="w-full h-full">
          <Canvas>
            <Suspense fallback={null}>
              {drawingCanvasRef && (
                <Center>
                  {/* <TestBoots
                    scale={0.015}
                    position={[0, 0, 0]}
                    rotation={[0, -Math.PI / 8, 0]}
                    texture={drawingCanvasRef}
                  /> */}
                  <Body scale={0.01} />
                  {outsoleOption === 0 && (
                    <OutsoleOpt1 scale={0.01} position={[0, 0, 0]} />
                  )}
                  {outsoleOption === 1 && (
                    <OutsoleOpt2 scale={0.01} position={[0, 0, 0]} />
                  )}
                  {outsoleOption === 2 && (
                    <OutsoleOpt3 scale={0.01} position={[0, 0, 0]} />
                  )}
                  {outsoleOption === 3 && (
                    <OutsoleOpt4 scale={0.01} position={[0, 0, 0]} />
                  )}

                  <Html position={[0.3, 0.4, 0]}>
                    <aside className="w-[200px] flex flex-col gap-3 select-none">
                      <p className="font-medium text-xl">Outsole Options</p>
                      <ul className="flex flex-col gap-2">
                        <li
                          onClick={() => setOutsoleOption(0)}
                          className={cls(
                            "flex items-center justify-center",
                            "transition-all backdrop-blur-md rounded-lg py-2 cursor-pointer",
                            "border border-slate-300 text-[#333]",
                            "hover:border-[rgba(255,149,223,0.8)] hover:text-[rgba(250,92,171,0.8)]"
                          )}
                        >
                          Outsole Option 1
                        </li>
                        <li
                          onClick={() => setOutsoleOption(1)}
                          className={cls(
                            "flex items-center justify-center",
                            "transition-all backdrop-blur-sm rounded-lg py-2 cursor-pointer",
                            "border border-slate-300 text-[#333]",
                            "hover:border-[rgba(255,149,223,0.8)] hover:text-[rgba(250,92,171,0.8)]"
                          )}
                        >
                          Outsole Option 2
                        </li>
                        <li
                          onClick={() => setOutsoleOption(2)}
                          className={cls(
                            "flex items-center justify-center",
                            "transition-all backdrop-blur-sm rounded-lg py-2 cursor-pointer",
                            "border border-slate-300 text-[#333]",
                            "hover:border-[rgba(255,149,223,0.8)] hover:text-[rgba(250,92,171,0.8)]"
                          )}
                        >
                          Outsole Option 3
                        </li>
                        <li
                          onClick={() => setOutsoleOption(3)}
                          className={cls(
                            "flex items-center justify-center",
                            "transition-all backdrop-blur-sm rounded-lg py-2 cursor-pointer",
                            "border border-slate-300 text-[#333]",
                            "hover:border-[rgba(255,149,223,0.8)] hover:text-[rgba(250,92,171,0.8)]"
                          )}
                        >
                          Outsole Option 4
                        </li>
                      </ul>
                    </aside>
                  </Html>
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
        {/* <div>
          <canvas
            width={MAX_CANVAS_WIDTH}
            height={MAX_CANVAS_HEIGHT}
            ref={drawingCanvasRef}
            draggable={true}
          ></canvas>
        </div> */}
      </main>
    </div>
  )
}

export default EditorCanvas
