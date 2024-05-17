"use client"

import Image from 'next/image'
import eco3dLogo from '../../../public/eco3d-logo.png'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

export default function Login() {
    const { register, handleSubmit } = useForm()
    const { singIn } = useContext(AuthContext)

    async function handleSignIn (data) {
        await singIn(data)
    }

    return (
        <form className="flex items-center justify-center h-screen w-screen bg-zinc-100 p-0 m-0" onSubmit={handleSubmit(handleSignIn)}>
            <div className=" border-primary-800 border-2 w-96 p-0 h-500 rounded-md flex-col justify-center items-center">
                <div className="p-8 gap-4 w-full md-4">
                    <div className="flex md-4 gap-2 text-3xl justify-center items-center">
                        <Image
                            src={eco3dLogo} 
                            alt="Eco 3D Logo" 
                            width={44} 
                        />
                        <span className="text-primary-700 font-logo text-base">Eco 3D</span>
                    </div>
                    <h1 className="text-primary-700 font-bold text-2xl flex justify-center">
                        LOGIN
                    </h1>
                    <div className="w-full">
                        <label className="text-primary-700">E-mail:</label>
                        <input
                            type="text"
                            className="text-black h-10 w-full p-2 rounded border"
                            {...register("email")}
                        />
                    </div>
                    <div>
                        <label className="text-primary-700">Senha:</label>
                        <input
                            type="password"
                            className="text-black h-10 w-full p-2 rounded border"
                            {...register("password")}
                        ></input>
                    </div>
                    <div>
                        <div className="w-full p-1">
                            <input type="checkbox"></input>
                            <label>Lembrar-me</label>
                        </div>
                        <div className="flex justify-center items-center">
                            <button 
                                type="submit"
                                className="bg-primary-700 hover:bg-primary-600 outline-none  text-white h-19 w-20 mt-5 rounded  text-transform: uppercase" 
                            >
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-primary-800 p-7 w-full flex justify-end items-center h-3 text-zinc-50">
                    <a href="/" className="hover:underline">
                        Crie sua conta no sistema
                    </a>
                </div>
            </div>
        </form>
    )
}