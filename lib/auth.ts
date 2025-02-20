import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/services/api";
import isAxiosError from "./error";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
          try {
            const res = await api.post("/user/login", {
              email: credentials.email,
              password: credentials.password,
            });
        
            const { user, token } = res.data;
        
            if (!user) {
              throw new Error("User not found");
            }
        
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              token,
            };
          } catch (error: unknown) {
            console.error("Authorize error:", error);
          
            if (isAxiosError(error)) {
              console.error("Error response:", error.response?.data);
              const errorMessage = (error.response?.data as { error?: string })?.error || "Login failed";
              return Promise.reject(new Error(errorMessage));
            } else if (error instanceof Error) {

              console.error("Error message:", error.message);
              return Promise.reject(new Error(error.message || "An unexpected error occurred"));
            } else {

              console.error("Unknown error", error);
              return Promise.reject(new Error("An unexpected error occurred"));
            }
          }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({user, account}){
      if(account?.provider !== "credentials") {
        try {
          await api.post("/user/oathlogin", {
            email: user.email,
            name: user.name,
            image: user.image,
            provider: account?.provider
          })
        } catch (error) {
          console.error("Error saving OAuth user:", error);
          return false;
        }
      }
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    }
  },
});
