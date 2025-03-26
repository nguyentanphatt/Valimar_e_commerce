"use client";
import GameInfoSection from "@/components/ui/game-info-section";
import ItemPrice from "@/components/ui/item-price";
import ItemSection from "@/components/ui/item-section";
import { ChevronLeft, ChevronRight, Heart, noImage } from "@/constant/image";
import { GameProps } from "@/constant/type";
import { addItemToCart } from "@/lib/actions/auth";
import { getGameById, getGameRelevantByGenre } from "@/services/gameService";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Label from "@/components/ui/label";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const { id } = useParams();
  const gameId = id ? parseInt(id as string) : NaN;
  const [game, setGame] = useState<GameProps>();
  const [relevantGames, setRelevantGames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPhysical, setIsPhysical] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const genreGames = Array.isArray(game?.genre)
    ? game?.genre[0]
    : game?.genre || "";

  const firstGenreOfGame = genreGames.split(",")[0].trim();

  const fetchGameData = async (id: number, firstGenre: string) => {
    try {
      setIsLoading(true);
      const [gameById, relevantGame] = await Promise.all([
        getGameById(id),
        getGameRelevantByGenre(firstGenre),
      ]);
      setGame(gameById);
      setRelevantGames(relevantGame);
    } catch (error) {
      console.error("Failed to load game details", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGameData(gameId, firstGenreOfGame);
  }, [gameId, firstGenreOfGame]);

  const images = [
    game?.imageUrl,
    ...(game?.screenshots?.map((s) => s.image) || []),
  ];

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, nextImage]);

  const handleAddToCart = async (gameId: number, physical: boolean) => {
    try {
      const result = await addItemToCart(gameId, physical);
      if (
        result.message.includes("Game already in cart") ||
        result.message.includes("Failed to add item to cart")
      ) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid user or expired token, please login again");
    }
  };

  return (
    <div className="relative pt-32">
      {isLoading ? (
        <div className="text-white text-center pt-32 h-screen bg-transparent">
          Loading game details...
        </div>
      ) : (
        <div className="opacity-1 animate-fade-in transition duration-500">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-5 items-center justify-center md:px-7 py-5 max-w-[1200px]">
              <div className="relative w-[90%] h-[250px] mb-5 md:mb-0 md:h-[80%] lg:h-[100%] md:w-[100%] md:col-span-1 group">
                <Image
                  src={images[currentIndex] || noImage}
                  alt="Game Image"
                  layout="fill"
                  className="rounded"
                />
                <button className="chevron-button left-2" onClick={prevImage}>
                  <ChevronLeft className="text-white size-6 bg-transparent" />
                </button>
                <button className="chevron-button right-2" onClick={nextImage}>
                  <ChevronRight className="text-white size-6 bg-transparent" />
                </button>
              </div>
              <div className="flex flex-col gap-3 px-5 md:col-span-1 lg:col-span-1 ">
                <Breadcrumbs
                  className="hidden md:flex text-white"
                  itemClasses={{
                    item: "text-white/40 data-[current=true]:text-white/80",
                    separator: "text-white/40",
                  }}
                >
                  <BreadcrumbItem
                    href={`/category/${firstGenreOfGame.toLowerCase()}`}
                  >
                    {firstGenreOfGame}
                  </BreadcrumbItem>
                  <BreadcrumbItem>{game?.name}</BreadcrumbItem>
                </Breadcrumbs>

                <div className="flex items-center md:items-start justify-between w-full">
                  <h1 className="text-white font-semibold text-base md:text-xl lg:text-3xl text-center md:text-start flex-1">
                    {game?.name}
                  </h1>
                  <Heart className="size-4 md:size-6 lg:size-8" />
                </div>
                <p className="text-detail text-white/50">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s,
                </p>
                <div className="flex flex-col gap-3">
                  <p className="text-detail text-white">
                    <span className="text-white/50">Genre:</span>{" "}
                    {game?.genre.split(", ").map((genre, index) => (
                      <Link
                        key={index}
                        href={`/category/${genre.toLowerCase()}`}
                        passHref
                        className=""
                      >
                        <span className="hover:text-darkblue">{genre}</span>
                        {index < game?.genre.split(", ").length - 1 && ", "}
                      </Link>
                    ))}
                  </p>
                  <p className="text-detail text-white">
                    <span className="text-white/50">Developer:</span>{" "}
                    {game?.developer}
                  </p>
                  {game?.physical && (
                    <div className="flex items-center gap-2 text-detail">
                      <p className="text-white/50">Type:</p>
                      <RadioGroup
                        value={isPhysical ? "physical" : "digital"}
                        onValueChange={(value) =>
                          setIsPhysical(value === "physical")
                        }
                        className="flex flex-row text-white"
                      >
                        <div className="flex items-center  space-x-2">
                          <RadioGroupItem
                            value="digital"
                            id="r1"
                            className="border-white"
                          />
                          <p>Digital</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="physical"
                            id="r2"
                            className="border-white"
                          />
                          <p>Physical</p>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                </div>
                <div className="flex md:flex-col items-center md:items-start justify-between gap-0 md:gap-5">
                  <ItemPrice
                    price={game?.price || 0}
                    discountPrice={game?.discountPrice || 0}
                    discountPercent={game?.discountPercent || 0}
                    discountPriceClassname="text-xl md:text-2xl lg:text-3xl"
                    priceClassname="text-lg md:text-xl lg:text-2xl -translate-y-1"
                    discountPercentClassname="h-5 md:h-6 lg:h-7"
                  />
                  <Button
                    text="Add to Cart"
                    className="w-32 h-7 md:w-full md:h-10 md:text-base"
                    onClick={() =>
                      game?.id && handleAddToCart(game.id, isPhysical)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5 md:px-7 pb-4 items-center justify-center max-w-[1200px]">
              <GameInfoSection
                title="Game Description"
                className="md:col-span-3 md:w-full"
              >
                <p className="text-white/50 text-detail text-justify md:px-2 lg:px-7">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s
                </p>
              </GameInfoSection>
              <GameInfoSection
                title="Info"
                className="md:col-span-1 md:w-full md:h-full md:justify-start lg:items-start"
              >
                <div className="grid grid-cols-2 md:flex md:flex-col gap-2 ">
                  <div className="flex flex-col gap-2 col-span-1 text-detail text-white">
                    <p>
                      <span className="text-white/50">Game Mode:</span>{" "}
                      Online/Offline
                    </p>
                    <p>
                      <span className="text-white/50">ReleaseDate:</span>{" "}
                      {game?.releaseDate
                        ? new Date(game.releaseDate).toLocaleDateString()
                        : "N/A"}
                    </p>
                    <p>
                      <span className="text-white/50">Language:</span> English,
                      Japanese
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 col-span-1 text-white text-detail">
                    <p>
                      <span className="text-white/50">Platform:</span>{" "}
                      PC/Console
                    </p>
                    <p>
                      <span className="text-white/50">Achievement:</span> Yes
                    </p>
                    <p>
                      <span className="text-white/50">Controller:</span> Yes
                    </p>
                  </div>
                </div>
              </GameInfoSection>
              <GameInfoSection
                title="Requirement"
                className="h-full md:col-span-2 md:w-full md:h-full md:items-start md:my-0 lg:items-start"
              >
                {game?.requirements.map((requirement) => (
                  <div key={requirement.id} className="">
                    <h1 className="text-darkblue text-sm md:text-base">
                      {requirement.type.toUpperCase()}
                    </h1>
                    <div className="flex flex-col gap-2 py-2 text-detail text-white">
                      {requirement.os && (
                        <p>
                          <span className="text-white/50">System:</span>{" "}
                          {requirement.os}
                        </p>
                      )}
                      {requirement.processor && (
                        <p>
                          <span className="text-white/50">Processor:</span>{" "}
                          {requirement.processor}
                        </p>
                      )}
                      {requirement.memory && (
                        <p>
                          <span className="text-white/50">Memory:</span>{" "}
                          {requirement.memory}
                        </p>
                      )}
                      {requirement.graphics && (
                        <p>
                          <span className="text-white/50">Graphics:</span>{" "}
                          {requirement.graphics}
                        </p>
                      )}
                      {requirement.directX && (
                        <p>
                          <span className="text-white/50">DirectX:</span>{" "}
                          {requirement.directX}
                        </p>
                      )}
                      {requirement.network && (
                        <p>
                          <span className="text-white/50">Network:</span>{" "}
                          {requirement.network}
                        </p>
                      )}
                      {requirement.storage && (
                        <p>
                          <span className="text-white/50">Storage:</span>{" "}
                          {requirement.storage}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </GameInfoSection>
            </div>
          </div>
          <Label title="Similar Games" starSize="hidden md:flex" />
          <div className="lg:flex lg:items-center lg:justify-center overflow-x-auto">
            <ItemSection data={relevantGames} />
          </div>
        </div>
      )}
    </div>
  );
}
