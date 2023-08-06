import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

//initialize prisma client and create the adaptor that feeds in the prisma client
const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
};
