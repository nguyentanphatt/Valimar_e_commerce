import React from 'react'
import Image from "next/image";
import logo from '@/public/assets/image/logo_1.png'
import SearchBar from '../ui/SearchBar';
const Header = () => {
  return (
   <div className='py-2'>
    <div className='flex flex-row items-center justify-center gap-5'>
       <div className=''>
            <Image src={logo} alt='Logo' width={100} className=''/>
       </div>
        <h1 className='text-white font-bold text-xl md:text-2xl lg:text-4xl'>VALIMAR</h1>
    </div>
    <SearchBar className='mx-12 mt-3 md:hidden'/>
   </div>
  )
}

export default Header