// three
import { Canvas } from '@react-three/fiber';
import Coin from './Coin';

const TestCanvas = () => {
  return (
    <>
      <Canvas>
        <Coin></Coin>
      </Canvas>
    </>
  );
};

export default TestCanvas;
