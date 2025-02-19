import { GameProps } from "@/constant/type";
import Image from "next/image";
import Link from "next/link";

export default function GameCard({
  name,
  imageUrl,
  id,
  price,
  discountPercent,
  discountPrice,
}: GameProps) {
  const slug = name
    .toLowerCase()
    .replace(/[™'",:]/g, "")
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("_");

  return (
    <Link href={`/game/${id}/${slug}`} passHref>
      <div className="flex flex-row gap-2 lg:gap-4 py-2 px-2 hover:bg-white/10 transition-all duration-300 ">
        <div>
          <Image src={imageUrl} alt="Game Image" width={300} height={300} />
        </div>
        <div className="flex flex-col gap-1 justify-between">
          <div>
            <h1 className="text-sm md:text-base lg:text-xl font-medium text-white">
              {name}
            </h1>
            <p className="text-white/50 text-xs lg:text-sm truncate w-52 md:w-72 md:overflow-hidden md:text-ellipsis md:whitespace-normal md:line-clamp-3 lg:text-wrap lg:w-full lg:mt-2 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </div>
          <div className="flex gap-1">
            <p className="font-medium text-xs md:text-base lg:text-2xl text-darkblue">
              ${discountPercent !== 0 ? discountPrice : price}
            </p>
            {discountPercent !== 0 && (
              <>
                <p className="uppercase text-[10px] md:text-[14px] lg:text-xl line-through text-white/50">
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
      </div>
    </Link>
  );
}
