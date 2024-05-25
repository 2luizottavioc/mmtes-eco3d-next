"use client";

import { useForm } from "react-hook-form";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if(response?.error){
        toast.error('Usuário não encontrado', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }

      if (!response?.error) {
        router.refresh();
        router.push("/products");

        return;
      }

      if(email == '' || password ==''){
        toast.error('Preecha o email e senha', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }

      //setError("Usuário ou senha inválidos!");
    } catch (error) {
      console.log("LOGIN ERROR: ", error);
    }
  };

  return (
    <div className="h-screen flex ">
      <Sidebar />
      <main className="flex-1 flex flex-col justify-center items-center">
        {error && (
          <span className="text-red-500 mb-4 font-bold italic text-sm">
            {error}
          </span>
        )}
        <div className="w-full flex flex-col items-center justify-center ">
          <form className="w-2/4" onSubmit={handleLogin}>
            <fieldset className="border-gray-400 border p-4 flex flex-col items-center rounded-t gap-4">
              <h1 className="text-primary-900 text-3xl font-bold ">LOGIN</h1>
              <div className="flex flex-col  w-full ">
                <label className="text-primary-900">Nome:</label>
                <input
                  type="text"
                  name="name"
                  className="border-gray-400 border rounded p-1"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Senha:</label>
                <input
                  type="password"
                  name="password"
                  className="border-gray-400 border rounded p-1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-primary-900 px-4 py-1 rounded-2xl text-white w-1/3 hover:brightness-75 font-bold"
              >
                ENTRAR
              </button>
            </fieldset>
          </form>
          <div className="bg-gray-400 p-3 rounded-b w-2/4 flex items-end justify-end">
            <a
              className="font-bold hover:underline hover:cursor-pointer text-primary-900"
              onClick={() => router.push("/register")}
            >
              Não possui conta? Cadastre-se!
            </a>
          </div>
        </div>
      </main>
      <ToastContainer/>
    </div>
  );
}
