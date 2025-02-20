'use server'
import React, { useEffect } from "react";
import SubscriptionCard from "@/components/ui/SubscriptionCard";
import { features1, features2, features3, features4 } from "@/constant/data";
import { auth } from "@/lib/auth";
import SubscriptionClient from "@/components/common/SubscriptionClient";

const page = async() => {
  const session = await auth()


  return (
    <SubscriptionClient email={session?.user?.email || ''}/>
  );
};

export default page;
