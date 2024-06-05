"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import api from "../../../services/http";
import SidebarLinks from "../../../components/SidebarLinks";
import Header from "../../../components/Header";

export default function EditSale({ params }) {
  const saleId = params.saleId;

  const router = useRouter();
  const { data: session, status } = useSession();

  const [idProduct, setIdProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");

  const [sale, setSale] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (status !== "authenticated") return;

    const token = session.user.token;
    const headers = { Authorization: `Bearer ${token}` }

    api.get(`/sale/${saleId}`, { headers })
      .then((res) => {
        const data = res.data

        setIdProduct(data.id_product)
        setQuantity(data.quantity)
        setPrice(data.sale_value)
        setClientName(data.client_name)
        setDate(data.date)

        setSale(data)
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
        sale_value: price, 
        client_name: clientName, 
        date 
      }
      const headers = { Authorization: `Bearer ${token}` }

      await api.put(`/sale/${saleId}`, data, { headers }).then((res) => {
        router.push("/sales");
      }).catch((err) => {
        console.log(err)
      });

    } catch (err) {
      console.log(err);
    }
  };

  return(
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Vendas" />
        <div className="flex flex-col gap-4 p-4 items-center justify-center">
          {!sale ? (
            <div>Carregando...</div>
          ) : (
            <form className="w-3/4" onSubmit={handleSubmit}>
              <fieldset className=" p-4 flex flex-col items-center rounded-t gap-4">
                <h1 className="text-primary-900 text-3xl font-bold">
                  Editar Venda
                </h1>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">Produto</label>
                  <select
                    className="border-gray-400 border rounded p-2"
                    onChange={(e) => setIdProduct(parseInt(e.target.value))}
                    value={idProduct}
                    required
                  >
                    {products?.map((product) => (
                      <option
                        key={product.id}
                        value={product.id}
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
                    required
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
                    required
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">Valor venda</label>
                  <input
                    type="number"
                    name="valor-venda"
                    step="0.01"
                    className="border-gray-400 border rounded p-1"
                    value={price}
                    required
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-primary-900">Cliente</label>
                  <input
                    type="text"
                    name="fornecedor"
                    className="border-gray-400 border rounded p-1"
                    value={clientName}
                    required
                    onChange={(e) => setClientName(e.target.value)}
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
