import React from 'react'

const Test = () => {
    const { camera, invalidate, size, controls: controlsImpl } = useThree()
camera.position.copy(goal.camera)
...
          camera.lookAt(goal.focus)
          if (controls) {
            controls.target.copy(goal.focus)
            controls.update()
          }
        }
        if (onFitRef.current) onFitRef.current(this.getSize())
        invalidate()
        return this
      },
    }
  }, [box, camera, controls, margin, damping, invalidate])

  React.useLayoutEffect(() => {
    if (controls) {
      // Try to prevent drag hijacking
      const callback = () => (current.animating = false)
      controls.addEventListener('start', callback)
      return () => controls.removeEventListener('start', callback)
    }
  }, [controls])

  return (
    <div>Test</div>
  )
}

export default Test