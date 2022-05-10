import React from "react"

interface Props {
  children: React.ReactNode | any
}

const ProductContainer = ({ children }: Props) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-transparent relative">
      {children}
    </div>
  )
}

export default ProductContainer
