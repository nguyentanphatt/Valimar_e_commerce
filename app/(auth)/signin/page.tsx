"use server";
import { SignInButton } from "@/components/ui/SignInButton";
import { SignOutButton } from "@/components/ui/SignOutButton";
import { LoginForm } from "@/components/ui/LoginForm";
import { auth, signIn } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { signinImg, signinImgLg } from "@/constant/image";

const page = async () => {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <Link href="/userinfo">User Info</Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <div className=" ">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center max-h-screen py-2">
      <div className="relative w-[80%] h-[300px] md:w-1/2 md:h-screen">
        <Image src={signinImg} alt="SignIn" layout="fill" className="rounded md:hidden" />
        <Image src={signinImgLg} alt="SignIn" layout="fill" className="rounded hidden md:block" />
      </div>
      <div className="flex flex-col items-center justify-center md:w-1/2">
        <h1 className="hidden md:block text-2xl lg:text-4xl uppercase text-darkblue font-bold">valimar</h1>
        <h1 className="text-darkblue uppercase text-base md:text-lg lg:text-xl font-semibold mt-4">
          Find out the world of game
        </h1>
        <p className="text-white/50 text-sm md:text-base lg:text-lg">
          Welcome back! Please login to your account
        </p>
        <div className="w-full px-10 xl:px-[20%]">
          <LoginForm />
        </div>
      </div>
    </div>
    </div>
  );
};

export default page;
