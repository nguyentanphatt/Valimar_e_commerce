"use client";
import React, { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/lib/convertToSbcurrency";
import CheckoutPage from "@/components/common/CheckoutPage";
import { CartDataProps } from "@/constant/type";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const page = () => {
  
  const [cartData, setCartData] = useState<CartDataProps>()

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData") || "{}");
    setCartData(cartData)
  },[])

  const amountNumber = cartData?.amount ? Number(cartData.amount) : 0;

  return (
    <div className="w-[300px] md:w-[500px] lg:w-[900px] mx-auto h-screen">
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amountNumber),
          locale: "en",
          currency: "usd",
        }}
        
      >
        <CheckoutPage/>
      </Elements>
    </div>
  );
};

export default page;
