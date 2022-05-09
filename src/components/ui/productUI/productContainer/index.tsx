import React from 'react'

interface Props {
  children: React.ReactNode | any
}

const ProductContainer = ({ children }: Props) => {
  return (
    <div className='rounded-2xl overflow-hidden bg-slate-100'>{children}</div>
  )
}

export default ProductContainer
