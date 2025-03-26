"use client";
import { twMerge } from "tailwind-merge";
import Button from "./button";
import { useEffect, useState } from "react";
import { searchGames } from "@/services/gameService";
import { GameProps } from "@/constant/type";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { slug } from "@/lib/slug";

export default function SearchBar({ className }: { className?: string }) {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    setSearch("");
  }, [query]);

  useEffect(() => {
    if (search.length < 1) {
      setResult([]);
      return;
    }
    const fetchGames = async (search: string) => {
      try {
        const response = await searchGames(search);
        setResult(response);
      } catch (error) {
        console.error("Error searching games:", error);
        setResult([]);
      }
    };
    const debounce = setTimeout(() => fetchGames(search), 500);
    return () => clearTimeout(debounce);
  }, [search]);

  const handleSearch = () => {
    if (search.length > 0) {
      router.push(`/search?query=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      <div className="md:flex flex-row md:gap-2">
        <div
          className={twMerge(
            "border-2 border-white hover:border-darkblue rounded-full bg-dark",
            className
          )}
        >
          <input
            type="text"
            className="bg-dark w-full md:w-[430px] lg:w-[700px] lg:h-10 rounded-full outline-none text-white px-5"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <Button
          size="sm"
          text="Search"
          className={`hidden md:flex md:h-7 lg:h-10 lg:w-20 lg:text-base ${
            search.length > 0
              ? "hover:shadow-[0_0_10px_5px_rgba(0,208,255,0.5)]"
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleSearch}
          disabled={search.length === 0}
        />
      </div>
      {result.length > 0 && (
        <div className="absolute h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[500px] w-full overflow-y-auto scrollbar-hide p-2 md:mt-2 bg-gray-700 z-40 rounded-lg transition ease-in-out">
          {result.map((game: GameProps) => (
            <Link href={`/game/${game.id}/${slug(game.name)}`} key={game.id} onClick={() => setSearch("")}>
              <div className="flex flex-col ">
                <div className="flex items-center gap-2 py-3 hover:bg-white/20">
                  <Image
                    src={game.imageUrl}
                    width={100}
                    height={100}
                    alt="Game Search"
                  />
                  <h1 className="text-white lg:text-base">{game.name}</h1>
                </div>
                {result.length > 1 && <span className="w-full border border-darkblue bg-darkblue"></span>}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
