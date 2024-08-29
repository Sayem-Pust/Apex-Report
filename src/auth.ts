import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials: any) {
        return {
          name: credentials.name,
          email: credentials.email,
          // image: credentials.image,
          id: credentials.id,
          token: credentials.accessToken,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, trigger, session, user, account, profile }) => {
      // console.log(token, user, account, profile);
      if (trigger === "update" && session?.image) {
        token.image = session.image;
      }
      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      if (session && token) {
        session.user.token = token.token;
        session.user.id = token.id;
      }
      return session;
    },
    async redirect({ url, baseUrl, req }: any) {
      return `${baseUrl}`;
    },
  },
});
