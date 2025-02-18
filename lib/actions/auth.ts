"use server";

import { signIn, signOut } from "../auth";

export const login = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const googleLogin = async() => {
  await signIn("google", {redirectTo: "/"})
}

export const facebookLogin = async() => {
  await signIn("facebook", {redirectTo: "/"})
}

export const logout = async () => {
  await signOut({ redirectTo: "/signin" });
};

export const userLogin = async (email: string, password: string) => {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result || result.error) {
      throw new Error(result?.error || "Login failed");
    }

    return result;
  } catch (error: unknown) {
    console.log("Login error:", error);

    if (error instanceof Error && error.cause) {
      const cause = error.cause;
      let causeMessage = "";

      if (
        typeof cause === "object" &&
        cause !== null &&
        "err" in cause &&
        cause.err instanceof Error
      ) {
        causeMessage = cause.err.message;
      } else if (
        typeof cause === "object" &&
        cause !== null &&
        "message" in cause
      ) {
        causeMessage = (cause as { message: string }).message;
      } else {
        causeMessage = String(cause);
      }

      console.log("Login cause error:", causeMessage);
      throw new Error(causeMessage);
    } else {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    }
  }
};

