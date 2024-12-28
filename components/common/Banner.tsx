"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

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

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [xOffset, setXOffset] = useState("-50%");

  useEffect(() => {
    const updateXOffset = () => {
      if (window.innerWidth >= 768 ) {
        setXOffset("-140%");
      } else {
        setXOffset("-50%");
      }
    };

    updateXOffset();
    window.addEventListener("resize", updateXOffset);
    return () => window.removeEventListener("resize", updateXOffset);
  }, []);

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
      x: xOffset,
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
      x: `calc(-1 * ${xOffset})`,
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
    <div className="relative flex items-center justify-center overflow-hidden h-40 md:h-80 lg:h-[500px]">
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
          <div
            className={`relative rounded-xl transition-all duration-300 ${
              getPosition(index) === "center"
                ? " w-[250px] h-[150px] md:w-[450px] md:h-[250px] lg:w-[850px] lg:h-[500px]"
                : " w-[200px] h-[100px] md:w-[200px] md:h-[250px] lg:w-[320px] lg:h-[400px]"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes=""
              className="rounded-xl"
            />
          </div>
          {getPosition(index) === "center" && (
            <div className="absolute md:bottom-2 lg:bottom-16 hidden md:flex md:flex-col ml-2 md:ml-5 md:gap-2 lg:gap-5 ">
              <p className=" text-white text-sm md:text-3xl lg:text-4xl md:gap-2 md:font-bold black-text-stroke">
                {item.name}{" "}
                <span className="text-darkblue text-xl lg:text-3xl font-bold">NEW</span>
              </p>
              <Button size="md" text="View More" className="lg:w-28 lg:h-10 lg:text-lg" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Banner;
