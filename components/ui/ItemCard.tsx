import { ItemCardProps } from "@/constant/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function ItemCard({
  id,
  imageUrl,
  name,
  price,
  discountPrice,
  discountPercent,
  className,
}: ItemCardProps) {
  const slug = name
    .toLowerCase()
    .replace(/[™'",:]/g, "")
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("_");

  return (
    <Link href={`/game/${id}/${slug}`} passHref>
      <div
        className={twMerge(
          "flex-none w-[130px] md:w-[200px] lg:w-[250px] h-[150px] md:h-[250px] lg:h-[350px] flex flex-col justify-between bg-white/20 rounded shadow-[0_4px_4px_rgba(0,0,0,0.25)] transform transition-transform duration-200 ease-in-out hover:scale-105 md:hover:shadow-[0_0_10px_5px_rgba(0,208,255,0.5)] ",
          className
        )}
      >
        <div className="relative h-[70%]">
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="rounded w-full h-full object-cover"
            priority
          />
        </div>
        <div className="flex px-1 md:px-2 lg:px-3 h-[30px] md:h-[40px] lg:h-[60px] gap-2">
          <p className="font-medium text-xs md:text-base lg:text-xl text-white pt-1 lg:pt-2">
            {name}
          </p>
        </div>
        <div className="flex pb-2 px-1 pt-2 gap-1 md:px-2 lg:px-3">
          <p className="font-medium text-xs md:text-base lg:text-2xl text-darkblue">
            ${discountPercent !== 0 ? discountPrice : price}
          </p>
          {discountPercent !== 0 && (
            <>
              <p className="-translate-y-1 uppercase text-[10px] md:text-[14px] lg:text-xl line-through text-white/50">
                ${price}
              </p>
              <div className="w-9 md:w-14 h-3 md:h-5 bg-darkblue flex items-center justify-center translate-y-0.5 lg:translate-y-1.5 rounded-sm">
                <p className="text-[10px] md:text-[14px] lg:text-xl">
                  {discountPercent}%
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
