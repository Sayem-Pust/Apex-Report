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
      async authorize(credentials) {
        const authResponse = await fetch(
          "http://127.0.0.1:8000/api/users/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );
        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        // console.log("aaaaaaaaaa", user.data.access);

        return {
          // name: user.data.access,
          email: "",
          image: "",
          id: "aa",
          token: user.data.access,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile }) => {
      // console.log({ token, user, account, profile });

      return { ...token, ...user };
    },
    async session({ session, token }: any) {
      // console.log({ user });

      if (session && token) {
        // session.user.id = user.id;
        session.user.token = token.token;
      }
      return session;
    },
  },
});