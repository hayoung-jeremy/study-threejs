import React from 'react'

interface Props {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className='py-2 px-5 cursor-pointer bg-slate-100 w-fit rounded hover:bg-slate-200 transition-all duration-200 text-[#333] font-semibold'
    >
      {children}
    </div>
  )
}

export default Button
