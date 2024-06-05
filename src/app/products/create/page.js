"use client";

import SidebarLinks from "../../components/SidebarLinks";
import Header from "../../components/Header";
import { useState } from "react";
import api from "../../services/http";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "../../components/loading";


export default function CreateProduct() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status !== "authenticated") {
      console.log("Usuário não autenticado!");
      return
    }

    try {
      const token = session.user.token
      const data = { name, sale_price: price, description }
      const headers = { Authorization: `Bearer ${token}` }

      setLoading(true)
      await api.post("/product", data, { headers }).then((res) => {
        router.push("/products");
      }).catch((err) => {
        console.log(err)
        setLoading(false)
      });
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  return (
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Entradas" />
        <div className="flex flex-col gap-4 p-4 items-center justify-center">
          <form className="w-3/4" onSubmit={handleSubmit}>
            <fieldset className=" p-4 flex flex-col items-center rounded-t gap-4">
              <h1 className="text-primary-900 text-3xl font-bold">
                ADICIONAR NOVO PRODUTO
              </h1>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-gray-400 border rounded p-1"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Valor</label>
                <input
                  type="number"
                  step="0.01"
                  name="sale_price"
                  className="border-gray-400 border rounded p-1"
                  required
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Descrição</label>
                <textarea
                  type="number"
                  name="description"
                  className="border-gray-400 border rounded p-1"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary-900 px-4 py-2 rounded text-white w-full hover:brightness-75 font-bold"
              >
                SALVAR
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      {loading && <Loading />}
    </div>
  );
}
