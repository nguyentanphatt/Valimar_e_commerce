"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Account from "@/public/assets/icon/account.svg";
import { motion, useAnimate } from "framer-motion";
import Banner from "@/components/common/Banner";
import SearchBar from "@/components/ui/SearchBar";
import Button from "@/components/ui/Button";
import per5_header from "@/public/assets/image/per5_header.jpg";
import per3_header from "@/public/assets/image/per3_header.png";
import per3_banner from "@/public/assets/image/per3.jpg";
import hollow_banner from "@/public/assets/image/hollow.jpg";
import AdvertismentBanner from "@/components/common/AdvertismentBanner";
import Label from "@/components/ui/Label";
import ItemSection from "@/components/ui/ItemSection";
import Arrowright from "@/public/assets/icon/arrow-up-right.svg";

import acval from "@/public/assets/image/acvalhalla.jpg";
import among from "@/public/assets/image/among.jpg";
import cult from "@/public/assets/image/cult.jpg";
import cyberpunk from "@/public/assets/image/cyberpunk.jpg";
import darksoul3 from "@/public/assets/image/darksoul3.jpg";
import elden from "@/public/assets/image/elden.jpg";
import hades from "@/public/assets/image/hades.jpg";
import hollowknight from "@/public/assets/image/hollowknight.jpg";
import nomansky from "@/public/assets/image/nomansky.jpg";
import reddead from "@/public/assets/image/reddead.jpg";
import stardew from "@/public/assets/image/stardew.jpg";
import witcher from "@/public/assets/image/witcher.jpg";

import acmirage from "@/public/assets/image/acmirage.jpg";
import alanwake2 from "@/public/assets/image/alanwake2.jpg";
import baldur from "@/public/assets/image/baldurgate3.jpg";
import cities2 from "@/public/assets/image/cities2.jpg";
import forza from "@/public/assets/image/forzamotor.jpg";
import lotf from "@/public/assets/image/lordsofthefallen.jpg";
import mortal from "@/public/assets/image/mortalkombat1.jpg";
import payday3 from "@/public/assets/image/payday3.jpg";
import spider from "@/public/assets/image/spiderman2.jpg";
import starfield from "@/public/assets/image/starfield.jpg";
import supermario from "@/public/assets/image/supermariobros.jpg";
import avatar from "@/public/assets/image/avatar.jpg";
import Footer from "@/components/layout/Footer";

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
  }, []);

  const special_deal = [
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      price: 39.99,
      discount_price: 19.99,
      percent_discount: 50,
      image: witcher,
    },
    {
      id: 2,
      name: "Cyberpunk 2077",
      price: 59.99,
      discount_price: 29.99,
      percent_discount: 50,
      image: cyberpunk,
    },
    {
      id: 3,
      name: "Elden Ring",
      price: 59.99,
      discount_price: 49.99,
      percent_discount: 16,
      image: elden,
    },
    {
      id: 4,
      name: "Red Dead Redemption 2",
      price: 59.99,
      discount_price: 29.99,
      percent_discount: 50,
      image: reddead,
    },
    {
      id: 5,
      name: "Hades",
      price: 24.99,
      discount_price: 12.49,
      percent_discount: 50,
      image: hades,
    },
    {
      id: 6,
      name: "Stardew Valley",
      price: 14.99,
      discount_price: 9.99,
      percent_discount: 33,
      image: stardew,
    },
    {
      id: 7,
      name: "Among Us",
      price: 4.99,
      discount_price: 3.99,
      percent_discount: 20,
      image: among,
    },
    {
      id: 8,
      name: "Dark Souls III",
      price: 59.99,
      discount_price: 14.99,
      percent_discount: 75,
      image: darksoul3,
    },
    {
      id: 9,
      name: "Cult Of The Lamb",
      price: 24.99,
      discount_price: 12.99,
      percent_discount: 50,
      image: cult,
    },
    {
      id: 10,
      name: "Assassin's Creed Valhalla",
      price: 59.99,
      discount_price: 39.99,
      percent_discount: 33,
      image: acval,
    },
    {
      id: 11,
      name: "Hollow Knight",
      price: 14.99,
      discount_price: 7.49,
      percent_discount: 50,
      image: hollowknight,
    },
    {
      id: 12,
      name: "No Man's Sky",
      price: 59.99,
      discount_price: 29.99,
      percent_discount: 50,
      image: nomansky,
    },
  ];

  const new_releases = [
    {
      id: 1,
      name: "Starfield",
      price: 69.99,
      discount_price: 59.99,
      percent_discount: 14,
      image: starfield,
    },
    {
      id: 2,
      name: "Baldur's Gate 3",
      price: 59.99,
      discount_price: 49.99,
      percent_discount: 16,
      is_Discount: true,
      image: baldur,
    },
    {
      id: 3,
      name: "Spider-Man 2",
      price: 69.99,
      discount_price: 0,
      percent_discount: 0,
      is_Discount: false,
      image: spider,
    },
    {
      id: 4,
      name: "Alan Wake 2",
      price: 59.99,
      discount_price: 49.99,
      percent_discount: 16,
      is_Discount: true,
      image: alanwake2,
    },
    {
      id: 5,
      name: "Super Mario Bros. Wonder",
      price: 59.99,
      discount_price: 0,
      percent_discount: 0,
      is_Discount: false,
      image: supermario,
    },
    {
      id: 6,
      name: "Lords of the Fallen",
      price: 69.99,
      discount_price: 54.99,
      percent_discount: 21,
      is_Discount: true,
      image: lotf,
    },
    {
      id: 7,
      name: "Mortal Kombat 1",
      price: 69.99,
      discount_price: 0,
      percent_discount: 0,
      is_Discount: false,
      image: mortal,
    },
    {
      id: 8,
      name: "Assassin's Creed Mirage",
      price: 49.99,
      discount_price: 39.99,
      percent_discount: 20,
      is_Discount: true,
      image: acmirage,
    },
    {
      id: 9,
      name: "Forza Motorsport",
      price: 59.99,
      discount_price: 0,
      percent_discount: 0,
      is_Discount: false,
      image: forza,
    },
    {
      id: 10,
      name: "Avatar: Frontiers of Pandora",
      price: 69.99,
      discount_price: 64.99,
      percent_discount: 7,
      is_Discount: true,
      image: avatar,
    },
    {
      id: 11,
      name: "Payday 3",
      price: 39.99,
      discount_price: 29.99,
      percent_discount: 25,
      is_Discount: true,
      image: payday3,
    },
    {
      id: 12,
      name: "Cities: Skylines II",
      price: 49.99,
      discount_price: 0,
      percent_discount: 0,
      is_Discount: false,
      image: cities2,
    },
  ];

  return (
    <div>
      <div className="md:flex md:items-center md:justify-center md:gap-14 lg:gap-24 md:py-5">
        <Header />
        <Navbar />
        <Account className="sm:hidden md:flex lg:size-10" />
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
        <Label title="Best for you" className="hidden md:flex" />
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
      <Label title="Special Deals" starSize="hidden md:flex" />
      <ItemSection data={special_deal} itemPerPage={4} isNew />
      <AdvertismentBanner
        title="Persona 3 reload get it today"
        bgColor="md:bg-banner"
      >
        <Image
          src={per3_banner}
          alt="Persona 3"
          className="w-full md:w-[350px] lg:w-[550px] h-full object-cover"
        />
      </AdvertismentBanner>
      <Label title="New release" starSize="hidden md:flex" />
      <ItemSection
        data={new_releases}
        itemPerPage={6}
        largeItemId={[2, 4, 7, 8]}
        className="grid grid-cols-8 lg:grid-cols-4 gap-x-36 md:gap-x-56 gap-y-4"
      />
      <Footer />
    </div>
  );
}
