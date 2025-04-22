import SignIn from '@/app/auth/signin/page';
import { config } from '@/config';
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
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
