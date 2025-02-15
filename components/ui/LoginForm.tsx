"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { FacebookIcon, GoogleIcon } from "@/constant/image";

interface FormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        alert(result.error);
      } else {
        router.push("/userinfo");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-red-500"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-red-500"
        />
      </label>
      <button type="submit">Sign In</button>
    </form> */}
      <div className="flex flex-col justify-center items-center gap-3 md:gap-5 text-sm md:text-base lg:text-xl text-white py-2 md:py-5">
        <p className="self-start">Email</p>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg w-full outline-none text-black py-1 px-2"
        />
        <p className="self-start">Password</p>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg w-full outline-none text-black py-1 px-2"
        />
        <p className=" self-end text-darkblue">Forgot Password ?</p>
        <Button
          text="LOG IN"
          className="w-full h-8 md:h-10 lg:h-12  bg-darkblue text-black md:text-base lg:text-lg"
        />
        <p>or continue with</p>

        <div className="flex md:flex-col gap-5 md:w-full">
          <div className="size-10 bg-white flex items-center justify-center md:justify-start md:p-3 rounded-lg md:w-full md:h-10 lg:h-12">
            <GoogleIcon className="size-5 md:size-8 md:mr-2 rounded-full " />
            <p className="hidden md:block text-black text-base lg:text-lg">
              Continue with google
            </p>
          </div>
          <div className="size-10 bg-[#1877F2] flex items-center justify-center md:justify-start md:p-3 rounded-lg md:w-full md:h-10 lg:h-12">
            <FacebookIcon className="size-5 md:size-8 md:mr-2 rounded-full " />
            <p className="hidden md:block text-white text-base lg:text-lg">
              Continue with facebook
            </p>
          </div>
        </div>
        <p>
          Don't have an account yet ?{" "}
          <span className="text-darkblue">Get it now</span>
        </p>
      </div>
    </div>
  );
};
