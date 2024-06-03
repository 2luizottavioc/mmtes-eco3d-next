'use client';

import SidebarLinks from "../components/SidebarLinks";
import Header from "../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import { green } from "@mui/material/colors";
import api from "../services/http";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Products() {
  const router = useRouter();

  const { data: session, status } = useSession();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (status !== "authenticated") return;

    const token = session.user.token;
    api
      .get("/product", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [status, session]);

  return (
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Produtos" />
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-center text-primary-700 text-3xl font-bold">PRODUTOS</h1>
          <div className="flex flex-col items-center justify-center ">
            <table className="w-2/3  text-center">
              <thead>
                <tr>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Quantidade
                  </th>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Produtos
                  </th>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Preço
                  </th>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">

                  </th>
                </tr>
              </thead>
              <tbody>
                {!products ? (
                  <tr>
                    <td className="p-3 border-b text-center border-gray-400" colSpan={4}>
                      Carregando...
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product.id}>
                      <td className="p-3 border-b border-gray-400">
                        {product.stock_quantity}
                      </td>
                      <td className="p-3 border-b border-gray-400">
                        {product.name}
                      </td>
                      <td className="p-3 border-b border-gray-400">
                        R$ {product.sale_price}
                      </td>
                      <td className="p-3 border-b border-gray-400 flex gap-4 items-center justify-center">
                        <button><EditIcon sx={{ color: green[600] }} /></button>
                        <button><DeleteIcon sx={{ color: green[600] }} /></button>
                      </td>
                    </tr>
                  )
                  ))}
              </tbody>
            </table>
            <button
              onClick={() => router.push("/products/create")}
              className="mt-4 cursor-pointer flex justify-center gap-2 bg-primary-600 w-2/3 p-4 rounded-b text-white font-bold hover:brightness-90">
            <AddIcon /> ADICIONAR PRODUTO
          </button>
        </div>
      </div>
    </div>
    </div >
  );
}
