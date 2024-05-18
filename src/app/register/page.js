import Sidebar from "../components/Sidebar";

("use client");

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const { registerUser } = useContext(AuthContext);

  async function handleRegister(data) {
    const result = await registerUser(data);
    if (result) return (window.location.href = "/products");
  }

  return (
    <div className="h-screen flex">
      <Sidebar />
      <main className="flex-1 flex justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center">
          <form className="w-2/4" onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="border-gray-400 border p-4 flex flex-col items-center rounded-t gap-4">
              <h1 className="text-primary-900 text-3xl font-bold">
                Criar Conta
              </h1>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Nome:</label>
                <input
                  type="text"
                  className="border-gray-400 border rounded p-1"
                  {...register("nome")}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Email:</label>
                <input
                  type="email"
                  className="border-gray-400 border rounded p-1"
                  {...register("email")}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">CPF ou CNPJ:</label>
                <input
                  type="text"
                  className="border-gray-400 border rounded p-1"
                  {...register("cpfCnpj")}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Celular:</label>
                <input
                  type="text"
                  className="border-gray-400 border rounded p-1"
                  {...register("celular")}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Crie uma senha:</label>
                <input
                  type="password"
                  className="border-gray-400 border rounded p-1"
                  {...register("password")}
                />
              </div>
              <button className="bg-primary-900 px-4 py-1 rounded-2xl text-white w-1/3 hover:brightness-75 font-bold">
                CRIAR
              </button>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}
