import { useRef } from 'react';

// three
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Coin = () => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(() => (mesh.current!.rotation.y = mesh.current!.rotation.z += 0.01));
  return (
    <mesh ref={mesh} scale={1}>
      <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
      <meshLambertMaterial attach='material' color='#ff9800' />
    </mesh>
  );
};

export default Coin;
