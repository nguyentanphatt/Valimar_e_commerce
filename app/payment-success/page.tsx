"use client";
import Button from "@/components/ui/button";
import { CheckoutSuccessIcon } from "@/constant/image";
import { CartDataProps, UserProps } from "@/constant/type";
import { sendMail } from "@/lib/send-mail";
import { updateCart } from "@/services/cartService";
import { generateGameKey } from "@/services/gameService";
import { changeSubscriptionOfUser, getUserById } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();

  const [cartData, setCartData] = useState<CartDataProps | null>(null);
  const [date, setDate] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserProps>();

  const getUserName = async (userId: number) => {
    if (userId === 0) return;
    try {
      const user = await getUserById(userId);
      setUserInfo(user)
      
    } catch (error) {
      console.error("Error", error);
    }
  };

  const updateCartStatus = async (
    id: number,
    promocode: string,
    deliveryLocation: string
  ) => {
    try {
      const response = await updateCart(id, promocode, deliveryLocation);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updateSubscription = async (newPlan: string, email:string) => {
    try {
      const response = await changeSubscriptionOfUser(newPlan, email)
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  
  
  const generateAndSendKeys = async () => {
    console.log(cartData);
    if(!cartData?.digitalGameIds || !userInfo?.email) return

    try {
      const keys: string[] = []
      for(const gameId of cartData.digitalGameIds){
        const res = await generateGameKey(gameId)
        console.log("res", res);
        
        if(res?.key){
          keys.push(res.key)
        }
      }
      console.log("keys", keys);
      
      if(keys.length > 0){
        console.log("email", userInfo.email);
        
        await sendMail({
          sendTo: userInfo.email,
          key: keys
        })
      }
    } catch (error) {
      console.error("Error generating and sending keys:", error);
    }
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cart = JSON.parse(localStorage.getItem("cartData") || "{}");
  
      if (cart?.userId) {
        setCartData(cart);
        setDate(new Date().toLocaleDateString());
  
        await getUserName(cart.userId);
  
        if (cart?.type === "cart") {
          await updateCartStatus(cart.id, cart.promocode, cart.deliveryLocation);
        }
      }
  
      setIsLoading(false);
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    if (cartData?.type === "subscription" && userInfo?.email) {
      console.log("Updating subscription for:", userInfo?.email);
      console.log("Updating subscription for:", cartData.newPlan);
      updateSubscription(cartData.newPlan?.toLowerCase() || "", userInfo.email);
    }
  }, [userInfo, cartData]);

  useEffect(() => {
    if (cartData?.type === "cart" && cartData.digitalGameIds && userInfo?.email) {
      generateAndSendKeys();
    }
  }, [cartData, userInfo]);
  const handleCompleted = () => {
    localStorage.removeItem("cartData");
    router.push("/");
  };

  return (
    <div className="h-screen mt-56 md:mt-40">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="w-[300px] md:w-[400px] lg:w-[700px] h-[400px] md:h-[500px] lg:h-[600px] mx-auto bg-white/10 text-xs md:text-sm lg:text-base flex flex-col items-center justify-center rounded-lg gap-3 md:gap-5 lg:gap-7">
        <div className="bg-darkblue size-10 md:size-12 lg:size-16 rounded-full relative flex items-center justify-center">
          <CheckoutSuccessIcon className="size-6 lg:size-8 z-10" />
          <div className="bg-darkblue absolute inset-0 rounded-full animate-ping-large"></div>
        </div>
        <h1 className="text-sm md:text-base lg:text-lg text-white">
          Payment was successful
        </h1>
        <p className="text-white/50 text-balance text-center">
          Yeah! Your payment was successful, and your order is complete. If
          anything wrong, contact us as soon as possible
        </p>
        <div className="text-white px-8 rounded-lg w-full">
          <div className="flex justify-between">
            <span>Date</span>
            <span>{date}</span>
          </div>
          {cartData?.numberOfItem && (
            <div className="flex justify-between mt-2">
            <span>Number of item</span>
            <span>{cartData?.numberOfItem}</span>
          </div>
          )}

          {cartData?.type === 'cart' && (
            <div className="flex justify-between mt-2">
            <span>Delivery Fee</span>
            <span>$0</span>
          </div>
          )}
          {cartData?.deliveryLocation && (
            <div className="flex justify-between mt-2">
              <span>Delivery Address</span>
              <span>{cartData.deliveryLocation}</span>
            </div>
          )}

          <div className="flex justify-between mt-2">
            <span>Person</span>
            <span>{userInfo?.name}</span>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className=" w-[40%] h-1 bg-white/10"></div>
          <div className="bg-darkblue text-base md:text-lg font-medium rounded-lg w-24 flex items-center justify-center">
            <p className=" text-black">{cartData?.amount}</p>
          </div>
          <div className=" w-[40%] h-1 bg-white/10"></div>
        </div>
        <Button
          text="NICE"
          className="w-56 md:w-60 lg:w-80 h-9 lg:h-10 text-base md:text-lg font-medium text-black"
          onClick={handleCompleted}
        />
      </div>
      )}
    </div>
  );
};

export default page;
