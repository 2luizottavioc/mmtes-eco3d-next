'use client';

import SidebarLinks from "../../../components/SidebarLinks";
import Header from "../../../components/Header";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import api from "../../../services/http";

export default function Stock({ params }) {
  const productId = params.productId;
  const router = useRouter();

  const { data: session, status } = useSession();

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (status !== "authenticated") return;

    const token = session.user.token;
    api.get(`/product/${productId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const data = res.data

        setName(data.name)
        setPrice(data.sale_price)
        setDescription(data.description)

        setProduct(data)
      })
      .catch((err) => console.log(err));
  }, [status, session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = session.user.token
      const data = { name, sale_price: price, description }
      const headers = { Authorization: `Bearer ${token}` }  

      await api.put(`/product/${productId}`, data, { headers }).then((res) => {
        router.push("/products");
      }).catch((err) => {
        console.log(err)
      }); 

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Entradas" />
        <div className="flex flex-col gap-4 p-4 items-center justify-center">
          {!product ? (
            <div>Carregando...</div>
          ) : (
            <form className="w-3/4" onSubmit={handleSubmit}>
              <fieldset className=" p-4 flex flex-col items-center rounded-t gap-4">
                <h1 className="text-primary-900 text-3xl font-bold">
                  EDITAR PRODUTO
                </h1>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border-gray-400 border rounded p-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">Valor</label>
                  <input
                    type="number"
                    name="valor"
                    step="0.01"
                    className="border-gray-400 border rounded p-1"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">Descrição</label>
                  <textarea
                    type="number"
                    name="descricao"
                    className="border-gray-400 border rounded p-4"
                    value={description}
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
          )}
        </div>
      </div>
    </div>
  );
}