import { Star } from "@/constant/image";
import { twMerge } from "tailwind-merge";

interface LabelProps {
  title: string;
  className?: string;
  starSize?: string;
  textProps?: string;
}

export default function Label({ title, className, starSize }: LabelProps) {
  return (
    <div className={twMerge("flex flex-row justify-center gap-2 py-5 md:py-10 lg:py-20", className)}>
      <Star className={twMerge("size-7 lg:size-8 animate-twinkle", starSize)} />
      <p className="text-white uppercase font-medium md:font-bold sm:text-base md:text-2xl lg:text-3xl">
        {title}
      </p>
    </div>
  );
}
