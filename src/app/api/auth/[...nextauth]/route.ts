import { config } from '@/config';
import { createDefaultData } from '@/libs/actions';
import { prisma } from '@/libs/prisma';
import NextAuth, { User } from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';

interface Props {
  user: User | AdapterUser;
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: config.googleClientId,
      clientSecret: config.googleClientSecret,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callback: {
    async SignIn({ user }: Props) {
      console.log('user', user);
      console.log('user.email', user.email);
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
