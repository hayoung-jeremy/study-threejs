import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import './style.css'
import * as THREE from 'three'

const axesHelper = new THREE.AxesHelper(50)

interface Props {
  children: React.ReactNode
}

const CanvasContainer = ({ children }: Props) => {
  return (
    <Canvas>
      <OrbitControls autoRotate />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.6} />
      <Suspense fallback={null}>
        {children}
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.8}
          width={10}
          height={10}
          blur={0.6}
          far={4}
        />
      </Suspense>
    </Canvas>
  )
}

export default CanvasContainer
