import Button from "@/components/ui/Button";
import { RemoveIcon } from "@/constant/image";
import Image from "next/image";
import React from "react";

const page = () => {
  //get id user -> send to backend get cart by this user if cart status = pending
  //get info cart -> get gameId (Cart item it will have game id and digital true false) -> get info game to show off
  //After paying -> set staus to completed
  //Add an item to cart it mean send that id and create a cart with that id
  const data = [
    {
      name: "No Man's Sky",
      link: "https://store.steampowered.com/app/275850/No_Mans_Sky/",
      releaseDate: "12/08/2016",
      price: 59.99,
      discountPrice: 23.99,
      discountPercent: 60,
      gameId: "275850",
      imageUrl:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/header_alt_assets_13.jpg",
      genre: "Action, Adventure, Building, Space",
      developer: "Hello Games",
      physical: false,
    },
    {
      name: "No Man's Sky2",
      link: "https://store.steampowered.com/app/275850/No_Mans_Sky/",
      releaseDate: "12/08/2016",
      price: 59.99,
      discountPrice: 23.99,
      discountPercent: 60,
      gameId: "275850",
      imageUrl:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/header_alt_assets_13.jpg",
      genre: "Action, Adventure, Building, Space",
      developer: "Hello Games",
      physical: false,
    },
    {
      name: "No Man's Sky3",
      link: "https://store.steampowered.com/app/275850/No_Mans_Sky/",
      releaseDate: "12/08/2016",
      price: 59.99,
      discountPrice: 23.99,
      discountPercent: 60,
      gameId: "275850",
      imageUrl:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/header_alt_assets_13.jpg",
      genre: "Action, Adventure, Building, Space",
      developer: "Hello Games",
      physical: true,
    },
  ];

  const digital = true;

  return (
    <div className="max-w-[1200px] mx-auto h-screen py-5 md:py-7 lg:py-10">
      <h1 className="text-center text-base md:text-xl lg:text-3xl py-3 text-darkblue font-bold uppercase">
        Cart
      </h1>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="md:w-[60%]">
          {data.map((item) => (
            <div
              className="flex items-center justify-between bg-white/20 m-3 p-2 rounded"
              key={item.name}
            >
              <div className="flex items-center gap-5">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-14 lg:w-20 h-14 lg:h-20 object-cover"
                />
                <div className="flex flex-col gap-0 lg:gap-6 text-sm md:text-base lg:text-xl text-white font-medium">
                  <h1 className="">{item.name}</h1>
                  {/* <p>{}</p> */}
                  <p className="text-darkblue">
                    $
                    {item.discountPercent === 0
                      ? item.price
                      : item.discountPrice}
                  </p>
                </div>
              </div>
              <RemoveIcon className="size-4 md:size-5 lg:size-6" />
            </div>
          ))}
        </div>
        <div className="py-3 bg-white/20 mx-3 md:mx-0 md:mr-3 md:mt-3 px-5 text-white rounded md:w-[40%]">
          <div className="flex flex-col gap-2">
            <p className="text-sm md:text-base lg:text-xl">Promo code:</p>
            <input
              type="text"
              placeholder="Enter your promo code..."
              className="w-full bg-white text-black text-sm lg:text-base p-1 lg:p-2 outline-none rounded-sm"
            />
          </div>
          {digital === true && (
            <div className="flex flex-col gap-2 mt-3">
              <p className="text-sm md:text-base lg:text-xl">Address:</p>
              <input
                type="text"
                placeholder="Enter your address..."
                className="w-full bg-white text-black text-sm lg:text-base p-1 lg:p-2 outline-none rounded-sm"
              />
            </div>
          )}
          <div className="mt-3 flex flex-col gap-1">
            <div className="flex justify-between text-sm md:text-base lg:text-xl">
              <span>Subtotal:</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between text-sm md:text-base lg:text-xl">
              <span>Promo:</span>
              <span>$0.0</span>
            </div>
            <div className="flex justify-between text-sm md:text-base lg:text-xl">
              <span>Subscription:</span>
              <span>$0.0</span>
            </div>
            <div className="flex justify-between text-sm md:text-base lg:text-xl">
              <span>Transfer Fee:</span>
              <span>$0.0</span>
            </div>
            <div className="flex justify-between font-bold text-lg lg:text-2xl my-2">
              <span>Total:</span>
              <span className="text-darkblue">$80.00</span>
            </div>
          </div>
          <Button
            text="CHECKOUT"
            className="w-full h-7 lg:h-10 text-black text-sm lg:text-base rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
