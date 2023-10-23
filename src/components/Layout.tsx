 import React, {ReactNode}from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className='max-w-7xl ms-auto me-auto px-4 lg:px-0'>
        {children}
    </div>
  )
}

export default Layout