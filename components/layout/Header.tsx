"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "../ui/search-bar";
import { logo } from "@/constant/image";
import Navbar from "../common/Navbar";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Suspense>
      <div className="py-2 flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2">
        <div className="flex flex-row items-center justify-center gap-5">
          <div className="">
            <Image
              src={logo}
              alt="Logo"
              width={200}
              className="w-[100px] h-[50px] md:w-[200px] lg:w-[300px]"
            />
          </div>
          <h1 className="text-white font-bold text-xl md:text-2xl lg:text-4xl">
            VALIMAR
          </h1>
        </div>
        <Navbar />
        <div className="flex md:hidden items-center justify-center py-2 z-40">
          <SearchBar className="w-[300px]" />
        </div>
      </div>
    </Suspense>
  );
};

export default Header;
