import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      // @ts-ignore
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    // @ts-ignore
    CredentialsProvider({
      name: "Credentials",
      // @ts-ignore
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "Connection Failed...!";
        });

        // check user existence
        const result = await Users.findOne({ email: credentials?.email });
        if (!result) {
          throw new Error("No user found with the email please sign up...!");
        }

        // compare()
        const checkPassword = await compare(
          // @ts-ignore
          credentials.password,
          result.password
        );

        // incorrect password
        if (!checkPassword || result.email !== credentials?.email) {
          throw new Error(`Email or Password doesn't match`);
        }

        return result;
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
});
