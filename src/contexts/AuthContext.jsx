"use client"

import { createContext, useEffect, useState } from "react";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";
import { api } from "@/app/services/http";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState(null)

    const isAuthenticated = !!user

    useEffect(() => {
        const { 'eco3d.token': token } = parseCookies()

        if (token) {
            recoverUserInformation().then(res => {
                setUser(res.user)
            })
        }
    }, [])

    async function singIn({ email, password }) {    
        const { access_token, user } = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        console.log(access_token);

        setCookie(undefined, 'eco3d.token', access_token, {
            maxAge: 60 * 60 * 24, // 1 day
        })

        api.defaults.headers['Authorization'] = `Bearer ${access_token}`

        // setUser(user)
        setUser({
            name: 'user.name',
            email: 'user.email'
        })

        Router.push('/products')
    }

    async function recoverUserInformation() {
        const { 'eco3d.token': token } = parseCookies()

        const { user } = await fetch('http://localhost:8080/auth/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.json())

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