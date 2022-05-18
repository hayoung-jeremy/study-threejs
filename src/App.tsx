// react
import { Center, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState } from "react"

// three
import {
  CanvasContainer,
  GltfModel,
  PFPCard,
  MagicMirror,
} from "./components/three"

// custom
import { Button, Layout } from "./components/ui"
import { ProductContainer, ProductGrid } from "./components/ui/productUI"

const availableColor = [
  { colorTheme: "white", hexValue: "#ffffff" },
  { colorTheme: "red", hexValue: "#fa0203" },
  { colorTheme: "purple", hexValue: "#dd00e2" },
]

const App = () => {
  const [boxColor, setBoxColor] = useState("#ffffff")

  return (
    <Layout>
      <ProductGrid>
        <ProductContainer>
          <Canvas
            dpr={window.devicePixelRatio}
            className=" backdrop-blur-[4px] bg-[rgba(255,255,255,.05)]"
          >
            {/* <MagicMirror>
              <ambientLight intensity={1} />
              <pointLight position={[20, 30, 10]} />
              <GltfModel scale={0.8} enableZoom={false} position={[0, 0, -2]} />
            </MagicMirror> */}
            {/* <PFPCard /> */}
            <OrbitControls enableZoom={false} />
          </Canvas>
        </ProductContainer>
        <article className="px-5 py-5">
          <div className="flex flex-col gap-3 mb-5">
            <p className="text-3xl font-bold">
              <span className="text-gray-500">Product name : </span>
              <span className="text-gray-800">Demo</span>
            </p>
            <p className="text-3xl font-bold">
              <span className="text-gray-500">Price : </span>
              <span className="text-gray-800">40$</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-700">colors : </span>
            {availableColor.map((item, index) => {
              return (
                <Button key={index} onClick={() => setBoxColor(item.hexValue)}>
                  {item.colorTheme}
                </Button>
              )
            })}
          </div>
        </article>
      </ProductGrid>
    </Layout>
  )
}

export default App
