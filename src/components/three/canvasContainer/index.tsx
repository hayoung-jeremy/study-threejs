import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './style.css'

interface Props {
  children: React.ReactNode
}

const CanvasContainer = ({ children }: Props) => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.6} />
      {children}
    </Canvas>
  )
}

export default CanvasContainer
