"use client";
import Button from "@/components/ui/button";
import FilterMenu from "@/components/ui/filter-menu";
import GameCard from "@/components/ui/game-card";
import SearchBar from "@/components/ui/search-bar";
import { filterMenu01, filterMenu02 } from "@/constant/data";
import { Menu } from "@/constant/image";
import { GameProps } from "@/constant/type";
import { searchGames } from "@/services/gameService";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchPages() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [visibleItems, setVisibleItems] = useState(10);
  const [showMenu, setShowMenu] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (query.length < 1) {
      setResult([]);
      return;
    }
    const fetchGames = async (query: string) => {
      try {
        const response = await searchGames(query);
        setResult(response);
      } catch (error) {
        console.error("Error searching games:", error);
        setResult([]);
      }
    };
    const debounce = setTimeout(() => fetchGames(query), 500);
    return () => clearTimeout(debounce);
  }, [query]);
  const handleSeeMore = () => {
    setVisibleItems((prev) => prev + 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFilter = (values: string[]) => {
    setFilter(values);
  };

  const filterGames = result.filter((game: GameProps) => {
    if (filter.includes("newrelease")) {
      return filter.some(
        () => new Date(game.releaseDate) > new Date("2024-01-01")
      );
    }
    if (filter.includes("discount")) {
      return filter.some(() => game.discountPercent > 0);
    }
    if (filter.length > 0) {
      const gameGenres = game.genre
        .toLowerCase()
        .split(", ")
        .map((g) => g.trim());
      return filter.every((f) => gameGenres.includes(f.toLowerCase()));
    }
    return true;
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="py-24 max-w-[1440px] mx-auto">
      <div className="flex items-center justify-center py-5">
        <SearchBar />
      </div>

      <div className="flex flex-col relative md:grid md:grid-cols-7 lg:grid-cols-6 md:gap-5 md:px-2 lg:px-5">
        <div
          className={`fixed top-4 right-2 bg-darkblue/50 rounded-full size-8 flex md:hidden items-center justify-center backdrop-blur-sm shadow-lg transition-opacity duration-300 ${
            showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={onOpen}
        >
          <Menu className="text-white" />
        </div>
        <Drawer isOpen={isOpen} onClose={onOpenChange} placement="bottom">
          <DrawerContent className="bg-black">
            <DrawerHeader className="text-white">Filter</DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col gap-5">
                <FilterMenu
                  content={filterMenu01}
                  title="Your Choice"
                  onChange={handleFilter}
                />
                <FilterMenu
                  content={filterMenu02}
                  title="Genre"
                  onChange={handleFilter}
                  className="h-[300px] overflow-y-auto pb-5"
                />
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <div className="hidden md:flex md:flex-col md:col-span-2 lg:col-span-1 md:gap-5 py-2 ">
          <FilterMenu
            content={filterMenu01}
            title="Your Choice"
            onChange={handleFilter}
          />
          <FilterMenu
            content={filterMenu02}
            title="Genre"
            onChange={handleFilter}
          />
        </div>
        <div className=" pb-6 md:col-span-5 ">
          <div className="bg-white/10 px-2 m-2">
            <p className="text-white/80">{result.length} games founds</p>
          </div>
          {filterGames.slice(0, visibleItems).map((item: GameProps) => (
            <GameCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              discountPercent={item.discountPercent}
              discountPrice={item.discountPrice}
              imageUrl={item.imageUrl}
              developer={item.developer}
              gameId={item.gameId}
              genre={item.genre}
              link={item.link}
              physical={item.physical}
              releaseDate={item.releaseDate}
              requirements={item.requirements}
              screenshots={item.screenshots}
            />
          ))}
          <div className="flex items-center justify-center">
            {visibleItems < filterGames.length && (
              <Button
                size="sm"
                text="See more"
                className="md:w-20 md:h-6 lg:w-28 lg:h-8 lg:text-base hover:shadow-[0_0_10px_5px_rgba(0,208,255,0.5)]"
                onClick={handleSeeMore}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
