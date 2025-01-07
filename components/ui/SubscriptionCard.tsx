import React from "react";
import Star from "@/public/assets/icon/star.svg";
import Button from "./Button";

interface SubscriptionCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  recommend?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  price,
  features,
  buttonText,
  recommend,
}) => {
  return (
    <div className="w-[200px] lg:w-[250px] h-[417px] bg-[#434343] relative rounded-lg border-2 border-black/30 md:border-transparent p-2 flex flex-col gap-2 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transform transition-transform duration-300 ease-in-out md:hover:scale-105 md:hover:border-2 md:hover:border-darkblue">
      <p className="text-white text-xl lg:text-2xl font-medium">{title}</p>
      <p className="text-darkblue text-2xl lg:text-3xl font-bold">{price}</p>
      {features.map((feature, index) => (
        <div className="flex gap-2" key={index}>
          <div className="size-4 rounded-full bg-white mt-1">
            <Star className="size-4" />
          </div>
          <p className="text-white text-base lg:text-xl font-medium break-word">
            {feature}
          </p>
        </div>
      ))}
      <div className="absolute bottom-0 mb-2 ml-3 w-[80%]">
        <Button size="md" text={buttonText} className="w-full lg:text-xl font-medium" />
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
