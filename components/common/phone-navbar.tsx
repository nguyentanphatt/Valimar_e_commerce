"use server";
import Link from "next/link";
import React from "react";
import AccountSection from "../ui/account-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBell,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { getUserDetail } from "@/lib/actions/auth";

export default async function PhoneNavbar() {
  let userDetail = null;

  try {
    userDetail = await getUserDetail();
    console.log(userDetail);
  } catch (error) {
    console.log(error);
    
    userDetail = null;
  }
  return (
    <div>
      <div className="fixed md:hidden bottom-0 left-0 right-0 bg-black/60 translate-x-0 z-50 py-3 backdrop-blur">
        <ul className="flex justify-evenly">
          <li>
            <Link href="/" className="flex flex-col">
              <FontAwesomeIcon icon={faHome} className="text-white size-7" />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex flex-col">
              <FontAwesomeIcon icon={faBell} className="text-white size-7" />
            </Link>
          </li>
          <li>
            <Link
              href={userDetail ? `/cart/${userDetail.id}` : "/login"}
              className="flex flex-col"
            >
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-white size-7"
              />
            </Link>
          </li>
          <li>
            <AccountSection className="block size-7 md:hidden" />
          </li>
        </ul>
      </div>
    </div>
  );
}
