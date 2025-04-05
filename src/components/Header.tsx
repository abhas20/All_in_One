"use client"
import Link from 'next/link';
import React, { useState } from 'react'

import { TfiAngleDoubleDown } from "react-icons/tfi";

import { ModeToggle } from './ui/DarkMode';
 
export default function Header() {

    const [isLogin, setIsLogin] = useState(false);
    const [show,setShow]=useState(false);
    const handleButtonToggle=()=>{
        setShow(!show);
        console.log("clicked")
      }

  return (
    <div className='mx-auto row-auto bg-background text-muted-foreground border border-orange-200'>
          <div className='container h-20 m-auto grid items-center grid-cols-3 '>
          <h1 className='text-3xl tracking-widest p-2 font-[Rog] col-span-3 '>ALL <span className='text-yellow-300'>IN</span> ONE</h1>
          <ul className={' justify-evenly col-end-5 [&_li]:p-2.5 sm:flex hidden'}>
            <Link href="/"><li className='hover:underline underline-offset-2 hover:text-amber-500 '>Notes</li></Link>
            <Link href="/about"><li className='hover:underline underline-offset-2 hover:text-amber-500 '>About</li></Link>
            <Link href="/search"><li className='hover:underline underline-offset-2 hover:text-amber-500 '>Search</li></Link>
            <Link href="/songs"><li className='hover:underline underline-offset-2 hover:text-amber-500 '>Songs</li></Link>
            <li><ModeToggle/></li>
          </ul>
          <div className='absolute top-4 right-0 p-2 sm:hidden'>
            <button className='border border-white p-2 rounded-2xl' onClick={handleButtonToggle}>
            <TfiAngleDoubleDown />
            </button>
          </div>
          {show && <div className='absolute top-20 right-0 w-full text-center  p-2 sm:hidden'>
            <ul className='bg-background text-shadow-muted-foreground p-2.5 shadow shadow-amber-300 [&_li]:p-2.5'>
            <Link href="/"><li className='hover:underline underline-offset-2 hover:text-amber-500 '>Home</li></Link>
            <Link href="/about"><li className='hover:underline underline-offset-2 hover:text-amber-500 '>About</li></Link>
            <Link href="/search"><li className='hover:underline underline-offset-2 hover:text-amber-500 '>Search</li></Link>
            <Link href="/songs"><li className='hover:underline underline-offset-2 hover:text-amber-500 '>Songs</li></Link>
            <li><ModeToggle/></li>
          </ul>
          </div>
            }
          </div>
          
        </div>
  )
}
