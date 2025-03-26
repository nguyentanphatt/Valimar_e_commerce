"use client";
import Button from "@/components/ui/button";
import ItemPrice from "@/components/ui/item-price";
import { RemoveIcon } from "@/constant/image";
import { CartItemProps, CartProps } from "@/constant/type";
import { getUserDetail } from "@/lib/actions/auth";
import { fetchCart, removeFromCart, totalCart } from "@/services/cartService";
import { checkPromocode } from "@/services/gameService";
import { AxiosError } from "axios";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const { id } = useParams();
  const userId = id ? parseInt(id as string, 10) : 0;
  const router = useRouter();
  const [yourCart, setYourCart] = useState<CartProps>();
  const [total, setTotal] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<string>("free");
  const [promocode, setPromocode] = useState("");
  const [promocodeValue, setPromocodeValue] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");

  const getCart = async (id: number) => {
    try {
      const cart = await fetchCart(id);
      setYourCart(cart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart(userId);
    getTotal(userId);
    subscription();
  }, [userId]);

  const handleCheckPromocode = async (promo: string) => {
    try {
      if(promo.trim() !== " ") {
        const result = await checkPromocode(promo);
        setPromocodeValue(result.percent);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error);
        
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  const removeItemFromCart = async (cartItemId: number) => {
    try {
      const result = await removeFromCart(cartItemId);
      await getCart(userId);
      await getTotal(userId);
      toast.success(result.message);
    } catch (error) {
      console.error(error);
      toast.error("Error");
    }
  };

  const getTotal = async (userId: number) => {
    try {
      const response = await totalCart(userId);
      setTotal(response);
    } catch (error) {
      console.error(error);
    }
  };

  const subscription = async () => {
    try {
      const response = await getUserDetail();
      setUserSubscription(response.plan);
    } catch (error) {
      console.error(error);
    }
  };

  const subscriptionDiscount = (plan: string) => {
    if (plan === "pathfinder") return 0.1;
    if (plan === "traiblazer") return 0.2;
    if (plan === "luminary") return 0.3;
    return 0;
  };

  const finalTotal = () => {
    if (isNaN(total) || total === undefined || total === null) return 0;

    const subDiscount = subscriptionDiscount(userSubscription);
    const discountedTotal = total - total * subDiscount;

    return Math.max(discountedTotal, 0);
  };

  const handleCheckout = () => {
    if (!yourCart) return;
    const digitalGameIds = yourCart.cartitem
      .filter((item) => !item.physical)
      .map((item) => item.gameId);
    const cartData = {
      id: yourCart?.id,
      userId: userId,
      promocode: promocode,
      deliveryLocation: deliveryLocation,
      amount: finalTotal().toFixed(2),
      numberOfItem: yourCart?.cartitem.length,
      type: "cart",
      digitalGameIds,
    };

    localStorage.setItem("cartData", JSON.stringify(cartData));
    router.push(`/checkout`);
  };
  const hasPhysical = (cart: CartProps) => {
    return cart.cartitem.some((item) => item.physical === true);
  };
  console.log(promocodeValue);

  return (
    <div className="max-w-[1200px] mx-auto h-screen py-40 md:py-20 lg:py-24">
      <h1 className="text-center text-base md:text-xl lg:text-3xl py-3 text-darkblue font-bold uppercase">
        Cart
      </h1>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="md:w-[60%] max-h-[170px] md:max-h-[450px] lg:max-h-[550px] overflow-y-auto">
          {yourCart?.cartitem.map((item: CartItemProps) => (
            <div
              className="flex items-center justify-between bg-white/20 m-3 p-2 rounded"
              key={item.id}
            >
              <div className="flex items-center gap-5">
                <Image
                  src={item.game.imageUrl}
                  alt={item.game.name}
                  width={300}
                  height={300}
                  className="w-20 lg:w-32 h-14 md:h-20 lg:h-24 object-cover"
                />
                <div className="flex flex-col justify-between text-sm md:text-base lg:text-xl text-white font-medium">
                  <h1 className="">{item.game.name}</h1>
                  {item.physical ? (
                    <p className="text-xs md:text-sm text-white/80">
                      Type: Physical
                    </p>
                  ) : (
                    <p className="text-xs md:text-sm text-white/80">
                      Type: Digital
                    </p>
                  )}
                  <ItemPrice
                    price={item.game.price}
                    discountPrice={item.game.discountPrice}
                    discountPercent={item.game.discountPercent}
                    discountPercentClassname="text-black"
                  />
                </div>
              </div>
              <div
                onClick={() => removeItemFromCart(item.id)}
                className="cursor-pointer"
              >
                <RemoveIcon className="size-4 md:size-5 lg:size-6" />
              </div>
            </div>
          ))}
        </div>
        <div className="py-3 mt-5 bg-white/20 mx-3 md:mx-0 md:mr-3 md:mt-3 px-5 text-white rounded md:w-[40%]">
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base lg:text-xl">Promo code:</p>
            <div className="flex gap-2 lg:gap-8">
              <input
                type="text"
                placeholder="Enter your promo code..."
                className="w-full bg-white text-black text-sm lg:text-base p-1 lg:p-2 outline-none rounded-sm"
                value={promocode}
                onChange={(e) => setPromocode(e.target.value)}
              />
              <Button className="w-20 lg:w-32 lg:h-10 text-black text-sm" text="Check" onClick={() => handleCheckPromocode(promocode)}/>
            </div>
          </div>
          {yourCart && hasPhysical(yourCart) && (
            <div className="flex flex-col gap-2 mt-3">
              <p className="text-sm md:text-base lg:text-xl">Address:</p>
              <input
                type="text"
                placeholder="Enter your address..."
                className="w-full bg-white text-black text-sm lg:text-base p-1 lg:p-2 outline-none rounded-sm"
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
              />
            </div>
          )}
          <div className="mt-3 flex flex-col gap-1">
            <div className="flex justify-between text-sm md:text-base lg:text-xl">
              <span>Subtotal:</span>
              <span>
                $
                {!isNaN(total) && total !== undefined
                  ? total.toFixed(2)
                  : "0.00"}
              </span>
            </div>
            <div className="flex justify-between text-sm md:text-base lg:text-xl">
              <span>Promo:</span>
              <span>${(parseFloat(promocodeValue) || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm md:text-base lg:text-xl">
              <span>Subscription:</span>
              <span>
                ${(userSubscription ? subscriptionDiscount(userSubscription) : 0).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm md:text-base lg:text-xl">
              <span>Transfer Fee:</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg lg:text-2xl my-2">
              <span>Total:</span>
              <span className="text-darkblue">${finalTotal().toFixed(2)}</span>
            </div>
          </div>
          <Button
            text="CHECKOUT"
            className="w-full h-7 lg:h-10 text-black text-sm lg:text-base rounded-lg"
            onClick={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
