import React, { Suspense } from "react"
import * as THREE from "three"
import { DoubleSide } from "three"
import { useLoader } from "@react-three/fiber"
import { RoundedBox, useAspect } from "@react-three/drei"

const PFPCard = (props: any) => {
  const texture = useLoader(
    THREE.TextureLoader,
    "img/about-bg-character-01.png"
  )
  const scale = useAspect(
    texture.source.data.width, // Pixel-width
    texture.source.data.height, // Pixel-height
    1 // Optional scaling factor
  )
  console.log(texture.source.data.width)
  return (
    <Suspense fallback={null}>
      {/* <RoundedBox
        // scale={[4, 6, 0.05]}
        scale={scale}
        position={[0, 0, 0]}
        {...props}
        receiveShadow
        castShadow
        smoothness={10}
        // radius={0.001}
      ></RoundedBox> */}
      <group>
        <mesh scale={scale}>
          <planeBufferGeometry attach="geometry" args={[1, 1]} />
          <meshBasicMaterial
            transparent={true}
            // opacity={0.8}
            // side={DoubleSide}
            attach="material"
            map={texture}
            toneMapped={false}
          />
        </mesh>
        <mesh scale={[4, 6, -10]}>
          <planeBufferGeometry attach="geometry" args={[1, 1]} />
          <meshBasicMaterial attach="material" color="red" side={DoubleSide} />
        </mesh>
      </group>
    </Suspense>
  )
}

export default PFPCard
