"use server"
import { CartIcon, HomeIcon, NotificationIcon } from '@/constant/image'
import Link from 'next/link'
import React from 'react'
import AccountSection from '../ui/account-section'
import { auth } from '@/lib/auth'

const PhoneNavbar = async() => {
    const session = await auth();
  return (
    <div>
        <div className="fixed md:hidden bottom-0 left-0 right-0 bg-dark/60 translate-x-0 z-50 py-3 backdrop-blur">
        <ul className="flex justify-evenly">
          <li>
            <Link href="/" className="flex flex-col">
              <HomeIcon  className="size-7"/>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex flex-col">
              <NotificationIcon  className="size-7"/>
            </Link>
          </li>
          <li>
            <Link href={`/cart/${session?.user?.id}`} className="flex flex-col">
              <CartIcon  className="size-7"/>
            </Link>
          </li>
          <li>
            <AccountSection className='block size-7 md:hidden'/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PhoneNavbar