"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import Banner from "@/components/common/Banner";
import SearchBar from "@/components/ui/SearchBar";

import AdvertismentBanner from "@/components/common/AdvertismentBanner";
import Label from "@/components/ui/Label";
import ItemSection from "@/components/ui/ItemSection";
import {
  hollow_banner,
  per3_banner,
  per3_header,
  per5_header,
} from "@/constant/image";
import { fetchGames, getGameNewrelease, getGameWithDiscount } from "@/services/gameService";
import ItemGridSection from "@/components/ui/ItemGridSection";

export default function Home() {
  const [data, setData] = useState([]);
  const [discountGame, setDiscountGame] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
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
  }, [leftAnimate, leftImage, rightAnimate, rightImage]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        setData(data);

        const gameWithDiscount = await getGameWithDiscount()
        setDiscountGame(gameWithDiscount)
        
        const gameNewrelease = await getGameNewrelease()
        setNewRelease(gameNewrelease);
      } catch (error) {
        console.error("Failed to load games", error);
      }
    };
    loadGames();
  }, []);

  return (
    <div className="relative">
      <div className="relative flex flex-col items-center gap-10 md:h-[200px] lg:h-[400px] lg:py-10 md:overflow-x-hidden">
        <p className="z-20 text-white font-bold text-xl md:text-3xl lg:text-5xl text-center py-2 max-w-60 md:max-w-96 lg:max-w-[580px]">
          Discovery new game and get{" "}
          <span className="text-darkblue">discountGame discount</span>
        </p>
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
      <div className="absolute top-32 left-36 lg:top-[5%] lg:left-[25%] z-40 flex items-center justify-center md:w-[500px] lg:w-[50%]">
        <SearchBar className="hidden md:flex" />
      </div>
      <Label title="Best for you" className="hidden md:flex" />
      <Banner />
      <AdvertismentBanner title="discountGame offer up to 50%">
        <Image
          src={hollow_banner}
          alt="hollow"
          className="w-full md:w-[350px] lg:w-[550px] xl:w-[800px] h-full object-cover"
        />
      </AdvertismentBanner>
      <Label title="Game Deals" starSize="hidden md:flex" />
      <div className="lg:flex lg:items-center lg:justify-center">
        <ItemSection data={discountGame} />
      </div>

      <AdvertismentBanner
        title="Persona 3 reload get it today"
        bgColor="md:bg-banner"
      >
        <Image
          src={per3_banner}
          alt="Persona 3"
          className="w-full md:w-[350px] lg:w-[550px] xl:w-[800px] h-full object-cover"
        />
      </AdvertismentBanner>
      <Label title="New release" starSize="hidden md:flex" />
      <div className="lg:flex lg:items-center lg:justify-center">
        <ItemSection
          data={newRelease}
          largeItemId={[]}
          className="grid grid-cols-6 lg:grid-cols-4 lg:flex gap-x-36 md:gap-x-56 xl:gap-x-8 gap-y-4"
        />
      </div>
      <Label title="All Games" starSize="hidden md:flex" />
      <div className="flex items-center justify-center">
        <ItemGridSection data={data} />
      </div>
    </div>
  );
}
