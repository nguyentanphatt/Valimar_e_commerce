"use server";
import { AccountIcon } from "@/constant/image";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import AccountDropdown from "./AccountDropdown";
import { userImage } from "@/constant/image";
import { twMerge } from "tailwind-merge";

const AccountSection = async ({className} : {className?:string}) => {
  const session = await auth();
  console.log(session);

  

  if (session?.user) {
    return (
      <div>
        <AccountDropdown 
          user={{
            ...session.user,
            name: session.user.name || "Unknown",
            email: session.user.email || "Unknown",
            image: session.user.image && session.user.image !== "" 
            ? session.user.image 
            : userImage,
            id: session.user.id ? parseInt(session.user.id, 10) : 0
          }} 
          expires={session.expires}
          className={className}
        />
      </div>
    );
  }

  return (
    <div>
      <Link href={"/signin"}>
        <AccountIcon className={twMerge("hidden md:block md:size-7 lg:size-10 rounded-full",className)} />
      </Link>
    </div>
  );
};

export default AccountSection;
