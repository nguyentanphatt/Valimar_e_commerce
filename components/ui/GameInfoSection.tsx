import { GameInfoProps } from "@/constant/type";
import { twMerge } from "tailwind-merge";

export default function GameInfoSection ({
    title,
    children,
    className
}: GameInfoProps) {
    return(
        <div className={twMerge("rounded-lg w-[340px] bg-white/20 flex flex-col items-center justify-center p-3 my-3 md:my-0 gap-0 md:gap-5", className)}>
          <h1 className="text-base md:text-xl lg:text-2xl md:self-center text-darkblue font-medium">{title}</h1>
          {children}
        </div>
    )
}