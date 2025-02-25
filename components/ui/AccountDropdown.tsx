"use client";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Image from "next/image";
import { UserSession } from "@/constant/type";
import { logout } from "@/lib/actions/auth";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const AccountDropdown = ({ user, className }: UserSession & {className?:string}) => {
  const [isOpen, setIsOpen] = useState(false);
const handleOpen = () => {
    setIsOpen(!isOpen)
}

  return (
    <div>
      <Dropdown
      >
        <DropdownTrigger>
          <div
            onClick={handleOpen}
          >
            <Image
              src={user.image}
              alt="User Image"
              width={50}
              height={50}
              className={twMerge("hidden md:block md:size-7 lg:size-10 rounded-full", className)}
              unoptimized={true}
            />
          </div>
        </DropdownTrigger>
        <DropdownMenu
        onAction={() => setIsOpen(false)}
        className="hidden md:block bg-black text-white font-medium rounded-br-lg rounded-bl-xl transition shadow-[0_0_10px_5px_rgba(0,208,255,0.2)]"
        >
          <DropdownItem key="profile" className="hover:text-darkblue">Profile</DropdownItem>
          <DropdownItem key="settings" className="hover:text-darkblue"><Link href={`/cart/${user.id}`}>Your Cart</Link></DropdownItem>
          <DropdownItem key="cart" className="hover:text-darkblue" >Settings</DropdownItem>
          <DropdownItem key="logout" className="text-red-500" onPress={() => logout()}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default AccountDropdown;
