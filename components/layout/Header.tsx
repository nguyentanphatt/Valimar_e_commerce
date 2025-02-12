import React from 'react'
import Image from "next/image";
import SearchBar from '../ui/SearchBar';
import { logo } from '@/constant/image';
const Header = () => {
  return (
   <div className='py-2'>
    <div className='flex flex-row items-center justify-center gap-5'>
       <div className=''>
            <Image src={logo} alt='Logo' width={100} className=''/>
       </div>
        <h1 className='text-white font-bold text-xl md:text-2xl lg:text-4xl'>VALIMAR</h1>
    </div>
    <div className='flex md:hidden items-center justify-center py-2 z-40'>
      <SearchBar className='w-[300px]'/>
    </div>
   </div>
  )
}

export default Header