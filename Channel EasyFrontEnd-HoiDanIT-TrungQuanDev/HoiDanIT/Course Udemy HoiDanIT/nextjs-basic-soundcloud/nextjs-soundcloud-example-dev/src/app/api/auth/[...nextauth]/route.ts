import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    secret: process.env.NO_SECRET,
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "hoidanit@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "123456" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: "1", name: "Hỏi Dân IT", email: "hoidanit@gmail.com" }

                if (!credentials?.username) return null;
                if (credentials?.username === "hoidanit") {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    // return null
                    throw new Error("bla bla");
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile, trigger }) {
            if (trigger === "signIn") {
                console.log("1>>>>>>>>>>>>>>>>>>>>>>>>>>")
                console.log(">>> check trigger: ", trigger)
                console.log(">>> check token: ", token)
                console.log(">>> check user: ", user)
                console.log(">>> check account: ", account)
                console.log(">>> check profile: ", profile)
                console.log("1>>>>>>>>>>>>>>>>>>>>>>>>>>")
            }
            return token;
        },
        session({ session, token, user }) {
            //modify session => add more information from token
            return session;
        }
    },
    pages: {
        signIn: "auth/signin",
    }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }