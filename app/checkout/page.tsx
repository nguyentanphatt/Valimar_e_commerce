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

const Page = () => {
  const [cartData, setCartData] = useState<CartDataProps>();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData") || "{}");
    setCartData(cartData);
  }, []);

  const amountNumber = cartData?.amount ? Number(cartData.amount) : 0;

  return (
    <div>
      <h1 className="text-white pt-40 text-sm md:text-lg lg:text-xl text-center">
        This is a test payment with Stripe. Please using card number with 4242
        4242 4242 4242{" "}
      </h1>
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
          <CheckoutPage />
        </Elements>
      </div>
    </div>
  );
};

export default Page;
