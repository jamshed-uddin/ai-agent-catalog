import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Google from "next-auth/providers/google";

export const {} = NextAuth({
  ...authConfig,
  providers: [Google],
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
});
