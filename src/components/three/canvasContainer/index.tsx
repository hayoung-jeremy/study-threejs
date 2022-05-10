import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei"
import "./style.css"
import * as THREE from "three"

const axesHelper = new THREE.AxesHelper(50)

interface Props {
  children: React.ReactNode
}

const CanvasContainer = ({ children }: Props) => {
  return (
    <Canvas>
      <OrbitControls autoRotate />
      <ambientLight intensity={0.3} />
      <spotLight position={[200, 250, 200]} angle={0.6} />
      <PerspectiveCamera fov={75} position={[0, 0, 10]} near={0.1} far={1000} />
      <Suspense fallback={null}>
        {children}
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.8}
          width={10}
          height={10}
          blur={0.5}
          far={1000}
        />
      </Suspense>
    </Canvas>
  )
}

export default CanvasContainer
