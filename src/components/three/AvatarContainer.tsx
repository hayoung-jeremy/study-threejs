import React, { Suspense, useEffect, useMemo, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

import AvatarBoots from "./AvatarBoots"
import AvatarDress from "./AvatarDress"
import AvatarHair from "./AvatarHair"
import AvatarWithOutClothes from "./AvatarWithOutClothes"
import { Bounds, useBounds } from "@react-three/drei"

interface Props {
  cameraLookAtIndex: number
}

const AvatarContainer = ({ cameraLookAtIndex }: Props) => {
  const vec = new THREE.Vector3()

  // useFrame(state => {
  //   if (cameraLookAtIndex === 2) {
  //     state.camera.position.lerp(vec.set(0, 2, 0), 0.05)
  //     state.camera.lookAt(0, 0, 0)
  //     state.camera.updateProjectionMatrix()
  //     return
  //   } else return
  // })

  return (
    <Suspense fallback={null}>
      <Bounds fit clip observe damping={2} margin={2}>
        <AvatarWithOutClothes
          scale={0.005}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />

        <AvatarHair
          cameraLookAtIndex={cameraLookAtIndex}
          scale={0.005}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <AvatarBoots scale={0.005} position={[0, 0, 0]} rotation={[0, 0, 0]} />
        <AvatarDress
          scale={0.005}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          castShadow
          receiveShadow
        />
      </Bounds>
    </Suspense>
  )
}

export default AvatarContainer
