"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Updated import
import React from "react";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  const navItems = [
    { text: "Discovery", href: "/" },
    { text: "Category", href: "/category" },
    { text: "Subscription", href: "/subscription" },
  ];

  return (
    <nav className="bg-white/10 md:bg-dark flex flex-row items-center justify-center gap-10 md:gap-5 lg:gap-8 py-3">
      <ul className="flex flex-row items-center gap-5">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="relative text-white font-medium md:font-bold text-sm md:text-xl lg:text-3xl group"
          >
            <Link href={item.href}>
              <span className={`relative group-hover:text-darkblue ${
                    pathname === item.href ? "text-darkblue" : ""
                  }` }>
                {item.text}
                <span
                  className={`absolute left-0 -bottom-1 md:-bottom-2 lg:-bottom-2 w-0 h-0.5 md:h-1 lg:h-1 bg-darkblue transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? "w-full" : ""
                  }`}
                ></span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
