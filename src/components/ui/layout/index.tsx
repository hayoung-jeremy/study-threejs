import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className='w-screen h-screen flex justify-center items-center'>
      {children}
    </main>
  )
}

export default Layout
