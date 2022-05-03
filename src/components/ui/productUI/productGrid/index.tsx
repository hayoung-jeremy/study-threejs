import React from 'react'
import Button from '../../button'

interface Props {
  children: React.ReactNode
}

const ProductGrid = ({ children }: Props) => {
  return (
    <div className='w-1/2 h-1/2 grid grid-cols-2'>
      {children}
      
    </div>
  )
}

export default ProductGrid
