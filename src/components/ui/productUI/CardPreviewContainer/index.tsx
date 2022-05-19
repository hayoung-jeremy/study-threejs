import React from "react"

interface Props {
  children: React.ReactNode | any
}

const CardPreviewContainer = ({ children }: Props) => {
  return (
    <div className="box-border border border-[rgba(255,255,255,.3)] rounded-2xl overflow-hidden bg-transparent relative shadow-lg">
      {children}
    </div>
  )
}

export default CardPreviewContainer
