'use client'
import React from 'react'
import HeaderLogo from './HeaderLogo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {AiOutlineMenu} from 'react-icons/ai' 
import useScrollTop from '../../../hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import { ModeToggle } from '../ui/ThemeSwitcher'

function Header() {


  return (
    <div className='flex justify-between items-center p-4'>

        <div className="flex items-center">
        <HeaderLogo />
        <h6 className='text-lg font-bold'>IdeaScript</h6>
        </div>

        <div className="gap-4 hidden sm:flex">
            <Link href={'/login'}><Button variant="ghost">Login</Button></Link>
            <Link href={'/signup'}><Button variant="default">Get IdeaScript free</Button></Link>
            <ModeToggle/>
        </div>

    <div className=" sm:hidden ">

    <Sheet key={"bottom"}>
  <SheetTrigger><AiOutlineMenu /></SheetTrigger>
  <SheetContent side={"bottom"}>
    <SheetHeader>
      {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle> */}
      <SheetDescription className='flex-col flex w-full gap-2'>
      <Link href={'/login'}><Button variant="ghost" className='w-full'>Login</Button></Link>
            <Link href={'/signup'}><Button className='w-full' variant="default">Get IdeaScript free</Button></Link>
            <ModeToggle/>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>


    </div>
  )
}

export default Header