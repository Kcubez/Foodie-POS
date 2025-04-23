import SignIn from '@/app/auth/signin/page';
import { config } from '@/config';
import { createDefaultUser } from '@/libs/actions';
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
      const dbUser = await prisma.users.findFirst({
        where: { email: user.email as string },
      });
      if (!dbUser) {
        await createDefaultUser(user);
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
