import React, { useRef } from "react"

// three
import * as THREE from "three"
import { CameraHelper } from "three"
import {
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  Stats,
  useHelper,
} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const HelperSettings = () => {
  const vec = new THREE.Vector3()

  const camera = useRef<THREE.PerspectiveCamera>()
  useHelper(camera, CameraHelper)

  const directionalLight = useRef<any>()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 3, "magenta")

  const spotLight = useRef<any>()
  useHelper(spotLight, THREE.SpotLightHelper, "cyan")

  const spotLight2 = useRef<any>()
  useHelper(spotLight2, THREE.SpotLightHelper, "red")

  const pointLight1 = useRef<any>()
  useHelper(pointLight1, THREE.PointLightHelper, 1, "red")

  // useFrame(state => {
  //   console.log(state)
  //   // state.camera.lookAt(camera.current!.position)
  //   state.camera.position.lerp(vec.set(0, 1, 6), 0.01)
  // })

  return (
    <>
      {/* camera */}
      {/* <PerspectiveCamera
        makeDefault
        position={[0, 1, 3]}
        // ref={camera}
        rotation={[0, 0, 0]}
        fov={40}
        // dispose={null}
        isObject3D
      /> */}

      {/* control */}
      <OrbitControls
        // enableZoom={false}
        // minPolarAngle={Math.PI}
        // maxPolarAngle={Math.PI}
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.1}
        minDistance={1} // 최대 얼만큼 zoom in 할 수 있는지
        maxDistance={10} // 최대 얼만큼 zoom out 할 수 있는지
      />

      {/* light */}
      <ambientLight intensity={0.05} />
      <directionalLight
        position={[1.4, 1.6, 4.1]}
        intensity={0.15}
        // ref={directionalLight}
        // color="red"
        castShadow
      />

      <pointLight
        position={[0.3, 1.35, 0.8]}
        // ref={pointLight1}
        // color="#fff000"
        intensity={0.525}
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
      <spotLight
        // ref={spotLight2}
        position={[-1.3, 2.85, -3.3]}
        // color="red"
        intensity={0.5}
        scale={1.5}
        angle={0.8}
        penumbra={1}
        castShadow
      />

      {/* helper */}
      {/* <axesHelper /> */}
      <gridHelper />
      <Stats />
    </>
  )
}

export default HelperSettings
