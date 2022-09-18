import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});
