import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ItemCard({
  image,
  name,
  isNew = false,
  price,
  discount_price,
  isDiscount = false,
  discount,
  isLarge = false,
  description,
  className,
}: {
  image: StaticImageData;
  name: string;
  isNew?: boolean;
  price: number;
  discount_price?: number;
  isDiscount?: boolean;
  discount: number;
  isLarge?: boolean;
  description?: string;
  className?:string;
}) {
  return (
    <div className={twMerge("flex-none w-[130px] md:w-[200px] lg:w-[250px] h-[150px] md:h-[250px] lg:h-[350px] flex flex-col justify-between bg-white/20 rounded shadow-[0_4px_4px_rgba(0,0,0,0.25)] transform transition-transform duration-200 ease-in-out hover:scale-105 ", className)}>
      <Image
        src={image}
        alt={name}
        className="w-full h-[70%] object-cover rounded"
      />
      <div className="flex px-1 h-[30px] lg:h-[60px]">
        <p className="font-medium text-xs md:text-base lg:text-2xl text-white">{name}</p>
        {isNew && (
          <p className="-translate-y-0.5 uppercase text-[10px] md:text-[14px] lg:text-xl text-darkblue">
            new
          </p>
        )}
      </div>
      {isLarge && (
        <div className="px-1">
          <p className="text-[8px] md:text-xs lg:text-base text-white/50">{description}</p>
        </div>
      )}
      <div className="flex px-1 gap-1">
        <p className="font-medium text-xs md:text-base lg:text-2xl text-darkblue">${discount_price}</p>
        <p className="-translate-y-1 uppercase text-[10px] md:text-[14px] lg:text-xl line-through text-white/50">
          ${price}
        </p>
        {isDiscount && (
          <div className="w-9 md:w-14 h-3 md:h-5 bg-darkblue flex items-center justify-center">
            <p className="text-[10px] md:text-[14px] lg:text-xl">{discount}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
