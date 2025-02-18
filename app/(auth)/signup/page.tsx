
import { SignupForm } from "@/components/ui/SignupForm";
import {signupImg, signupImgLg } from "@/constant/image";
import Image from "next/image";
import React from "react";

const page = async() => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-center max-h-screen py-2">
        <div className="relative md:w-1/2 md:h-screen">
          <Image
            src={signupImg}
            alt="SignIn"
            className="rounded md:hidden w-[300px] h-[150px]"
          />
          <Image
            src={signupImgLg}
            alt="SignIn"
            layout="fill"
            className="rounded hidden md:block"
          />
        </div>
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <h1 className="hidden md:block text-2xl lg:text-4xl uppercase text-darkblue font-bold">
            valimar
          </h1>
          <h1 className="text-darkblue uppercase text-base md:text-lg lg:text-xl font-semibold mt-4 md:mt-2 lg:mt-4">
          DIVE INTO THE WORLD
          </h1>
          <p className="text-white/50 text-sm md:text-base lg:text-lg">
          Sign up now and gain access to all the content
          </p>
          <div className="w-full px-10 xl:px-[15%]">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
