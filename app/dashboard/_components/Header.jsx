"use client"

import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <img src={'/logo.svg'} alt="Logo" width={100} height={120} />
        <ul className=' hidden md:flex gap-6'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'}&& 'text-primary font-bold'`}>Dashbord</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/quetions'}&& 'text-primary font-bold'`}>Quetions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade'}&& 'text-primary font-bold'`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how'}&& 'text-primary font-bold'`}>How it Works</li>  
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header