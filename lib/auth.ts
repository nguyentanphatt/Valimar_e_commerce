import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import api from "@/services/api";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
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

          const {user} = res.data;

          if (user && user.id && user.email && user.name) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
            };
          } else {
            throw new Error("Invalid credentials or missing data");
          }
        } catch (error) {
          console.error("Authorize error:", error);
          throw new Error("Login failed");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
    },
  },
});
