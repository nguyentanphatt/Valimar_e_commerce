"use server";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import AccountDropdown from "./account-dropdown";
import { userImage } from "@/constant/image";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faUser} className={twMerge("hidden md:block md:size-7 text-white",className)} />
      </Link>
    </div>
  );
};

export default AccountSection;
