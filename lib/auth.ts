import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
});

export async function requireSession() {
  const session = await auth.api.getSession({
      headers: await headers(),
  });

  if (!session) {
      throw new Error("Unauthorized");
  }

  return session;
}