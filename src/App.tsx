// react
import { useEffect, useState } from "react"

// three
import { Box, CanvasContainer, TestCharacter } from "./components/three"

// webgl
import Unity, { UnityContext } from "react-unity-webgl"

// custom
import { Button, Layout } from "./components/ui"
import { ProductContainer, ProductGrid } from "./components/ui/productUI"
import { TestScene } from "./components/unityWebgl"

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
          <div className="absolute top-0 left-0 w-full h-full">
            <CanvasContainer>
              {/* <Box boxColor={boxColor} /> */}
              {/* <TestCharacter color={boxColor} /> */}
            </CanvasContainer>
          </div>
          <TestScene />
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
