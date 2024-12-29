import Image from "next/image";
import star from "@/public/assets/icon/star.svg"
import { twMerge } from "tailwind-merge";

export default function ({
    title,
    className,
    starSize,
}: {
    title:string,
    className?:string,
    starSize?:string
}) {
  return (
    <div className={twMerge("flex flex-row justify-center gap-2 lg:mt-20", className)}>
      <Image src={star} alt="star" className={twMerge("hidden md:flex size-7 lg:size-11", starSize)} />
      <p className="text-white uppercase font-bold text-3xl lg:text-5xl hidden md:flex">
       {title}
      </p>
    </div>
  );
}
