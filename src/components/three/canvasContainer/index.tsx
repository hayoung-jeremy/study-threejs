import React, { Suspense } from "react"
import { Canvas, PrimitiveProps } from "@react-three/fiber"
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei"

interface Props {
  children: React.ReactNode
}

const CanvasContainer = ({ children }: Props) => {
  return (
    <Canvas>
      <Stage adjustCamera intensity={0.3}>
        {/* <Suspense fallback={null}></Suspense> */}
        {children}
        <OrbitControls />
      </Stage>
      {/* <ambientLight intensity={0.3} /> */}
      {/* <spotLight position={[0, 0, 0]} angle={0.3} /> */}
      {/* <PerspectiveCamera fov={75} position={[0, 0, 10]} near={0.1} far={1000} /> */}
    </Canvas>
  )
}

export default CanvasContainer
