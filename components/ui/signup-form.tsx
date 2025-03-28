"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./button";
import Link from "next/link";
import { userSignUp } from "@/services/userService";
import { GoogleSignInButton } from "./google-signin-button";
import FacebookSignInButton from "./facebook-signin-button";
import { toast } from "sonner";
import { Checkbox } from "./checkbox";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])[a-zA-Z\d!@#$%^&*()\-_=+{};:,<.>.]{8,12}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password should have 8-12 characters, at least 1 number, 1 uppercase letter, and 1 special character");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid Email! Please enter a correct email format.");
      return;
    }
    if (confirmPassword !== password) {
      toast.error("Confirm Password is not the same");
      return;
    }
    if (!isSelected) {
      toast.error("Please agree to our terms and conditions ");
      return;
    }

    try {
      await userSignUp(name, email, password);
      toast.success("Success create account");
      router.push("/signin");
    } catch (error: unknown) {
      if (error instanceof Error) {
        const axiosError = error as {
          response?: { data?: { error?: string } };
        };
        if (axiosError.response && axiosError.response.data?.error) {
          toast.error(axiosError.response.data.error);
        } else {
          toast.error(
            error.message || "An unexpected error occurred. Please try again."
          );
        }
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 md:gap-2 lg:gap-3 text-sm md:text-base lg:text-xl text-white py-2 md:py-5">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full"
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
          <p className="self-start">Your name</p>
          <input
            type="text"
            name="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <p className="self-start">Password Confirm</p>
          <input
            type="password"
            name="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-lg w-full outline-none text-black py-1 px-2"
          />
          <div className="flex gap-2 items-start">
            <Checkbox
              checked={isSelected}
              onCheckedChange={(checked) => setIsSelected(checked === true)}
              className="mt-1"
            />
            <span className="text-white md:text-sm lg:text-base">
              I have read and agree with Terms of Service and our Private Policy
            </span>
          </div>
          <Button
            text="SIGN UP"
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
          Already have an account?{" "}
          <Link href={"/signin"}>
            <span className="px-1 transition-all duration-300 ease-in-out text-darkblue shadow-[inset_0_0_0_0_rgb(0,208,255)] hover:shadow-[inset_100px_0_0_0_rgb(0,208,255)] hover:text-black">
              Login now
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};
