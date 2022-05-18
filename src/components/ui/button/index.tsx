import React from "react"

interface Props {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="py-2 px-5 cursor-pointer bg-[rgba(255,255,255,.2)] backdrop-blur-sm w-fit rounded hover:bg-[rgba(255,255,255,.4)] transition-all duration-200 text-[rgba(255,255,255,.8)] font-semibold"
    >
      {children}
    </div>
  )
}

export default Button
