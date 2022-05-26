// react
import { Suspense, useRef, useState } from "react"

// three
import { Canvas } from "@react-three/fiber"
import {
  Center,
  ContactShadows,
  Environment,
  GradientTexture,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei"
import { CameraHelper } from "three"

// custom
import { Button, Layout } from "./components/ui"
import { CardPreviewContainer, ProductGrid } from "./components/ui/productUI"
import { GltfModel, PFPCard, MagicMirror, HelperSettings, AvatarOnClothes, Dress } from "./components/three"
import { availableImgURL, availableColor } from "./data/availableData"
import { cls } from "./utils/utils"

const App = () => {
  const [cardColor, setCardColor] = useState("#000")
  const [imgURL, setImgURL] = useState("img/about-bg-character-01.png")
  const [isTabSelected, setIsTabSelected] = useState(0)
  const [isColorSelected, setIsColorSelected] = useState(0)
  const [isImgSelected, setIsImgSelected] = useState(0)

  const [isClicked, setIsClicked] = useState(true)

  // const camera = useRef<THREE.PerspectiveCamera>()
  // useHelper(camera, CameraHelper)

  const tabMenu = [{ menuTitle: "3D model" }, { menuTitle: "character image" }]
  return (
    <main
      className={cls(
        "w-screen h-screen flex justify-center items-center"
        // "bg-[url('img/bg_stage.jpg')] bg-[length:50%] bg-bottom bg-no-repeat"
      )}
    >
      <Canvas
        // gl={{ toneMappingExposure: 0.4 }}
        className={cls(
          // "backdrop-blur-[4px] bg-[#f9f9f9] relative",
          "bg-gradient-to-t from-[#ccc] via-[#eee] to-[#f9f9f9]"
        )}
      >
        <Suspense fallback={null}>
          {/* <GltfModel
            scale={0.02}
            // enableZoom={false}
            position={[2, -2, 0]}
            rotation={[0, 0, 0]}
          /> */}

          <AvatarOnClothes
            scale={0.02}
            // enableZoom={false}
            position={[0, -1.86, 0]}
            rotation={[0, 0, 0]}
          />
          {isClicked && (
            <Dress
              scale={0.02}
              // enableZoom={false}
              position={[0, -1.86, 0]}
              rotation={[0, 0, 0]}
            />
          )}
          <Html position={[1, 1.5, 0]}>
            <aside className="w-[380px]">
              <div
                className={cls(
                  "cursor-pointer w-fit border backdrop-blur-sm text-[#333] bg-[rgba(255,255,255,0.4)] border-[rgba(0,0,0,0.2)] px-5 py-2 rounded-lg font-semibold transition-all select-none",
                  "hover:border-[#7144FF88] hover:bg-[#7144FF11]"
                )}
                onClick={() => setIsClicked(!isClicked)}
              >
                {/* <a href="https://www.fendi.com/kr-ko/fendace">see collection</a> */}
                {isClicked ? "take off" : "put on"}
              </div>
            </aside>
          </Html>

          <ContactShadows far={5} scale={10} width={1.5} height={1.2} opacity={0.8} blur={0.6} position={[0, -1.9, 0]} />
          <mesh scale={[2, 3, 1]} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <planeGeometry args={[20, 20]} />

            <MeshReflectorMaterial
              metalness={0.5}
              roughness={1}
              blur={[300, 100]} // Blur ground reflections (width, heigt), 0 skips blur
              mixBlur={0.9} // How much blur mixes with surface roughness (default = 1)
              mixStrength={20} // Strength of the reflections
              mixContrast={1} // Contrast of the reflections
              resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
              mirror={0.2} // Mirror environment, 0 = texture colors, 1 = pick up env colors
              depthScale={0.2} // Scale the depth factor (0 = no depth, default = 0)
              minDepthThreshold={0.2} // Lower edge for the depthTexture interpolation (default = 0)
              maxDepthThreshold={5.2} // Upper edge for the depthTexture interpolation (default = 0)
              depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
              distortion={0.2} // Amount of distortion based on the distortionMap texture
              reflectorOffset={0.01} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
              color="#555"
              transparent
              opacity={0.02}
            />
          </mesh>
          {/* settings */}
          {/* <PerspectiveCamera position={[0, Math.PI, 0]} /> */}
          {/* <ambientLight /> */}
          {/* <OrbitControls /> */}
          {/* <gridHelper /> */}
        </Suspense>
        <HelperSettings />
      </Canvas>
    </main>
    // <Layout>
    //   <ProductGrid>
    //     <CardPreviewContainer>
    //       <Canvas
    //         dpr={window.devicePixelRatio}
    //         className=" backdrop-blur-[4px] bg-[rgba(255,255,255,.05)]"
    //       >
    //         <HelperSettings />
    //         {isTabSelected === 0 && (
    //           <MagicMirror>
    //             {/* <ambientLight position={[0, 0, 0]} intensity={1} />
    //               <pointLight position={[20, 30, 10]} /> */}
    //             <HelperSettings />
    //             <GltfModel scale={1} enableZoom={false} position={[0, 0, -2]} />
    //           </MagicMirror>
    //         )}
    //         {isTabSelected === 1 && (
    //           <PFPCard imgURL={imgURL} color={cardColor} />
    //         )}
    //       </Canvas>
    //     </CardPreviewContainer>
    //     <article className="flex flex-col gap-4 px-5 py-5">
    //       <div className="flex gap-3 border-b border-b-[rgba(255,255,255,0.2)] pb-6">
    //         {tabMenu.map((item, index) => {
    //           return (
    //             <Button
    //               key={index}
    //               onClick={() => setIsTabSelected(index)}
    //               isSelected={isTabSelected}
    //               index={index}
    //             >
    //               {item.menuTitle}
    //             </Button>
    //           )
    //         })}
    //       </div>
    //       <div className="flex flex-col gap-3">
    //         <p className="text-3xl font-bold">
    //           <span className="text-[rgba(255,255,255,.4)]">Product : </span>
    //           <span className="text-[rgba(255,255,255,.8)]">Demo</span>
    //         </p>
    //         <p className="text-3xl font-bold">
    //           <span className="text-[rgba(255,255,255,.4)]">Content : </span>
    //           <span className="text-[rgba(255,255,255,.8)]">
    //             {tabMenu[isTabSelected].menuTitle}
    //           </span>
    //         </p>
    //       </div>
    //       {isTabSelected === 1 && (
    //         <aside className="grid grid-cols-2">
    //           <div className="flex flex-col items-start gap-3">
    //             <span className="font-semibold text-[rgba(255,255,255,.4)]">
    //               colors :
    //             </span>
    //             {availableColor.map((item, index) => {
    //               return (
    //                 <Button
    //                   key={index}
    //                   onClick={() => {
    //                     return (
    //                       setIsColorSelected(index), setCardColor(item.hexValue)
    //                     )
    //                   }}
    //                   isSelected={isColorSelected}
    //                   index={index}
    //                 >
    //                   {item.colorTheme}
    //                 </Button>
    //               )
    //             })}
    //           </div>
    //           <div className="flex flex-col items-start gap-3">
    //             <span className="font-semibold text-[rgba(255,255,255,.4)]">
    //               images :
    //             </span>
    //             {availableImgURL.map((item, index) => {
    //               return (
    //                 <Button
    //                   key={index}
    //                   onClick={() => {
    //                     return setIsImgSelected(index), setImgURL(item.imgURL)
    //                   }}
    //                   isSelected={isImgSelected}
    //                   index={index}
    //                 >
    //                   {item.imgName}
    //                 </Button>
    //               )
    //             })}
    //           </div>
    //         </aside>
    //       )}
    //     </article>
    //   </ProductGrid>
    // </Layout>
  )
}

export default App
