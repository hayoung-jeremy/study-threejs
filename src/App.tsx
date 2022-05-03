import { useState } from 'react'
import { Box, CanvasContainer } from './components/three'
import { Button, Layout } from './components/ui'
import { ProductContainer, ProductGrid } from './components/ui/productUI'

const App = () => {
  const [boxColor, setBoxColor] = useState('#ccc')

  return (
    <Layout>
      <ProductGrid>
        <ProductContainer>
          <CanvasContainer>
            <Box boxColor={boxColor} />
          </CanvasContainer>
        </ProductContainer>
        <article>
          <p>Product name : Box</p>
          <p>Price : $</p>
          <Button onClick={() => setBoxColor('red')}>change color</Button>
        </article>
      </ProductGrid>
    </Layout>
  )
}

export default App
