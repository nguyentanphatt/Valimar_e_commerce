"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface Item {
  id: number;
  name: string;
  price: number;
  discount_price: number;
  percent_discount: number;
  image: StaticImageData;
}

export default function ItemSection({
  data,
  itemPerPage,
  className,
  largeItemId,
  isNew = false,
}: {
  data: Item[];
  itemPerPage: number;
  className?: string;
  largeItemId?: number[];
  isNew?:boolean;
}) {
  const [lgScreen, setLgScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setLgScreen(window.innerWidth >= 1200);
    };

    const autoPagin = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 10000);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / itemPerPage);
  const currentItems = data.slice(
    currentPage * itemPerPage,
    currentPage * itemPerPage + itemPerPage
  );

  return (
    <div>
      <div
        className={twMerge(
          `px-2 lg:px-12 py-2 flex gap-3 md:gap-5 lg:gap-8 md:mt-5 lg:mt-16 lg:overflow-hidden overflow-x-auto scrollbar-hide `,
          className
        )}
      >
        {(lgScreen ? currentItems : data).map((item, index) => {
          const largeId = largeItemId?.includes(item.id);
          return (
            <ItemCard
              image={item.image}
              name={item.name}
              price={item.price}
              isNew={isNew}
              discount_price={item.discount_price}
              discount={item.percent_discount}
              className={
                largeId ? "w-[272px] md:w-[420px] lg:w-[530px] col-span-2" : ""
              }
              key={index}
            />
          );
        })}
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
