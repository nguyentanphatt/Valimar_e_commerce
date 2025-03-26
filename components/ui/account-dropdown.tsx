"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { UserSession } from "@/constant/type";
import { logout } from "@/lib/actions/auth";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { userDetail } from "@/services/userService";

const AccountDropdown = ({ user, className }: UserSession & { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const response = await userDetail(user.email);
        setUserId(response.id);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };
    getUserId();
  }, [user.email]);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTimeout(() => setIsOpen(false), 150);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <Image
          src={user.image}
          alt="User Image"
          width={50}
          height={50}
          className={twMerge("hidden md:block md:size-7 lg:size-10 rounded-full", className)}
          unoptimized={true}
        />
      </div>
      {isOpen && (
        <div className="absolute bottom-12 md:-bottom-24 right-0 mt-2 w-48 bg-black text-white font-medium rounded-lg z-50 shadow-[0_0_10px_5px_rgba(0,208,255,0.5)]">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-800">
              <Link href={`/cart/${userId}`} onClick={() => setIsOpen(false)}>Your Cart</Link>
            </li>
            <li className="px-4 py-2 text-red-500 hover:bg-gray-800 cursor-pointer" onClick={() => { logout(); setIsOpen(false); }}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
