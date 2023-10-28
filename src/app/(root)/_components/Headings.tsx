import { Button } from '@/components/ui/button'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Headings() {
  return (
    <div className='max-w-3xl space-y-4 mt-10'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
            Your Ideas, Documents, & Plans. Unified. Welcom to <span className='underline'>IdeaScript</span>
        </h1>
        <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
            IdeaScript is the connected workespace where <br /> better, faster work happens.
        </h3>
    <Button variant={'default'}>
        Enter IdeaScript 
        <span className='ms-2 mt-1'>
        <AiOutlineArrowRight size="20px" />
        </span>
        </Button>
    </div>
  )
}

export default Headings