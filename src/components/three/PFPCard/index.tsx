import React, { Suspense, useRef } from "react"
import * as THREE from "three"
import { useFrame, useLoader } from "@react-three/fiber"
import { Center, Image, RoundedBox } from "@react-three/drei"

interface Props {
  color?: string
  imgURL: string
  props?: any
}

const PFPCard = ({ color, imgURL, props }: Props) => {
  const ref = useRef<any>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.material.zoom = 1 // 1 and higher
      ref.current.material.grayscale = 0 // between 0 and 1
      ref.current.material.color.set("white") // mix-in color
    }
  })

  return (
    <Suspense fallback={null}>
      <group {...props}>
        <Center>
          <Image
            ref={ref}
            url={imgURL}
            scale={4}
            opacity={0.99999}
            transparent
          />
        </Center>
        <RoundedBox scale={[4, 6, 0.05]} position={[0, 0, -0.05]}>
          <meshStandardMaterial side={THREE.FrontSide} color={color} />
        </RoundedBox>
        <Image
          ref={ref}
          url="img/altavaGroup_mark_white.png"
          scale={1.5}
          opacity={0.99999}
          transparent
          position={[0, 0, -0.1]}
          rotation={[0, Math.PI, 0]}
        />
      </group>
    </Suspense>
  )
}

export default PFPCard
