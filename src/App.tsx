// react
import { useRef, useState } from "react"

// three
import { Canvas } from "@react-three/fiber"

// custom
import { Button, Layout } from "./components/ui"
import { CardPreviewContainer, ProductGrid } from "./components/ui/productUI"
import {
  GltfModel,
  PFPCard,
  MagicMirror,
  HelperSettings,
} from "./components/three"
import { availableImgURL, availableColor } from "./data/availableData"
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from "@react-three/drei"
import { CameraHelper } from "three"

const App = () => {
  const [cardColor, setCardColor] = useState("#000")
  const [imgURL, setImgURL] = useState("img/about-bg-character-01.png")
  const [isTabSelected, setIsTabSelected] = useState(0)
  const [isColorSelected, setIsColorSelected] = useState(0)
  const [isImgSelected, setIsImgSelected] = useState(0)

  // const camera = useRef<THREE.PerspectiveCamera>()
  // useHelper(camera, CameraHelper)

  const tabMenu = [{ menuTitle: "3D model" }, { menuTitle: "character image" }]
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Canvas
        dpr={window.devicePixelRatio}
        className=" backdrop-blur-[4px] bg-[rgba(255,255,255,1)]"
      >
        <GltfModel
          scale={0.005}
          // enableZoom={false}
          position={[0, -0.02, 0]}
          rotation={[0, 0, 0]}
        />
        {/* settings */}
        {/* <PerspectiveCamera position={[0, Math.PI, 0]} /> */}
        {/* <ambientLight /> */}
        {/* <OrbitControls /> */}
        <ContactShadows
          far={10}
          width={1.5}
          height={1.2}
          blur={0.4}
          position={[0, 0, 0]}
        />
        {/* <gridHelper /> */}
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
