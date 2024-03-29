// react
import { Suspense, useEffect, useRef, useState } from "react"

// three
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import {
  Box,
  Center,
  ContactShadows,
  Environment,
  GradientTexture,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  softShadows,
  useHelper,
} from "@react-three/drei"
import { CameraHelper, PCFSoftShadowMap } from "three"

// custom
import { Button, Layout } from "./components/ui"
import { CardPreviewContainer, ProductGrid } from "./components/ui/productUI"
import {
  GltfModel,
  PFPCard,
  MagicMirror,
  HelperSettings,
  AvatarWithOutClothes,
  AvatarDress,
  AvatarHair,
  AvatarBoots,
  EditorCanvas,
  TestBoots,
  RenaultCar,
  AvatarContainer,
  TestCar,
} from "./components/three"
import { availableImgURL, availableColor } from "./data/availableData"
import { cls } from "./utils/utils"

const App = () => {
  const [toggleHair, setToggleHair] = useState(true)
  const [toggleDress, setToggleDress] = useState(true)
  const [toggleBoots, setToggleBoots] = useState(true)
  const [cameraLookAtIndex, setCameraLookAtIndex] = useState(0)

  const tabMenu = [{ menuTitle: "3D model" }, { menuTitle: "character image" }]

  return (
    <main
      className={cls(
        "w-screen h-screen grid grid-cols-[2fr_1fr]"
        // "bg-[url('img/bg_stage.jpg')] bg-[length:50%] bg-bottom bg-no-repeat"
      )}
    >
      {/* <EditorCanvas source="/char/avatar_clothes/textures/F_PRD_21FW_SH002_D_test.png" /> */}
      <div className="w-screen h-screen relative">
        <button
          onClick={() => setCameraLookAtIndex(2)}
          className="absolute top-[40px] right-[40px] bg-[rgba(0,0,0,0.6)] w-12 h-12 rounded-full hover:bg-[rgba(0,0,0,0.5)] z-[9999999999]"
        ></button>
        <Canvas
          camera={{ position: [0, -10, 80], fov: 50 }}
          dpr={[1, 2]}
          // frameloop="demand"
          // gl={{ toneMappingExposure: 0.4 }}
          shadows
          // onCreated={({ gl }) => {
          //   gl.shadowMap.enabled = true
          //   gl.shadowMap.type = THREE.PCFSoftShadowMap
          // }}
          // className={cls("backdrop-blur-[4px] bg-[#f9f9f9] relative", "bg-gradient-to-t from-[#ccc] via-[#eee] to-[#f9f9f9]")}
        >
          <Suspense fallback={null}>
            <AvatarContainer cameraLookAtIndex={cameraLookAtIndex} />

            {/* <RenaultCar position={[0, -1.9, 0]} /> */}
            {/* <TestCar
              scale={0.01}
              position={[-1.9, 0, 0]}
              rotation={[0, Math.PI / 2, 0]}
            /> */}

            {/* <Html position={[-1, 1.5, 0]}>
              <aside className="w-[380px] flex flex-col gap-2">
                <div
                  className={cls(
                    "cursor-pointer w-fit border backdrop-blur-sm text-[#333] bg-[rgba(255,255,255,0.4)] border-[rgba(0,0,0,0.2)] px-5 py-2 rounded-lg font-semibold transition-all select-none",
                    "hover:border-[#7144FF88] hover:bg-[#7144FF11]"
                  )}
                  onClick={() => setToggleHair(!toggleHair)}
                >
                  toggle hair
                </div>
                <div
                  className={cls(
                    "cursor-pointer w-fit border backdrop-blur-sm text-[#333] bg-[rgba(255,255,255,0.4)] border-[rgba(0,0,0,0.2)] px-5 py-2 rounded-lg font-semibold transition-all select-none",
                    "hover:border-[#7144FF88] hover:bg-[#7144FF11]"
                  )}
                  onClick={() => setToggleDress(!toggleDress)}
                >
                  toggle dress
                </div>
                <div
                  className={cls(
                    "cursor-pointer w-fit border backdrop-blur-sm text-[#333] bg-[rgba(255,255,255,0.4)] border-[rgba(0,0,0,0.2)] px-5 py-2 rounded-lg font-semibold transition-all select-none",
                    "hover:border-[#7144FF88] hover:bg-[#7144FF11]"
                  )}
                  onClick={() => setToggleBoots(!toggleBoots)}
                >
                  toggle boots
                </div>
              </aside>
            </Html> */}

            {/* <ambientLight intensity={0.1} />
          <directionalLight intensity={0.5} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} /> */}
            {/* <Box castShadow receiveShadow position={[0, 0.5, 0]}>
            <meshStandardMaterial attach="material" color="white" />
          </Box> */}
            <Plane
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0, 0]}
              args={[1000, 1000]}
            >
              <meshStandardMaterial
                attach="material"
                color="#333"
                transparent
                opacity={0.6}
              />
            </Plane>
            <fog attach="fog" args={["white", 0, 1000]} />
            {/* <ContactShadows
              far={3}
              scale={10}
              width={1.5}
              height={1.2}
              opacity={0.6}
              blur={0.8}
              position={[0, -1.89, 0]}
              // receiveShadow
            /> */}

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
              opacity={1}
            />

            {/* settings */}
            {/* <PerspectiveCamera position={[0, Math.PI, 0]} /> */}
            {/* <ambientLight /> */}
            {/* <OrbitControls /> */}
            {/* <gridHelper /> */}
          </Suspense>
          <HelperSettings />
        </Canvas>
      </div>
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
