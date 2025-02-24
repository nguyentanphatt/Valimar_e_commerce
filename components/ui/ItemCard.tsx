import { ItemCardProps } from "@/constant/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import ItemPrice from "./ItemPrice";

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
        <ItemPrice
          price={price}
          discountPrice={discountPrice ?? 0}
          discountPercent={discountPercent ?? 0}
          discountPriceClassname="ml-1 md:ml-2 lg:ml-3"
          priceClassname="-translate-y-1"
        />
      </div>
    </Link>
  );
}
