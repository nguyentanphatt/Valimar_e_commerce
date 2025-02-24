import React from "react";
import { twMerge } from "tailwind-merge";

const ItemPrice = ({
  price,
  discountPrice,
  discountPercent,
  discountPriceClassname,
  priceClassname,
  discountPercentClassname,
}: {
  price: number;
  discountPercent: number;
  discountPrice: number;
  discountPriceClassname?: string
  priceClassname?: string
  discountPercentClassname?: string
}) => {
  return (
    <div className="flex pb-2 pt-2 gap-1">
      <p className={twMerge("font-medium text-xs md:text-base lg:text-2xl text-darkblue", discountPriceClassname)}>
        ${discountPercent !== 0 ? discountPrice : price}
      </p>
      {discountPercent !== 0 && (
        <div className="flex items-center justify-center gap-2">
          <p className={twMerge("uppercase text-xs lg:text-base line-through text-white/50", priceClassname)}>
            ${price}
          </p>
          <div className={twMerge("w-9 md:w-14 h-4 md:h-5 bg-darkblue flex items-center justify-center rounded-sm",discountPercentClassname)}>
            <p className="text-xs lg:text-base">
              {discountPercent}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemPrice;
