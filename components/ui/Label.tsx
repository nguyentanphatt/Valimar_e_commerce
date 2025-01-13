import { Star } from "@/constant/image";
import { twMerge } from "tailwind-merge";

export default function ({
    title,
    className,
    starSize,
    textProps,
}: {
    title:string,
    className?:string,
    starSize?:string,
    textProps?:string
}) {
  return (
    <div className={twMerge("flex flex-row justify-center gap-2 mt-4 md:mt-10 lg:mt-20", className)}>
      <Star className={twMerge("size-7 lg:size-11", starSize)} />
      <p className="text-white uppercase font-medium md:font-bold sm:text-base md:text-3xl lg:text-5xl">
       {title}
      </p>
    </div>
  );
}
