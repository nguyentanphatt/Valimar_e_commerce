"use client"
import React from "react";
import Button from "./Button";
import { SubscriptionCardProps } from "@/constant/type";
import { Star } from "@/constant/image";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";


const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  price,
  features,
  buttonText,
  recommend,
  buttonClassName,
  userId,
}) => {
  const router = useRouter()
  const convertPrice = parseInt(price.replace(/[^0-9]/g, ""), 10);
  const handleCheckout = () => {
    const cartData = {
      amount: convertPrice,
      type: "subscription",
      newPlan: title,
      userId: userId
    }

    localStorage.setItem("cartData", JSON.stringify(cartData))
    router.push(`/checkout`)

   
    
  }
  return (
    <div className="w-[200px] lg:w-[250px] h-[417px] bg-[#434343] relative rounded-lg border-2 border-black/30 md:border-none p-2 flex flex-col gap-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transform transition-transform duration-200 ease-in-out md:hover:scale-105 md:hover:shadow-[0_0_10px_5px_rgba(0,208,255,0.5)]">
      <p className="text-white text-xl lg:text-2xl font-medium">{title}</p>
      <p className="text-darkblue text-2xl lg:text-3xl font-bold">{price}</p>
      {features.map((feature, index) => (
        <div className="flex gap-2" key={index}>
          <div className="size-4 rounded-full bg-white mt-1">
            <Star className="size-4" />
          </div>
          <p className="text-white text-base lg:text-xl font-medium">
            {feature}
          </p>
        </div>
      ))}
      <div className="absolute bottom-0 mb-2 ml-3 w-[80%]">
        <Button size="md" text={buttonText} className={twMerge("w-full lg:text-xl font-medium", buttonClassName)} onClick={handleCheckout}/>
      </div>
      {recommend && (
        <div className="absolute right-0 bg-gradient-to-r from-[#DF74AE] to-[#8B6EE7] p-1 rounded-lg">
          <p className="text-xs text-white">Recommended</p>
        </div>
      )}
    </div>
  );
};
export default SubscriptionCard;
