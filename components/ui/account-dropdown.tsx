"use client";
import React, { useEffect, useState } from "react";
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
import { userDetail } from "@/services/userService";

const AccountDropdown = ({
  user,
  className,
}: UserSession & { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState()

  const getUserId = async (email:string) => {
    try {
      const response = await userDetail(email)
      setUserId(response.id)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUserId(user.email)
  },[])

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <div onClick={handleOpen}>
            <Image
              src={user.image}
              alt="User Image"
              width={50}
              height={50}
              className={twMerge(
                "hidden md:block md:size-7 lg:size-10 rounded-full",
                className
              )}
              unoptimized={true}
            />
          </div>
        </DropdownTrigger>
        <DropdownMenu
          onAction={() => setIsOpen(false)}
          className="hidden md:block bg-black text-white font-medium rounded-br-lg rounded-bl-xl transition shadow-[0_0_10px_5px_rgba(0,208,255,0.2)]"
        >
          <DropdownItem key="settings" className="hover:text-darkblue">
            <Link href={`/cart/${userId}`}>Your Cart</Link>
          </DropdownItem>
          <DropdownItem
            key="logout"
            className="text-red-500"
            onPress={() => logout()}
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default AccountDropdown;
