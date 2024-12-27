"use client";
import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Account from "@/public/assets/icon/account.svg";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
const banner = [
  {
    id: 1,
    name: "Silent Hill 2",
    image:
      "https://valimar-image.s3.ap-southeast-2.amazonaws.com/silenthill2.jpg",
  },
  {
    id: 2,
    name: "Metaphor Re:Fantazio",
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/metaphor.jpg",
  },
  {
    id: 3,
    name: "Stalker 2",
    image: "https://valimar-image.s3.ap-southeast-2.amazonaws.com/stalker2.jpg",
  },
  {
    id: 4,
    name: "Alan Wake 2",
    image:
      "https://valimar-image.s3.ap-southeast-2.amazonaws.com/alanwake2.jpg",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwap = (direction: string) => {
    if (direction === "left") {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + banner.length) % banner.length
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
    }
  };

  const variants = {
    left: {
      scale: 0.8,
      x: "-50%",
      opacity: 0.5,
      zIndex: 10,
    },
    center: {
      scale: 1.2,
      x: "0%",
      opacity: 1,
      zIndex: 20,
    },
    right: {
      scale: 0.8,
      x: "50%",
      opacity: 0.5,
      zIndex: 10,
    },
    exit: {
      opacity: 0,
      scale: 0.5,
    },
  };

  const getPosition = (index: number) => {
    if (index === currentIndex) return "center";
    if (index === (currentIndex - 1 + banner.length) % banner.length)
      return "left";
    if (index === (currentIndex + 1) % banner.length) return "right";
    return "exit";
  };

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
      <div className="flex flex-col items-center">
        <p className="text-white font-bold text-xl text-center py-2 max-w-60">
          Discovery new game and get{" "}
          <span className="text-darkblue">special discount</span>
        </p>
      </div>
      <div className="relative flex items-center justify-center overflow-hidden h-40">
        {banner.map((item, index) => (
          <motion.div
            key={item.id}
            className="absolute cursor-pointer"
            variants={variants}
            initial={getPosition(index)}
            animate={getPosition(index)}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => {
              if (getPosition(index) === "left") handleSwap("left");
              if (getPosition(index) === "right") handleSwap("right");
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={index === currentIndex ? 250 : 200}
              height={index === currentIndex ? 150 : 100}
              className="rounded-xl"
            />
            {getPosition(index) === "center" && (
              <p className="absolute text-white bottom-6 ml-2 text-sm hidden md:flex">{item.name}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
