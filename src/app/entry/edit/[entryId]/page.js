"use client";

import { useRouter } from "next/navigation";
import Header from "../../../components/Header";
import SidebarLinks from "../../../components/SidebarLinks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import api from "../../../services/http";

export default function EditEntry({ params }) {
  const entryId = params.entryId;

  const router = useRouter();
  const { data: session, status } = useSession();

  const [idProduct, setIdProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [provider, setProvider] = useState("");
  const [date, setDate] = useState("");

  const [entry, setEntry] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (status !== "authenticated") return;

    const token = session.user.token;
    const headers = { Authorization: `Bearer ${token}` }

    api.get(`/entry/${entryId}`, { headers })
      .then((res) => {
        const data = res.data

        setIdProduct(data.id_product)
        setQuantity(data.quantity)
        setPrice(data.cost_price / data.quantity)
        setProvider(data.provider)
        setDate(data.date)

        setEntry(data)
      })
      .catch((err) => console.log(err));

    api.get("/product", { headers })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));

  }, [status, session]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = session.user.token
      const data = { 
        id_product: idProduct, 
        quantity, 
        // cost_price: price, 
        provider, 
        // date 
      }
      const headers = { Authorization: `Bearer ${token}` }

      await api.put(`/entry/${entryId}`, data, { headers }).then((res) => {
        router.push("/entry");
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
          {!entry ? (
            <div>Carregando...</div>
          ) : (
            <form className="w-3/4" onSubmit={handleSubmit}>
              <fieldset className=" p-4 flex flex-col items-center rounded-t gap-4">
                <h1 className="text-primary-900 text-3xl font-bold">
                  Editar Entrada
                </h1>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">Produto</label>
                  <select
                    className="border-gray-400 border rounded p-2"
                    onChange={(e) => setIdProduct(parseInt(e.target.value))}
                    required
                  >
                    {products?.map((product) => (
                      <option
                        key={product.id}
                        value={product.id}
                        selected={product.id === idProduct}
                      >
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">
                    Data
                  </label>
                  <input
                    type="date"
                    name="name"
                    className="border-gray-400 border rounded p-1"
                    value={new Date(date).toISOString().split("T")[0]}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">Quantidade</label>
                  <input
                    type="number"
                    name="valor-venda"
                    className="border-gray-400 border rounded p-1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">Valor custo</label>
                  <input
                    type="number"
                    name="valor-custo"
                    step="0.01"
                    className="border-gray-400 border rounded p-1"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">Fornecedor</label>
                  <input
                    type="text"
                    name="fornecedor"
                    className="border-gray-400 border rounded p-1"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                  />
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
