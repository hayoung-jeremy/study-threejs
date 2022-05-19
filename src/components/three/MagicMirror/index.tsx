import { useRef, useState } from "react"
import * as THREE from "three"
import { createPortal, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, RoundedBox, useFBO } from "@react-three/drei"
import { DoubleSide } from "three"

interface Props {
  children?: any
  props?: any
}

const MagicMirror = ({ children, ...props }: Props) => {
  const cam = useRef<any>()
  // useFBO creates a WebGL2 buffer for us, it's a helper from the "drei" library
  const fbo = useFBO()
  // This is a separate scene that we create, React will portal into that
  const [scene] = useState(() => new THREE.Scene())
  // Tie this component into the render-loop
  useFrame(state => {
    // Our portal has its own camera, but we copy the originals world matrix
    cam.current.matrixWorldInverse.copy(state.camera.matrixWorldInverse)
    // Then we set the render-target to the buffer that we have created
    state.gl.setRenderTarget(fbo)
    // We render the scene into it, using the local camera that is clamped to the planes aspect ratio
    state.gl.render(scene, cam.current)
    // And flip the render-target to the default again
    state.gl.setRenderTarget(null)
  })
  console.log(scene)
  return (
    <>
      <RoundedBox
        scale={[4, 6, 0.05]}
        position={[0, 0, 0]}
        radius={0.025}
        // smoothness={1}
        {...props}
      >
        {/* <boxBufferGeometry attach="geometry" args={[4, 6, 0.05]} /> */}
        {/* The "mirror" is just a boring plane, but it receives the buffer texture */}
        <meshBasicMaterial map={fbo.texture} />
      </RoundedBox>
      <PerspectiveCamera
        position={[0, 0, 10]}
        manual
        ref={cam}
        fov={50}
        aspect={4 / 6}
        onUpdate={c => c.updateProjectionMatrix()}
      />
      {/* This is React being awesome, we portal this components children into the separate scene above */}
      {createPortal(children, scene)}
    </>
  )
}

export default MagicMirror
