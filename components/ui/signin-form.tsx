"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./button";
import Link from "next/link";
import { userLogin } from "@/lib/actions/auth";
import { GoogleSignInButton } from "./google-signin-button";
import FacebookSignInButton from "./facebook-signin-button";
import { toast } from "sonner";

export const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await userLogin(email, password);
      toast.success("Login Success");
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 md:gap-5 text-sm md:text-base lg:text-xl text-white py-2 md:py-5">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full"
        >
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
          <p className=" self-end text-darkblue md:text-sm lg:text-base">
            Forgot Password ?
          </p>
          <Button
            text="LOG IN"
            className="w-full h-8 md:h-10 lg:h-12 bg-darkblue text-black md:text-base lg:text-lg hover:shadow-[0_0_10px_5px_rgba(0,208,255,0.5)]"
            type="submit"
          />
        </form>
        <p className="md:text-sm lg:text-base">or continue with</p>
        <div className="flex md:flex-col gap-5 md:w-full">
          <GoogleSignInButton />
          <FacebookSignInButton />
        </div>
        <p>
          Don&apos;t have an account yet ?{" "}
          <Link href={"/signup"}>
            <span className="px-1 transition-all duration-300 ease-in-out text-darkblue shadow-[inset_0_0_0_0_rgb(0,208,255)] hover:shadow-[inset_100px_0_0_0_rgb(0,208,255)] hover:text-black">
              Get it now
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};
