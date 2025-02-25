"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import { subcategories } from "@/constant/data";

const Navbar = () => {
  const pathname = usePathname();
  const [isCategoryActive, setIsCategoryActive] = useState(false);

  const navItems = [
    { text: "Discovery", href: "/" },
    { text: "Category", href: "/category" },
    { text: "Subscription", href: "/subscription" },
  ];


  const handleDropdownToggle = () => {
    setIsCategoryActive(!isCategoryActive);
  };

  return (
    <nav className="w-full bg-white/10 md:bg-transparent flex flex-row items-center justify-center gap-10 md:gap-5 lg:gap-8 py-3">
      <ul className="flex flex-row items-center gap-5">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="relative text-white font-medium md:font-bold text-sm md:text-xl lg:text-3xl group"
          >
            {item.text === "Category" ? (
              <Dropdown>
                <DropdownTrigger>
                  <span
                    className={`relative cursor-pointer ${
                      isCategoryActive || pathname.startsWith("/category")
                        ? "text-darkblue"
                        : "group-hover:text-darkblue"
                    }`}
                    onClick={handleDropdownToggle}
                  >
                    {item.text}
                    <span
                      className={`absolute left-0 -bottom-1 md:-bottom-2 lg:-bottom-2 w-0 h-0.5 md:h-1 lg:h-1 bg-darkblue transition-all duration-300 ${
                        isCategoryActive || pathname.startsWith("/category")
                          ? "w-full"
                          : "group-hover:w-full"
                      }`}
                    ></span>
                  </span>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Categories"
                  variant="flat"
                  className="bg-black text-white font-medium rounded-br-lg rounded-bl-xl transition shadow-[0_0_10px_5px_rgba(0,208,255,0.2)]"
                  onAction={() => setIsCategoryActive(false)}
                >
                  <DropdownItem key="grid-menu" className="pl-6 pr-5">
                    <div className="grid grid-cols-3 md:w-[350px] lg:w-[430px] gap-5">
                      <div className="flex flex-col items-center ">
                        <h3 className="font-bold text-base md:text-lg text-darkblue mb-1">Discovery</h3>
                        {subcategories.slice(0, 3).map((sub, index) => (
                          <p key={index} className="mb-2">
                            <Link href={sub.href}>
                              <span className="text-sm md:text-base hover:text-darkblue transition-all duration-200">
                                {sub.name}
                              </span>
                            </Link>
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3 className="font-bold text-base md:text-lg text-darkblue mb-1">Gerne</h3>
                        {subcategories.slice(3, 10).map((sub, index) => (
                          <p key={index} className="mb-2">
                            <Link href={sub.href}>
                              <span className="text-sm md:text-base hover:text-darkblue transition-all duration-200">
                                {sub.name}
                              </span>
                            </Link>
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="h-7 mb-1.5"></div>
                        {subcategories.slice(10, 17).map((sub, index) => (
                          <p key={index} className="mb-2">
                            <Link href={sub.href}>
                              <span className="text-sm md:text-base hover:text-darkblue transition-all duration-200">
                                {sub.name}
                              </span>
                            </Link>
                          </p>
                        ))}
                      </div>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link href={item.href}>
                <span
                  className={`relative group-hover:text-darkblue  ${
                    pathname === item.href ? "text-darkblue" : ""
                  }`}
                >
                  {item.text}
                  <span
                    className={`absolute left-0 -bottom-1 md:-bottom-2 lg:-bottom-2 w-0 h-0.5 md:h-1 lg:h-1 bg-darkblue transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? "w-full" : ""
                    }`}
                  ></span>
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
