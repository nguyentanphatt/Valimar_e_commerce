"use client";
import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Account from "@/public/assets/icon/account.svg";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Banner from "@/components/common/Banner";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";


export default function Home() {
  

  return (
    <div>
      <div className="md:flex md:items-center md:justify-center md:gap-14 lg:gap-24 md:py-5">
        <Header />
        <Navbar />
        <Image
          src={Account}
          alt="acc"
          className="sm:hidden md:flex lg:size-10"
        />
      </div>
      <div className="flex flex-col items-center gap-10 lg:py-10">
        <p className="text-white font-bold text-xl md:text-3xl lg:text-5xl text-center py-2 max-w-60 md:max-w-96 lg:max-w-[580px]">
          Discovery new game and get{" "}
          <span className="text-darkblue">special discount</span>
        </p>
        <div className="md:flex flex-row gap-2 w-full px-28 lg:px-36 hidden">
          <SearchBar className="hidden md:flex w-full px-3 lg:py-1.5"/>
          <Button size="md" text="Search" className="lg:w-28 lg:h-10 lg:text-lg"/>
        </div>
        <p className="text-white font-bold text-3xl lg:text-5xl hidden md:flex">BEST FOR YOU</p>
      </div>
      <Banner />
      <p className="text-white">hello</p>
    </div>
  );
}
