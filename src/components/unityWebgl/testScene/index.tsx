import { useEffect, useState } from "react"
import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
  loaderUrl: "build/test.loader.js",
  dataUrl: "build/test.data",
  frameworkUrl: "build/test.framework.js",
  codeUrl: "build/test.wasm",
})

const TestScene = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (unityContext) {
      setIsLoading(false)
    }
  }, [])
  return (
    <>
      {!isLoading && (
        <Unity
          unityContext={unityContext}
          className="w-full h-full border-pink-100"
        />
      )}
    </>
  )
}

export default TestScene
