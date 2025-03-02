"use client";
import { ItemGridSectionProps } from "@/constant/type";
import React, { useEffect, useState } from "react";
import ItemCard from "./item-card";
import Button from "./button";

export default function ItemGridSection({ data }: ItemGridSectionProps) {
  const [rows, setRows] = useState(3);
  const [itemsPerRow, setItemsPerRow] = useState(2);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth >= 1440) setItemsPerRow(6);
      else if (window.innerWidth >= 1200)
        setItemsPerRow(4);
      else if (window.innerWidth >= 768)
        setItemsPerRow(3);
      else setItemsPerRow(2);
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  const visibleItems = rows * itemsPerRow;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-5 lg:gap-8 mt-2">
      {data.slice(0, visibleItems).map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          name={item.name}
          price={item.price}
          discountPrice={item.discountPrice}
          discountPercent={item.discountPercent}
        />
      ))}
      <div className="flex items-center justify-center mt-2 col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-6">
        {visibleItems < data.length && (
          <Button
            size="sm"
            text="See more"
            className="md:w-20 md:h-6 lg:w-28 lg:h-8 lg:text-base hover:shadow-[0_0_10px_5px_rgba(0,208,255,0.5)]"
            onClick={() => setRows(rows + 3)}
          />
        )}
      </div>
    </div>
  );
}
