"use server";

import { addToCart } from "@/services/cartService";
import { auth, signIn, signOut } from "../auth";
import { userDetail } from "@/services/userService";

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

export const addItemToCart = async (
  gameId: number,
  physical: boolean
): Promise<{ success: boolean; message: string }> => {
  const session = await getUser();
  const userEmail = session?.user?.email
  const userInfo = await userDetail(userEmail || "")
  
  if (!userInfo.id) {
    return { success: false, message: "User not found" };
  }

  try {
    const response: { success: boolean; message?: string } = await addToCart(
      userInfo.id,
      gameId,
      physical
    );

    if (!response?.success) {
      throw new Error(response?.message || "Failed to add item to cart");
    }

    return {
      success: true,
      message: response.message || "Item added to cart!",
    };
  } catch (error) {
    console.error("Add to Cart Error:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : "Invalid user or expired token";
    return {
      success: false,
      message: errorMessage,
    };
  }
};

export async function getUser() {
    const session = await auth()
    return session || null
}

export const getUserDetail = async () => {
  const session = await getUser();
  if (session?.user?.email) {
    const userdetail = await userDetail(session?.user?.email);
    return userdetail
  } else {
    throw new Error("User email is undefined");
  }
}

export const getUserId = async () => {
  const session = await getUser();
  if (session?.user?.email) {
    const userdetail = await userDetail(session?.user?.email);
    return userdetail
  } else {
    throw new Error("User email is undefined");
  }
}


