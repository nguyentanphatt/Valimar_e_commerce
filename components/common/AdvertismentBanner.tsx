import React, { HTMLAttributes } from "react";
import Button from "../ui/Button";
import { twMerge } from "tailwind-merge";

export default function AdvertismentBanner({
  title,
  buttonText = "Check it now",
  children,
  bgColor,
  ...props
}: {
  title: string;
  buttonText?: string;
  bgColor?:string
} & HTMLAttributes<HTMLDivElement>) {
  //const {children, ...otherProps} = props
  return (
    <div
      className={twMerge("relative mt-10 w-full max-w-[375px] md:max-w-[768px] lg:max-w-full mx-auto h-[100px] md:h-[200px] md:flex md:items-center md:justify-between md:bg-black",bgColor)}
      {...props}
    >
      <div className="absolute inset-0 md:inset-auto md:relative flex flex-col items-center justify-center md:ml-12">
        <p className="w-48 md:w-64 lg:w-96 text-center text-white text text-shadow-xl uppercase text-base md:text-2xl lg:text-4xl font-bold">
          {title}
        </p>
        <Button
          size="md"
          text={buttonText}
          className="bg-white text-xs md:text-xl lg:text-2xl mt-2 md:mt-6 md:w-44 md:h-10 "
        />
      </div>
      {children}
    </div>
  );
}
