"use client"
import { FacebookIcon } from '@/constant/image'
import { facebookLogin } from '@/lib/actions/auth'
import React from 'react'

const FacebookSignInButton = () => {
  return (
    <div
            onClick={() => facebookLogin()}
            className="size-10 bg-[#1877F2] flex items-center justify-center md:justify-start md:p-3 rounded-lg md:w-full md:h-10 lg:h-12 hover:bg-[#1877F2]/80"
          >
            <FacebookIcon className="size-5 md:size-8 md:mr-2 rounded-full " />
            <p className="hidden md:block text-white text-base lg:text-lg">
              Continue with facebook
            </p>
          </div>
  )
}

export default FacebookSignInButton