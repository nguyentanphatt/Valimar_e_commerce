import { ItemCardProps } from "@/constant/type";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ItemCard({
  image,
  name,
  isNew = false,
  price,
  discount_price,
  discount,
  className,
} : ItemCardProps) {
  return (
    <div
      className={twMerge(
        "flex-none w-[130px] md:w-[200px] lg:w-[250px] h-[150px] md:h-[250px] lg:h-[350px] flex flex-col justify-between bg-white/20 rounded shadow-[0_4px_4px_rgba(0,0,0,0.25)] transform transition-transform duration-200 ease-in-out hover:scale-105 md:hover:shadow-[0_0_10px_5px_rgba(0,208,255,0.5)] ",
        className
      )}
    >
      <Image
        src={image}
        alt={name}
        className="w-full h-[70%] object-cover rounded"
      />
      <div className="flex px-1 md:px-2 lg:px-3 h-[30px] md:h-[40px] lg:h-[60px] gap-2">
        <p className="font-medium text-xs md:text-base lg:text-xl text-white">
          {name}
        </p>
        {isNew && (
          <p className="-translate-y-0.5 uppercase text-[10px] md:text-[14px] lg:text-xl text-darkblue">
            new
          </p>
        )}
      </div>
      <div className="flex pb-2 px-1 gap-1 md:px-2 lg:px-3">
        <p className="font-medium text-xs md:text-base lg:text-2xl text-darkblue">
          ${discount !== 0 ? discount_price : price}
        </p>
        {discount !== 0 && (
          <>
            <p className="-translate-y-1 uppercase text-[10px] md:text-[14px] lg:text-xl line-through text-white/50">
              ${price}
            </p>
            <div className="w-9 md:w-14 h-3 md:h-5 bg-darkblue flex items-center justify-center translate-y-0.5 lg:translate-y-1.5">
              <p className="text-[10px] md:text-[14px] lg:text-xl">
                {discount}%
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
