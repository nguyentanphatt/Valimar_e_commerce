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

const Navbar = () => {
  const pathname = usePathname();
  const [isCategoryActive, setIsCategoryActive] = useState(false);

  const navItems = [
    { text: "Discovery", href: "/" },
    { text: "Category", href: "/category" },
    { text: "Subscription", href: "/subscription" },
  ];

  const subcategories = [
    { name: "Action", href: "/category/action" },
    { name: "Horror", href: "/category/horror" },
    { name: "Adventure", href: "/category/adventure" },
    { name: "Sci-Fi", href: "/category/sci-fi" },
  ];

  

  const handleDropdownToggle = () => {
    setIsCategoryActive(!isCategoryActive);
  };

  return (
    <nav className="bg-white/10 md:bg-dark flex flex-row items-center justify-center gap-10 md:gap-5 lg:gap-8 py-3">
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
                  className="bg-black text-white font-medium rounded-br-lg rounded-bl-xl transition shadow-[0_0_10px_5px_rgba(0,208,255,0.5)]"
                  onAction={() => setIsCategoryActive(false)}
                >
                  {subcategories.map((sub, subIndex) => (
                    <DropdownItem key={subIndex}>
                      <Link href={sub.href}>
                        <span className="group-hover:text-darkblue">
                          {sub.name}

                          <span
                            className={`absolute left-0 md:bottom-1 w-0 h-0.5 bg-darkblue transition-all duration-300 group-hover:w-[50%]`}
                          ></span>
                        </span>
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link href={item.href}>
                <span
                  className={`relative group-hover:text-darkblue ${
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
