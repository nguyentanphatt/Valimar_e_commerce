"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { subcategories } from "@/constant/data";
const NavbarDropdown = ({text} : {text:string}) => {
  const pathname = usePathname();
  const [isCategoryActive, setIsCategoryActive] = useState(false);

  const handleDropdownToggle = () => {
    setIsCategoryActive(!isCategoryActive);
  };
  return (
    <div>
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
            {text}
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
          className=" bg-black text-white font-medium rounded-br-lg rounded-bl-xl transition shadow-[0_0_10px_5px_rgba(0,208,255,0.2)]"
          onAction={() => setIsCategoryActive(false)}
        >
          <DropdownItem key="grid-menu" className="pl-6 pr-5 ">
            <div className="grid grid-cols-3 md:w-[350px] lg:w-[450px] gap-5">
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold text-lg text-darkblue mb-1">
                  Gerne
                </h3>
                {subcategories.slice(0, 5).map((sub, index) => (
                  <p key={index} className="mb-2">
                    <Link href={sub.href}>
                      <span className="text-lg hover:text-darkblue transition-all duration-200">
                        {sub.name}
                      </span>
                    </Link>
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-7 mb-1.5"></div>
                {subcategories.slice(5, 10).map((sub, index) => (
                  <p key={index} className="mb-2">
                    <Link href={sub.href}>
                      <span className="text-lg hover:text-darkblue transition-all duration-200">
                        {sub.name}
                      </span>
                    </Link>
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-7 mb-1.5"></div>
                {subcategories.slice(10, 15).map((sub, index) => (
                  <p key={index} className="mb-2">
                    <Link href={sub.href}>
                      <span className="text-lg hover:text-darkblue transition-all duration-200">
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
    </div>
  );
};

export default NavbarDropdown;
