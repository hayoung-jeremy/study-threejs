import React, { useRef } from "react"

// three
import * as THREE from "three"
import { CameraHelper } from "three"
import {
  OrbitControls,
  PerspectiveCamera,
  Stats,
  useHelper,
} from "@react-three/drei"

const HelperSettings = () => {
  const camera = useRef<THREE.PerspectiveCamera>()
  useHelper(camera, CameraHelper)

  const directionalLight = useRef<any>()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 3, "magenta")

  const spotLight = useRef<any>()
  useHelper(spotLight, THREE.SpotLightHelper, "cyan")

  const pointLight1 = useRef<any>()
  useHelper(pointLight1, THREE.PointLightHelper, 1, "red")

  return (
    <>
      {/* camera */}
      <PerspectiveCamera position={[0, 0, 10]} />

      {/* control */}
      <OrbitControls enableZoom={false} />

      {/* light */}
      <ambientLight position={[1, 3, 0.8]} />
      <directionalLight
        position={[1, 3, 1.8]}
        intensity={0.5}
        // ref={directionalLight}
        // color="white"
      />

      <pointLight
        position={[3, 0, -1]}
        // ref={pointLight1}
        color="red"
        intensity={1}
      />

      <spotLight
        // ref={spotLight}
        position={[-3, 4, 1]}
        color="purple"
        intensity={2}
      />

      {/* helper */}
      {/* <axesHelper />
      <gridHelper />
      <Stats /> */}
    </>
  )
}

export default HelperSettings
