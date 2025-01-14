"use client";
import Label from "@/components/ui/Label";
import { subcategories } from "@/constant/data";
import { hollow_banner, hollowknight } from "@/constant/image";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";

const page = () => {
  const { subcategory } = useParams();
  const category = subcategories.find(
    (category) => category.href === `/category/${subcategory}`
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

  const logos = [
    { name: "Quantum" },
    { name: "Acme Corp" },
    { name: "Echo Valley" },
    { name: "Pulse" },
    { name: "Outside" },
    { name: "Apex" },
    { name: "Celestial" },
    { name: "Twice" },
  ];

  return (
    <div className="py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-darkblue font-bold">{category?.name}</h1>
        <p className="text-white/50 text-2xl font-medium py-5">
          {category?.description}
        </p>
      </div>
      <Label title="Featured Game" className="justify-start px-10 text-3xl" />
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
              {logos.map((log) => (
                <div
                  key={log.name}
                  className="w-[300px] h-[200px] skew-y-12 hover:skew-y-0 transition duration-200 bg-white"
                >
                  <p className="text-black">{log.name}</p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default page;
