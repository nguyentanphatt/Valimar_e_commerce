"use client";
import React, { useEffect, useState } from "react";
import SubscriptionCard from "@/components/ui/subscription-card";
import { features1, features2, features3, features4 } from "@/constant/data";
import { userDetail } from "@/services/userService";
import { UserProps } from "@/constant/type";

export default function SubscriptionClient({ email }: { email: string }) {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const getUserDetail = async (email: string) => {
      try {
        const userdetail = await userDetail(email);
        setUser(userdetail);
      } catch (error) {
        console.error("Failed to get user detail", error);
      }
    };
    getUserDetail(email);
  }, [email]);
  const plans = ["free", "pathfinder", "trailblazer", "luminary"];
  const getButtonText = (
    currentPlan: string | undefined,
    planToCheck: string
  ) => {
    if (!currentPlan) return "Upgrade Plan";

    const currentIndex = plans.indexOf(currentPlan);
    const checkIndex = plans.indexOf(planToCheck);

    if (currentIndex === checkIndex) return "Current Plan";
    if (currentIndex > checkIndex) return "Owned";

    return "Upgrade Plan";
  };
  const getButtonConfig = (currentPlan: string | undefined, planToCheck: string) => {
    if (!currentPlan) return { text: "Upgrade Plan", className: "bg-white" };
  
    const currentIndex = plans.indexOf(currentPlan);
    const checkIndex = plans.indexOf(planToCheck);
  
    if (currentIndex === checkIndex) {
      return { text: "Current Plan", className: "bg-darkblue hover pointer-events-none" }; 
    }
    if (currentIndex > checkIndex) {
      return { text: "Already Own", className: "bg-darkblue/50 pointer-events-none" };
    }
    
    return { text: "Upgrade Plan", className: "bg-white" };
  };

  return (
    <div className=" py-40 md:py-28">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-title">
          Upgrade Your Experience
        </p>
        <p className="subtext">
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
            userId={user?.id}
          />
        </div>
        <div className="sticky top-[104px] md:top-0 z-20 ">
          <SubscriptionCard
            title="Pathfinder"
            price="$50"
            features={features2}
            buttonText={getButtonText(user?.plan, "pathfinder")}
            buttonClassName={getButtonConfig(user?.plan, "pathfinder").className}
            userId={user?.id}
          />
        </div>
        <div className="sticky top-[144px] md:top-0 z-30 ">
          <SubscriptionCard
            title="Trailblazer"
            price="$200"
            features={features3}
            buttonText={getButtonText(user?.plan, "trailblazer")}
            buttonClassName={getButtonConfig(user?.plan, "trailblazer").className}
            userId={user?.id}
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
            userId={user?.id}
          />
        </div>
      </div>
    </div>
  );
}
