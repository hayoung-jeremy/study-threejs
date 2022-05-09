import { useEffect, useState } from 'react'
import Unity, { UnityContext } from 'react-unity-webgl'

const unityContext = new UnityContext({
  loaderUrl: 'Build/Downloads.loader.js',
  dataUrl: 'Build/Downloads.data',
  frameworkUrl: 'Build/Downloads.framework.js',
  codeUrl: 'Build/Downloads.wasm',
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
          className='w-full h-full border-pink-100'
        />
      )}
    </>
  )
}

export default TestScene
