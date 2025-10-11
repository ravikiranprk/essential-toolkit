import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials, req) {
                if(!credentials) console.log("Error! Credentials are not present");
                const { email, password } = credentials;
                try {
                    const baseUrl = process.env.NEXTJS_PUBLIC_BASE_URL;
                    let user = await fetch(`${baseUrl}/api/users/byemail/${email}`, { method: "GET" });
                    user = await user.json();

                    if(!user) {
                        console.log("No user found");
                        return;
                    }

                    const passwordsMatch = password === user.password;
                    if(!passwordsMatch) return;

                    return user;
                } catch(error) {
                    console.log("Error: ", error);
                    return;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
                token.password = user.password;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session?.user) {
                session.user.email = token.email;
                session.user.password = token.password;
            }
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };