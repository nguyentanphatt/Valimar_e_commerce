"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Account from "@/public/assets/icon/account.svg";
import { motion, useAnimate } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Banner from "@/components/common/Banner";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import per5_header from "@/public/assets/image/per5_header.jpg";
import per3_header from "@/public/assets/image/per3_header.png";
import per3_banner from "@/public/assets/image/per3.jpg";
import hollow_banner from "@/public/assets/image/hollow.jpg";
import star from "@/public/assets/icon/star.svg";
import AdvertismentBanner from "@/components/common/AdvertismentBanner";
import Label from "@/components/ui/Label";

export default function Home() {
  const [leftImage, leftAnimate] = useAnimate();
  const [rightImage, rightAnimate] = useAnimate();

  useEffect(() => {
    leftAnimate([
      [leftImage.current, { opacity: 1 }, { duration: 0.5 }],
      [leftImage.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    rightAnimate([
      [rightImage.current, { opacity: 1 }, { duration: 0.5 }],
      [rightImage.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
  });

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
      <div className="relative flex flex-col items-center gap-10 lg:py-10 md:overflow-x-hidden">
        <p className="z-20 text-white font-bold text-xl md:text-3xl lg:text-5xl text-center py-2 max-w-60 md:max-w-96 lg:max-w-[580px]">
          Discovery new game and get{" "}
          <span className="text-darkblue">special discount</span>
        </p>
        <div className="md:flex flex-row gap-2 w-full px-28 lg:px-36 hidden z-20">
          <SearchBar className="hidden md:flex w-full px-3 lg:py-1.5 md:backdrop-blur-lg" />
          <Button
            size="md"
            text="Search"
            className="lg:w-28 lg:h-10 lg:text-lg"
          />
        </div>
        <Label title="Best for you"/>
        <motion.div
          className="absolute hidden md:flex md:w-[300px] md:h-[150px] lg:w-[500px] lg:h-[300px] md:-left-1 lg:-left-20 md:top-14 lg:top-5 opacity-50 z-10"
          ref={leftImage}
          initial={{ opacity: 0, y: 50, x: -50 }}
        >
          <Image src={per5_header} fill alt="per5" />
        </motion.div>
        <motion.div
          className="absolute hidden md:flex md:w-[300px] md:h-[150px] lg:w-[500px] lg:h-[300px] md:right-0 lg:-right-12 md:top-1 lg:top-0 opacity-50 z-10"
          ref={rightImage}
          initial={{ opacity: 0, y: -50, x: 50 }}
        >
          <Image src={per3_header} fill alt="per3" />
        </motion.div>
      </div>
      <Banner />
      <AdvertismentBanner title="Special offer up to 50%">
        <Image
          src={hollow_banner}
          alt="hollow"
          className="w-full md:w-[350px] lg:w-[550px] h-full object-cover"
        />
      </AdvertismentBanner>
      <Label title="Special Deals"/>
    </div>
  );
}
