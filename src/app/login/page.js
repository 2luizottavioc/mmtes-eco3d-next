"use client";

import Image from "next/image";
import eco3dLogo from "../../../public/eco3d-logo.png";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { singIn } = useContext(AuthContext);

  async function handleSignIn(data) {
    await singIn(data);
  }

  return (
    <div className="h-screen flex ">
      <aside className="bg-black w-64 flex justify-center items-end ">
        <Image src={eco3dLogo} width={100} height={100} />
      </aside>
      <main className="flex-1 flex justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center ">
          <form className="w-2/4" onSubmit={handleSubmit(handleSignIn)}>
            <fieldset className="border-gray-400 border p-4 flex flex-col items-center rounded-t gap-4">
              <h1 className="text-primary-900 text-3xl font-bold ">LOGIN</h1>
              <div className="flex flex-col  w-full ">
                <label className="text-primary-900">Nome:</label>
                <input
                  type="text"
                  name="nome"
                  className="border-gray-400 border rounded p-1"
                  {...register("email")}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Senha:</label>
                <input
                  type="password"
                  className="border-gray-400 border rounded p-1"
                  {...register("password")}
                />
              </div>
              <button className="bg-primary-900 px-4 py-1 rounded-2xl text-white w-1/3 hover:brightness-75 font-bold">
                ENTRAR
              </button>
            </fieldset>
          </form>
          <div className="bg-gray-400 p-3 rounded-b w-2/4 flex items-end justify-end">
            <a className="hover:underline hover:cursor-pointer text-primary-900">
              Crie sua conta no sistema
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
