'use client'

import React from 'react'
import * as logo from '../../../../public/assets/LandingHero.json'
import Lottie from 'lottie-react'
function Heros() {
  return (
    <div>
        <Lottie className='max-w-3xl sm:-mt-24' animationData={logo} />
    </div>
  )
}

export default Heros