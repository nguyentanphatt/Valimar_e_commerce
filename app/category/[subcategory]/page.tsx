"use client";
import Label from "@/components/ui/Label";
import { filterMenu01, filterMenu02, subcategories } from "@/constant/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import Button from "@/components/ui/button";
import { fetchGames } from "@/services/gameService";
import { GameProps } from "@/constant/type";
import GameCard from "@/components/ui/game-card";
import { Menu } from "@/constant/image";
import FilterMenu from "@/components/ui/filter-menu";
import Link from "next/link";
import { slug } from "@/lib/slug";

export default function Page() {
  const [isHover, setIsHover] = useState(false);
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const [scope, animate] = useAnimate();
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(10);
  const [showMenu, setShowMenu] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const { subcategory } = useParams();

  const category = subcategories.find(
    (category) => category.href === `/category/${subcategory}`
  );

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
    if (animation.current) {
      animation.current.speed = 0.5;
    }
  }, [animate, scope]);

  useEffect(() => {
    if (animation.current) {
      if (isHover) {
        animation.current.speed = 0;
        animation.current.pause();
      } else {
        animation.current.play();
        animation.current.speed = 0.5;
      }
    }
  }, [isHover]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await fetchGames();
        setData(data);
      } catch (error) {
        console.error("Failed to load games", error);
      }
    };
    loadGames();
  }, []);
  const categoryFind = Array.isArray(subcategory)
    ? subcategory[0]
    : subcategory || "";
  const gameByCategory = data.filter((game: GameProps) =>
    game.genre.toLowerCase().includes(categoryFind)
  );

  const feature = gameByCategory
    .filter(
      (game: GameProps) => new Date(game.releaseDate) > new Date("2023-01-01")
    )
    .slice(0, 8);

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

  const filterGames = gameByCategory.filter((game: GameProps) => {
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
    <div className="mt-44 md:mt-0 md:py-20 lg:py-32">
      <div className="flex flex-col items-center">
        <h1 className="text-title">{category?.name}</h1>
        <p className="subtext">{category?.description}</p>
      </div>
      <Label title="Featured Game" className="justify-center px-10 text-3xl" />
      <div className="flex mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          ref={scope}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="flex flex-none gap-5 pr-24"
        >
          {Array.from({ length: 2 }).map((_, index) => (
            <React.Fragment key={index}>
              {feature.map((game: GameProps) => (
                <Tooltip
                  key={game.id}
                  placement="right"
                  content={
                    <div className="p-5 bg-black rounded-lg flex flex-col gap-1 md:gap-5 shadow-[0_0_10px_5px_rgba(0,208,255,0.2)]">
                      <Image
                        src={game.imageUrl}
                        alt="Per"
                        width={300}
                        height={100}
                      />
                      <h1 className="font-bold text-sm md:text-xl text-white">
                        {game.name}
                      </h1>
                      <p className="text-white/50 text-xs md:text-base">
                        Release Date:{" "}
                        {game?.releaseDate
                          ? new Date(game.releaseDate).toLocaleDateString()
                          : "N/A"}
                      </p>
                      <p className="text-white/50 text-xs md:text-base">
                        Gerne: {game.genre}
                      </p>
                      <div className="flex justify-between">
                        <p className="text-sm md:text-xl text-darkblue">
                          ${game.price}
                        </p>
                        <Link
                          href={`/game/${game.id}/${slug(game.name)}`}
                          passHref
                        >
                          <Button
                            text="See more"
                            className="w-16 text-xs h-5 md:w-24 md:h-8 md:text-sm"
                          />
                        </Link>
                      </div>
                    </div>
                  }
                >
                  <div className="w-[150px] h-[100px] md:w-[300px] md:h-[200px] skew-y-12 hover:skew-y-0 transition duration-200 bg-white">
                    <Image
                      src={game.imageUrl}
                      alt="Header Image"
                      fill
                      sizes="(max-width: 768px) 150px, 300px"
                    />
                  </div>
                </Tooltip>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      <Label title="Game List" className="justify-center px-10 text-3xl" />
      <div className="max-w-[1440px] mx-auto flex flex-col relative md:grid md:grid-cols-7 lg:grid-cols-6 md:gap-5 md:px-2 lg:px-5">
        <div
          className={`fixed top-4 right-2 bg-darkblue/50 rounded-full size-8 flex md:hidden items-center justify-center backdrop-blur-sm shadow-lg transition-opacity duration-300 ${
            showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={onOpen}
        >
          <Menu className="text-white" />
        </div>
        <Drawer isOpen={isOpen} onClose={onOpenChange} placement="bottom">
          <DrawerContent className="bg-black ">
            <DrawerHeader className="text-white">Filter</DrawerHeader>
            <DrawerBody>
              <div className="flex flex-col gap-5 overflow-y-hidden">
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
        <div className=" hidden md:flex md:flex-col md:col-span-2 lg:col-span-1 md:gap-5 py-2 ">
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
