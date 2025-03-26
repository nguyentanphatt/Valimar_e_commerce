"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { subcategories } from "@/constant/data";

const NavbarDropdown = ({ text }: { text: string }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setTimeout(() => setIsOpen(false), 150);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <span
        className={`relative cursor-pointer ${isOpen || pathname.startsWith("/category") ? "text-darkblue" : "group-hover:text-darkblue"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {text}
        <span
          className={`absolute left-0 -bottom-1 md:-bottom-2 lg:-bottom-2 w-0 h-0.5 md:h-1 lg:h-1 bg-darkblue transition-all duration-300 ${
            isOpen || pathname.startsWith("/category") ? "w-full" : "group-hover:w-full"
          }`}
        ></span>
      </span>
      {isOpen && (
        <div className="absolute top-full -translate-x-1/3 mt-2 w-72 md:w-96 bg-black text-white font-medium rounded-lg z-50 shadow-lg p-4">
          <div className="grid grid-cols-3 gap-5">
            {Array.from({ length: 3 }, (_, col) => (
              <div key={col} className="flex flex-col">
                {subcategories.slice(col * 5, col * 5 + 5).map((sub, index) => (
                  <p key={index} className="mb-2">
                    <Link href={sub.href}>
                      <span className="text-lg hover:text-darkblue transition-all duration-200">{sub.name}</span>
                    </Link>
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
