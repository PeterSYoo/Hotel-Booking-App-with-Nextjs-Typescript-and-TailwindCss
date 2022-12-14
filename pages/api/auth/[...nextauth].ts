import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../lib/usersConnect';
import Users from '../../../model/Users';
import { compare } from 'bcryptjs';
import { signIn } from 'next-auth/react';
// @ts-ignore
import clientPromise from '../../../lib/mongoAuthAdapter';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

export const authOptions = {
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      // @ts-ignore
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
    GitHubProvider({
      // @ts-ignore
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      // @ts-ignore
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    // @ts-ignore
    // CredentialsProvider({
    //   name: 'Credentials',
    //   // @ts-ignore
    //   async authorize(credentials, req) {
    //     connectMongo().catch((error) => {
    //       error: 'Connection Failed...!';
    //     });

    //     // check user existence
    //     const result = await Users.findOne({ email: credentials?.email });

    //     if (!result) {
    //       throw new Error('No user found with the email please sign up...!');
    //     }

    //     // compare()
    //     // @ts-ignore
    //     const checkPassword = await compare(
    //       // @ts-ignore
    //       credentials.password,
    //       result.password
    //     );

    //     // incorrect password
    //     if (!checkPassword || result.email !== credentials?.email) {
    //       throw new Error(`Email or Password doesn't match`);
    //     }

    //     return result;
    //   },
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      return true;
    },
    async session({ session, user }: any) {
      session.id = user.id;
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
};

export default NextAuth(authOptions);
