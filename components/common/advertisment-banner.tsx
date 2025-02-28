"use client";
import React, { HTMLAttributes } from "react";
import Button from "../ui/button";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { slug } from "@/lib/slug";

export default function AdvertismentBanner({
  title,
  buttonText = "Check it now",
  children,
  bgColor,
  bannerId,
  name,
  ...props
}: {
  title: string;
  buttonText?: string;
  bgColor?: string;
  bannerId:number;
  name:string
} & HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();
  return (
    <div
      className={twMerge(
        "relative mt-10 w-full max-w-[375px] md:max-w-[768px] lg:max-w-full mx-auto h-[100px] md:h-[200px] xl:h-[300px] md:flex md:items-center md:justify-between md:bg-black",
        bgColor
      )}
      {...props}
    >
      <div className="absolute inset-0 md:inset-auto md:relative flex flex-col items-center justify-center md:ml-12 xl:ml-32">
        <p className="w-48 md:w-64 lg:w-96 text-center text-white text text-shadow-xl uppercase text-base md:text-2xl lg:text-3xl font-bold">
          {title}
        </p>
        <Button
          text={buttonText}
          className="bg-white text-xs md:text-lg mt-2 md:mt-6 md:w-44 md:h-10 "
          onClick={() => router.push(`/game/${bannerId}/${slug(name)}`)}
        />
      </div>
      {children}
    </div>
  );
}
