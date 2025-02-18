"use client";
import Button from "@/components/ui/Button";
import GameInfoSection from "@/components/ui/GameInfoSection";
import ItemSection from "@/components/ui/ItemSection";
import Label from "@/components/ui/Label";
import { sampleReview } from "@/constant/data";
import { ChevronLeft, ChevronRight, Heart } from "@/constant/image";
import { GameProps } from "@/constant/type";
import { fetchGames, getGameById } from "@/services/gameService";
import {
  BreadcrumbItem,
  Breadcrumbs,
} from "@nextui-org/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export default function Page(){
  const { id } = useParams();
  const gameId = id ? parseInt(id as string) : NaN;
  const [game, setGame] = useState<GameProps>();
  const [data, setData] = useState([]);
  const getGameDetails = async (id: number) => {
    try {
      const response = await getGameById(id);
      setGame(response);
    } catch (error) {
      console.error("Failed to load game details", error);
    }
  };
  const loadGames = async () => {
    try {
      const data = await fetchGames();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to load games", error);
    }
  };
  useEffect(() => {
    loadGames();
    getGameDetails(gameId);
  }, [gameId]);

  const genreGames = Array.isArray(game?.genre)
    ? game?.genre[0]
    : game?.genre || "";
  const firstGenre = genreGames.split(",")[0].trim();
  const similarGames = data
    .filter((game: GameProps) => game.genre.includes(firstGenre))
    .slice(0, 12);

  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(game?.screenshots.length);

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

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-5 items-center justify-center md:px-7 py-5 max-w-[1200px]">
          <div className="relative w-[90%] h-[250px] mb-5 md:mb-0 md:h-[80%] lg:h-[100%] md:w-[100%] md:col-span-1 group">
            <Image
              src={images[currentIndex] || "/default-image.png"}
              alt="Game Image"
              layout="fill"
              className="rounded"
            />

            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
            >
              <ChevronLeft className="text-white size-6 bg-transparent" />
            </button>

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
            >
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
              <BreadcrumbItem href="/category/action">
                {firstGenre}
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s,
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-detail text-white">
                <span className="text-white/50">Genre:</span> {game?.genre}
              </p>
              <p className="text-detail text-white">
                <span className="text-white/50">Developer:</span>{" "}
                {game?.developer}
              </p>
              {game?.physical && (
                <div className="flex items-center gap-2 text-detail">
                  <p className="text-white/50">Type:</p>
                  <div className="flex items-center gap-2 text-white">
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name=""
                        id=""
                        value="digital"
                        className="size-3"
                      />
                      <p className="">Digital</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name=""
                        id=""
                        value="physical"
                        className="size-3"
                      />
                      <p className="">Physical</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex md:flex-col items-center md:items-start justify-between gap-0 md:gap-5">
              <div className="flex pb-2 gap-1 md:gap-2">
                <p className="font-semibold text-base md:text-xl lg:text-2xl text-darkblue">
                  $
                  {game?.discountPercent !== 0
                    ? game?.discountPrice
                    : game.price}
                </p>
                {game?.discountPercent !== 0 && (
                  <>
                    <p className=" uppercase text-xs md:text-sm lg:text-xl line-through text-white/50">
                      ${game?.price}
                    </p>
                    <div className="w-10 md:w-16 h-5 md:h-7 bg-darkblue flex items-center justify-center translate-y-0.5 lg:translate-y-1.5 rounded-sm">
                      <p className="text-xs md:text-sm lg:text-xl">
                        {game?.discountPercent}%
                      </p>
                    </div>
                  </>
                )}
              </div>
              <Button
                size="sm"
                text="Add to Cart"
                className="w-32 h-7 md:w-full md:h-10 md:text-base"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5 md:px-7 items-center justify-center max-w-[1200px]">
          <GameInfoSection
            title="Game Description"
            className="md:col-span-3 md:w-full"
          >
            <p className="text-white/50 text-detail text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s
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
                  {game?.releaseDate}
                </p>
                <p>
                  <span className="text-white/50">Language:</span> English,
                  Japanese
                </p>
              </div>
              <div className="flex flex-col gap-2 col-span-1 text-white text-detail">
                <p>
                  <span className="text-white/50">Platform:</span> PC/Console
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
            className="h-full md:col-span-2 md:w-full md:h-full md:justify-start md:my-0 lg:items-start"
          >
            {game?.requirements.map((requirement) => (
              <div key={requirement.id}>
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
          <GameInfoSection title="Reviews" className="md:col-span-3 md:w-full">
            {sampleReview.map((reviews) => (
              <div
                className="flex items-center gap-5 hover:bg-white/10 hover:rounded-lg p-3 w-full"
                key={reviews.id}
              >
                <Image
                  src={reviews.image}
                  alt="Reviews Image"
                  width={100}
                  height={100}
                  className="rounded-full w-[50px] h-[50px]"
                />
                <div className="flex flex-col ">
                  <h1 className="text-white text-base">
                    {reviews.name}{" "}
                    <span className="text-white/30 text-sm">
                      post in {reviews.date}
                    </span>
                  </h1>
                  <p className="text-white/80 text-justify text-sm truncate w-[200px] md:text-wrap md:w-full">
                    {reviews.content}
                  </p>
                </div>
              </div>
            ))}
            <div className="bg-white/30 rounded-lg p-2 flex items-center gap-2 w-full my-2">
              <div className="w-[300px] md:w-full">
                <input
                  placeholder="Comment"
                  className="bg-white rounded-lg h-7 text-sm px-1 w-full outline-none"
                />
              </div>
            </div>
          </GameInfoSection>
        </div>
      </div>
      <Label title="Similar Games" starSize="hidden md:flex" />
      <div className="lg:flex lg:items-center lg:justify-center overflow-x-auto">
        <ItemSection data={similarGames} />
      </div>
    </div>
  );
};

