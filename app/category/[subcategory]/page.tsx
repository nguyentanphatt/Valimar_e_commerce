"use client";
import Label from "@/components/ui/Label";
import { games, subcategories } from "@/constant/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { Accordion, AccordionItem, Tooltip } from "@nextui-org/react";
import ItemCard from "@/components/ui/ItemCard";
import Button from "@/components/ui/Button";

const page = () => {
  const { subcategory } = useParams();
  const category = subcategories.find(
    (category) => category.href === `/category/${subcategory}`
  );

  const gameBySubcategory = games.filter(
    (item) => item.genre.toLowerCase() === subcategory
  );

  const [isHover, setIsHover] = useState(false);
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const [scope, animate] = useAnimate();

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
  
  return (
    <div className="py-5 md:py-14 lg:py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-xl md:text-3xl lg:text-4xl text-darkblue font-bold">
          {category?.name}
        </h1>
        <p className="text-white/50 text-sm md:text-xl lg:text-2xl font-medium py-2 md:py-5">
          {category?.description}
        </p>
      </div>
      <Label
        title="Featured Game"
        className="justify-center md:justify-start px-10 text-3xl"
      />
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
              {gameBySubcategory.slice(0, 5).map((game) => (
                <Tooltip
                  key={game.name}
                  placement="right"
                  content={
                    <div className="p-5 bg-black rounded-lg flex flex-col gap-1 md:gap-5 shadow-[0_0_10px_5px_rgba(0,208,255,0.2)]">
                      <Image
                        src={game.image_url}
                        alt="Per"
                        width={300}
                        height={100}
                      />
                      <h1 className="font-bold text-sm md:text-xl text-white">
                        {game.name}
                      </h1>
                      <p className="text-white/50 text-xs md:text-base">
                        Release Date: {game.release_date}
                      </p>
                      <p className="text-white/50 text-xs md:text-base">
                        Gerne: {subcategory}
                      </p>
                      <p className="text-sm md:text-xl text-white">
                        Price{" "}
                        <span className="text-darkblue">{game.price}</span>
                      </p>
                      <Button
                        size="sm"
                        text="See more"
                        className="md:w-24 md:h-8 md:text-base hover:shadow-[0_0_10px_5px_rgba(0,208,255,0.5)]"
                      />
                    </div>
                  }
                >
                  <div className="w-[150px] h-[100px] md:w-[300px] md:h-[200px] skew-y-12 hover:skew-y-0 transition duration-200 bg-white">
                    <Image src={game.image_url} alt="Per" fill />
                  </div>
                </Tooltip>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      <Label
        title="Game List"
        className="justify-center md:justify-start px-10 text-3xl"
      />
      <div className="grid grid-cols-6 gap-4">
        <div className="">
          <Accordion variant="splitted" selectionMode="multiple" itemClasses={{}}>
            <AccordionItem
              key="1"
              aria-label="Your Choice"
              title="Your Choice"
              className="bg-white"
            >
              aa
            </AccordionItem>
            <AccordionItem key="2" aria-label="Tags" title="Tags" className="bg-white">
              bb
            </AccordionItem>
            <AccordionItem key="3" aria-label="Genre" title="Genre" className="bg-white">
              bb
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-4 text-white">aaaaa</div>
      </div>
     
    </div>
  );
};

export default page;
