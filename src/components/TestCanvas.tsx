// three
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// custom
import Coin from './Coin';

const TestCanvas = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.5} />
        <Coin />
      </Canvas>
    </>
  );
};

export default TestCanvas;
