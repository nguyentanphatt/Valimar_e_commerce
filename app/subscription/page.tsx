import Button from "@/components/ui/Button";
import React from "react";
import Star from "@/public/assets/icon/star.svg";
import SubscriptionCard from "@/components/ui/SubscriptionCard";

const page = () => {
  const features1 = ["Access to all content"];
  const features2 = [
    "Access to all content",
    "10% discount",
    "No delivery fee",
    "Priority customer support",
    "Special effect",
  ];
  const features3 = [
    "Access to all content",
    "20% discount",
    "No delivery fee",
    "Priority customer support",
    "Special effect",
    "Refund in 7 days",
  ];
  const features4 = [
    "Access to all content",
    "30% discount, 35% for digital",
    "No delivery fee",
    "Priority customer support",
    "Special effect",
    "Refund in 14 days",
  ];
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-white text-xl md:text-3xl lg:text-4xl">Upgrade Your Experience</p>
        <p className="text-white/50 text-sm md:text-base lg:text-xl w-[60%] text-center">
          Access to the world with better benefit and unlimited content
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:h-[450px] md:overflow-x-auto md:scrollbar-hide lg:overflow-x-hidden md:px-10 items-center justify-start lg:justify-center gap-5 md:gap-7 lg:gap-10 mt-2 md:mt-7">
  <div className="sticky top-[64px] md:top-0 z-10">
      <SubscriptionCard
          title="Explore"
          price="$0"
          features={features1}
          buttonText="Current Plan"
      />
   </div>
   <div className="sticky top-[104px] md:top-0 z-20 ">
      <SubscriptionCard
          title="Pathfinder"
          price="$50"
          features={features2}
          buttonText="Upgrade Plan"
      />
  </div>
  <div className="sticky top-[144px] md:top-0 z-30 ">
      <SubscriptionCard
          title="Trailblazer"
          price="$200"
          features={features3}
          buttonText="Upgrade Plan"
          recommend
      />
   </div>
   <div className="sticky top-[184px] md:top-0 z-40 ">
      <SubscriptionCard
          title="Luminary"
          price="$500"
          features={features4}
          buttonText="Upgrade Plan"
      />
    </div>
</div>
    </div>
  );
};

export default page;
