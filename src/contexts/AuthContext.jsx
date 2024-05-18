"use client"

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import { api } from "@/app/services/http";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null)
    const isAuthenticated = !!user

    useEffect(() => {
        const { 'eco3d.token': token } = parseCookies()
        if (!token) return setUser(null)

        recoverUserInformation()
        .then(res => setUser(res.user))
        .catch(err => setUser(null))
    }, [])

    async function singIn({ email, password }) {    
        const { token, user } = await api.post('/auth/login', { email, password })
        .then(res => res.data)
        .catch(err => err.response.data)

        if(!token || !user) return false

        setCookie(undefined, 'eco3d.token', token, {
            maxAge: 60 * 60 * 24, // 1 day
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`

        setUser({
            name: user.name,
            email: user.email
        })

        return true
    }

    async function recoverUserInformation() {
        const { 'eco3d.token': token } = parseCookies()

        const { user } = await api.get('/auth/me', { headers: { 'Authorization': `Bearer ${token}` }})
        .then(res => res.json())

        return { user }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const getServerSideProps = async (ctx) => {
    const { 'eco3d.token': token } = parseCookies(ctx)

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}