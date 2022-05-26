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
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5.6]}
        // ref={camera}
        rotation={[0, 0, 0]}
        fov={40}
      />

      {/* control */}
      <OrbitControls
        // enableZoom={false}
        // minPolarAngle={Math.PI}
        // maxPolarAngle={Math.PI}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={1} // 최대 얼만큼 zoom in 할 수 있는지
        maxDistance={8} // 최대 얼만큼 zoom out 할 수 있는지
      />

      {/* light */}
      <ambientLight intensity={0.15} />
      {/* <directionalLight
        position={[1, 3, 1.8]}
        intensity={0.5}
        // ref={directionalLight}
        // color="white"
      /> */}

      {/* <pointLight
        position={[1, 3, 2]}
        ref={pointLight1}
        color="#fff000"
        intensity={0.2}
      /> */}

      <spotLight
        // ref={spotLight}
        position={[1.5, 1.6, 4.3]}
        // color="red"
        intensity={0.37}
        scale={0.8}
        angle={0.5}
        castShadow
      />

      {/* helper */}
      {/* <axesHelper /> */}
      {/* <gridHelper /> */}
      {/* <Stats /> */}
    </>
  )
}

export default HelperSettings
