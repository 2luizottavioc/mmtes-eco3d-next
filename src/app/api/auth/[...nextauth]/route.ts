import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { api } from "../../../services/http";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) return null

                const { email, password } = credentials
                const { token, user } = await api.post('/auth/login', { email, password })
                    .then(res => res.data)
                    .catch(err => null)

                if (!token) return null

                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                return user
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            const customUser = user as unknown as any

            if (!user) return token
            
            return {
                ...token,
                name: customUser.name,
                email: customUser.email,
                cpf_cnpj: customUser.cpf_cnpj,
                contact: customUser.contact
            }
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    name: token.name,
                    email: token.email,
                    cpf_cnpj: token.cpf_cnpj,
                    contact: token.contact
                }
            }
        }
    },
    pages: {
        signIn: '/login'
    }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }