"use client";

import { GoogleIcon } from "@/constant/image";
import { googleLogin } from "@/lib/actions/auth";

export const GoogleSignInButton = () => {
  return (
    <div
      onClick={() => googleLogin()}
      className="size-10 bg-white flex items-center justify-center md:justify-start md:p-3 rounded-lg md:w-full md:h-10 lg:h-12 hover:bg-gray-200"
    >
      <GoogleIcon className="size-5 md:size-8 md:mr-2 rounded-full " />
      <p className="hidden md:block text-black text-base lg:text-lg">
        Continue with google
      </p>
    </div>
  );
};
