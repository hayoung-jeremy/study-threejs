import React from "react"
import { cls } from "../../../utils/utils"

interface Props {
  children: React.ReactNode
  isSelected?: any
  index?: number
  onClick?: () => void
}

const Button = ({ index, isSelected, children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cls(
        "py-2 px-5 cursor-pointer  backdrop-blur-md w-fit rounded hover:bg-[rgba(255,255,255,.4)] transition-all duration-200 text-[rgba(255,255,255,.8)] font-semibold",
        isSelected == index
          ? "bg-[rgba(255,255,255,.5)]"
          : "bg-[rgba(255,255,255,.2)]"
      )}
    >
      {children}
    </div>
  )
}

export default Button
