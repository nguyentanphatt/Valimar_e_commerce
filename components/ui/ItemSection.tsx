"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { twMerge } from "tailwind-merge";
import { ItemSectionProps } from "@/constant/type";

export default function ItemSection({
  data,
  itemPerPage = 5,
  className,
  largeItemId,
}: ItemSectionProps) {
  const [lgScreen, setLgScreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [calculatedItemPerPage, setCalculatedItemPerPage] = useState(itemPerPage);

  const calculateItemPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1900) return 6;
    if (width >= 1440) return 5;
    if (width >= 1200) return 4;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setLgScreen(window.innerWidth >= 1200);
      setCalculatedItemPerPage(calculateItemPerPage());
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data.length, calculatedItemPerPage]);

  const totalPages = Math.ceil(data.length / calculatedItemPerPage);
  const currentItems = data.slice(
    currentPage * calculatedItemPerPage,
    currentPage * calculatedItemPerPage + calculatedItemPerPage
  );

  return (
    <div>
      <div
        className={twMerge(
          `px-2 lg:px-12 py-5 flex gap-3 md:gap-5 lg:gap-8 lg:overflow-hidden overflow-x-auto scrollbar-hide`,
          className
        )}
      >
        {(lgScreen ? currentItems : data).map((item, index) => {
          const largeId = largeItemId?.includes(item.id);
          return (
            <ItemCard
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              discountPrice={item.discountPrice}
              discountPercent={item.discountPercent}
              className={largeId ? "w-[272px] md:w-[420px] lg:w-[250px] col-span-2 lg:col-span-1" : ""}
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
