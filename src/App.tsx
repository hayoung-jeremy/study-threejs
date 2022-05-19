// react
import { Center, OrbitControls, Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState } from "react"

// three
import { GltfModel, PFPCard, MagicMirror } from "./components/three"

// custom
import { Button, Layout } from "./components/ui"
import { ProductContainer, ProductGrid } from "./components/ui/productUI"
import { availableImgURL, availableColor } from "./data/availableData"

const App = () => {
  const [cardColor, setCardColor] = useState("#000")
  const [imgURL, setImgURL] = useState("img/about-bg-character-01.png")
  const [isTabSelected, setIsTabSelected] = useState(0)
  const [isColorSelected, setIsColorSelected] = useState(0)
  const [isImgSelected, setIsImgSelected] = useState(0)

  const tabMenu = [{ menuTitle: "3D model" }, { menuTitle: "character image" }]
  return (
    <Layout>
      <ProductGrid>
        <ProductContainer>
          <Canvas
            dpr={window.devicePixelRatio}
            className=" backdrop-blur-[4px] bg-[rgba(255,255,255,.05)]"
          >
            <ambientLight position={[0, 0, 0]} intensity={1} />
            <pointLight position={[20, 30, 10]} />
            {isTabSelected === 0 && (
              <MagicMirror>
                <ambientLight position={[0, 0, 0]} intensity={1} />
                <pointLight position={[20, 30, 10]} />
                <GltfModel scale={1} enableZoom={false} position={[0, 0, -2]} />
              </MagicMirror>
            )}
            {isTabSelected === 1 && (
              <PFPCard imgURL={imgURL} color={cardColor} />
            )}
            <OrbitControls enableZoom={false} />
            <Stats />
            {/* <axesHelper />
            <gridHelper /> */}
          </Canvas>
        </ProductContainer>
        <article className="flex flex-col gap-4 px-5 py-5">
          <div className="flex gap-3 border-b border-b-[rgba(255,255,255,0.2)] pb-6">
            {tabMenu.map((item, index) => {
              return (
                <Button
                  onClick={() => setIsTabSelected(index)}
                  isSelected={isTabSelected}
                  index={index}
                >
                  {item.menuTitle}
                </Button>
              )
            })}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold">
              <span className="text-[rgba(255,255,255,.4)]">Product : </span>
              <span className="text-[rgba(255,255,255,.8)]">Demo</span>
            </p>
            <p className="text-3xl font-bold">
              <span className="text-[rgba(255,255,255,.4)]">Content : </span>
              <span className="text-[rgba(255,255,255,.8)]">
                {tabMenu[isTabSelected].menuTitle}
              </span>
            </p>
          </div>
          {isTabSelected === 1 && (
            <aside className="grid grid-cols-2">
              <div className="flex flex-col items-start gap-3">
                <span className="font-semibold text-[rgba(255,255,255,.4)]">
                  colors :
                </span>
                {availableColor.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => {
                        return (
                          setIsColorSelected(index), setCardColor(item.hexValue)
                        )
                      }}
                      isSelected={isColorSelected}
                      index={index}
                    >
                      {item.colorTheme}
                    </Button>
                  )
                })}
              </div>
              <div className="flex flex-col items-start gap-3">
                <span className="font-semibold text-[rgba(255,255,255,.4)]">
                  images :
                </span>
                {availableImgURL.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => {
                        return setIsImgSelected(index), setImgURL(item.imgURL)
                      }}
                      isSelected={isImgSelected}
                      index={index}
                    >
                      {item.imgName}
                    </Button>
                  )
                })}
              </div>
            </aside>
          )}
        </article>
      </ProductGrid>
    </Layout>
  )
}

export default App
