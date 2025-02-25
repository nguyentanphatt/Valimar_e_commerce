"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Wrapper({
  children,
  scrollable = false,
}: {
  children: React.ReactNode;
  scrollable: boolean;
}) {
  const pathname = usePathname();
  const route = ["/signin", "/signup"];
  const isRoute = route.includes(pathname);

  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (Math.abs(currentScrollPos - prevScrollPos) > 100) {
        setScrollingUp(currentScrollPos < prevScrollPos);
        setPrevScrollPos(currentScrollPos);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return !isRoute ? (
    scrollable ? (
      <div
        className={`flex items-center justify-center bg-dark w-full gap-0 md:gap-2 fixed left-0 right-0 z-50 transition-all duration-300 ${
          !scrollingUp ? "top-[-200px]" : "top-0"
        }`}
      >
        {children}
      </div>
    ) : (
      children
    )
  ) : null;
}
