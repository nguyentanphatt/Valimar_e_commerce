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
import acval from '@/public/assets/image/acvalhalla.jpg'
import among from '@/public/assets/image/among.jpg'
import cult from '@/public/assets/image/cult.jpg'
import cyberpunk from '@/public/assets/image/cyberpunk.jpg'
import darksoul3 from '@/public/assets/image/darksoul3.jpg'
import elden from '@/public/assets/image/elden.jpg'
import hades from '@/public/assets/image/hades.jpg'
import hollowknight from '@/public/assets/image/hollowknight.jpg'
import nomansky from '@/public/assets/image/nomansky.jpg'
import reddead from '@/public/assets/image/reddead.jpg'
import stardew from '@/public/assets/image/stardew.jpg'
import witcher from '@/public/assets/image/witcher.jpg'
import ItemCard from "@/components/ui/ItemCard";

export default function Home() {
  const [leftImage, leftAnimate] = useAnimate();
  const [rightImage, rightAnimate] = useAnimate();
  const [lgScreen, setLgScreen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 4

  useEffect(() => {
    leftAnimate([
      [leftImage.current, { opacity: 1 }, { duration: 0.5 }],
      [leftImage.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    rightAnimate([
      [rightImage.current, { opacity: 1 }, { duration: 0.5 }],
      [rightImage.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    const handleResize = () => {
      setLgScreen(window.innerWidth >= 1200)
    }

    const autoPagin = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 5000)

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  const special_deal = [
    {
      "name": "The Witcher 3: Wild Hunt",
      "price": 39.99,
      "discount_price": 19.99,
      "percent_discount": 50,
      "image": witcher,
    },
    {
      "name": "Cyberpunk 2077",
      "price": 59.99,
      "discount_price": 29.99,
      "percent_discount": 50,
      "image": cyberpunk,
    },
    {
      "name": "Elden Ring",
      "price": 59.99,
      "discount_price": 49.99,
      "percent_discount": 16,
      "image": elden,
    },
    {
      "name": "Red Dead Redemption 2",
      "price": 59.99,
      "discount_price": 29.99,
      "percent_discount": 50,
      "image": reddead,
    },
    {
      "name": "Hades",
      "price": 24.99,
      "discount_price": 12.49,
      "percent_discount": 50,
      "image": hades,
    },
    {
      "name": "Stardew Valley",
      "price": 14.99,
      "discount_price": 9.99,
      "percent_discount": 33,
      "image": stardew,
    },
    {
      "name": "Among Us",
      "price": 4.99,
      "discount_price": 3.99,
      "percent_discount": 20,
      "image": among,
    },
    {
      "name": "Dark Souls III",
      "price": 59.99,
      "discount_price": 14.99,
      "percent_discount": 75,
      "image": darksoul3,
    },
    {
      "name": "Cult Of The Lamb",
      "price": 24.99,
      "discount_price": 12.99,
      "percent_discount": 50,
      "image": cult,
    },
    {
      "name": "Assassin's Creed Valhalla",
      "price": 59.99,
      "discount_price": 39.99,
      "percent_discount": 33,
      "image": acval,
    },
    {
      "name": "Hollow Knight",
      "price": 14.99,
      "discount_price": 7.49,
      "percent_discount": 50,
      "image": hollowknight,
    },
    {
      "name": "No Man's Sky",
      "price": 59.99,
      "discount_price": 29.99,
      "percent_discount": 50,
      "image": nomansky,
    }
  ]
  
  const totalPages = Math.ceil(special_deal.length / itemsPerPage)
  const currentItems = special_deal.slice(currentPage*itemsPerPage, currentPage*itemsPerPage + itemsPerPage)


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
        <Label title="Best for you" className="hidden md:flex"/>
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
      <Label title="Special Deals" starSize="hidden md:flex"/>
      <div className={`px-2 lg:px-12 py-2 flex gap-3 md:gap-5 lg:gap-8 md:mt-5 lg:mt-16 lg:overflow-hidden overflow-x-auto scrollbar-hide `}>
        {( lgScreen ? currentItems : special_deal).map((item, index) => (
           <ItemCard 
           image={item.image}
           name={item.name}
           price={item.price}
           isDiscount
           discount_price={item.discount_price}
           discount={item.percent_discount}
           key={index}
         />
        ))}       
        
      </div>
      <div className="hidden lg:flex gap-2 mt-4 justify-center mb-10">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPage ? "bg-darkblue w-6" : "bg-gray-500"
            }`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
}
