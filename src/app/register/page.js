"use client";

import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { api } from "../services/http";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const user = api.post('/auth/register', {
        email,
        cpf_cnpj: cpfCnpj,
        contact,
        name,
        password
      })
      .then(res => res.data)
      .catch(err => null)

      if (!user) return setError('Erro ao registrar o usuário');

      router.refresh();
      router.push('/login');

      return

    } catch (error) {
      console.log('LOGIN ERROR: ', error);
    }
  };

  return (
    <div className="h-screen  w-sreen flex">
      <Sidebar />
      <main className="flex-1 flex justify-center w-full items-center">
        <div className="w-full flex flex-col items-center justify-center">
          <form 
            className="w-2/4"
            onSubmit={handleRegister} 
            >
            <fieldset className="border-gray-400 border p-4 flex flex-col items-center rounded-t gap-4">
              <h1 className="text-primary-900 text-3xl font-bold">
                Criar Conta
              </h1>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Nome:</label>
                <input
                  type="text"
                  name="name"
                  className="border-gray-400 border rounded p-1"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="border-gray-400 border rounded p-1"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">CPF ou CNPJ:</label>
                <input
                  type="text"
                  name="cpf_cnpj"
                  className="border-gray-400 border rounded p-1"
                  onChange={(e) => setCpfCnpj(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Celular:</label>
                <input
                  type="text"
                  name="contact"
                  className="border-gray-400 border rounded p-1"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Crie uma senha:</label>
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
                CRIAR
              </button>
            </fieldset>
          </form>
        </div>
      </main>
    </div>
  );
}
