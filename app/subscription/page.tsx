'use server'
import React from "react";
import { auth } from "@/lib/auth";
import SubscriptionClient from "@/components/common/subscription-client";

const page = async() => {
  const session = await auth()


  return (
    <SubscriptionClient email={session?.user?.email || ''}/>
  );
};

export default page;
