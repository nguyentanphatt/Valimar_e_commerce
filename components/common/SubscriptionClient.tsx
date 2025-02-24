"use client";
import React, { useEffect, useState } from "react";
import SubscriptionCard from "@/components/ui/SubscriptionCard";
import { features1, features2, features3, features4 } from "@/constant/data";
import { userDetail } from "@/services/userService";
import { UserProps } from "@/constant/type";

export default function SubscriptionClient({ email }: { email: string }) {
  const [user, setUser] = useState<UserProps>();

  const getUserDetail = async (email: string) => {
    try {
      const userdetail = await userDetail(email);
      console.log(user);
      setUser(userdetail);
    } catch (error) {
      console.error("Failed to get user detail", error);
    }
  };

  useEffect(() => {
    getUserDetail(email);
  }, [email, getUserDetail]);

  const plans = ["free", "pathfinder", "trailblazer", "luminary"];

  const getButtonText = (
    currentPlan: string | undefined,
    planToCheck: string
  ) => {
    if (!currentPlan) return "Upgrade Plan";

    const currentIndex = plans.indexOf(currentPlan);
    const checkIndex = plans.indexOf(planToCheck);

    if (currentIndex === checkIndex) return "Current Plan";
    if (currentIndex > checkIndex) return "Owner";

    return "Upgrade Plan";
  };
  const getButtonConfig = (currentPlan: string | undefined, planToCheck: string) => {
    if (!currentPlan) return { text: "Upgrade Plan", className: "bg-white" }; // Fallback
  
    const currentIndex = plans.indexOf(currentPlan);
    const checkIndex = plans.indexOf(planToCheck);
  
    if (currentIndex === checkIndex) {
      return { text: "Current Plan", className: "bg-darkblue" }; 
    }
    if (currentIndex > checkIndex) {
      return { text: "Already Own", className: "bg-darkblue/50" };
    }
    
    return { text: "Upgrade Plan", className: "bg-white" };
  };

  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-white text-xl md:text-3xl lg:text-4xl">
          Upgrade Your Experience
        </p>
        <p className="text-white/50 text-sm md:text-base lg:text-xl w-[60%] text-center">
          Access to the world with better benefit and unlimited content
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:h-[470px] md:overflow-x-auto md:scrollbar-hide lg:overflow-x-hidden md:px-10 items-center justify-start lg:justify-center gap-5 md:gap-7 lg:gap-10 mt-2 md:mt-7">
        <div className="sticky top-[64px] md:top-0 z-10">
          <SubscriptionCard
            title="Explore"
            price="$0"
            features={features1}
            buttonText={getButtonText(user?.plan, "free")}
            buttonClassName={getButtonConfig(user?.plan, "free").className}
          />
        </div>
        <div className="sticky top-[104px] md:top-0 z-20 ">
          <SubscriptionCard
            title="Pathfinder"
            price="$50"
            features={features2}
            buttonText={getButtonText(user?.plan, "pathfinder")}
            buttonClassName={getButtonConfig(user?.plan, "pathfinder").className}
          />
        </div>
        <div className="sticky top-[144px] md:top-0 z-30 ">
          <SubscriptionCard
            title="Trailblazer"
            price="$200"
            features={features3}
            buttonText={getButtonText(user?.plan, "trailblazer")}
            buttonClassName={getButtonConfig(user?.plan, "trailblazer").className}
            recommend
          />
        </div>
        <div className="sticky top-[184px] md:top-0 z-40 ">
          <SubscriptionCard
            title="Luminary"
            price="$500"
            features={features4}
            buttonText={getButtonText(user?.plan, "luminary")}
            buttonClassName={getButtonConfig(user?.plan, "luminary").className}
          />
        </div>
      </div>
    </div>
  );
}
