"use client";

import Header from "../components/Header";
import SidebarLinks from "../components/SidebarLinks";
import { useSession } from "next-auth/react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import { green } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../services/http";

export default function Entry() {
  const router = useRouter();

  const { data: session, status } = useSession();
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    if (status !== "authenticated") return;

    const token = session.user.token;
    api.get("/entry", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setEntries(res.data);
      })
      .catch((err) => console.log(err));
  }, [status, session]);

  const handleDelete = async (id) => {
    try {
      const token = session.user.token
      const headers = { Authorization: `Bearer ${token}` }

      await api.delete(`/entry/${id}`, { headers }).then((res) => {
        window.location.reload();
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
        <Header page="Produtos" />
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-center text-primary-700 text-3xl font-bold">ENTRADAS</h1>
          <div className="flex flex-col items-center justify-center ">
            <table className="w-2/3  text-center">
              <thead>
                <tr>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Data
                  </th>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Produto
                  </th>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Quantidade
                  </th>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Valor de Custo
                  </th>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Fornecedor
                  </th>
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {!entries ? (
                  <tr>
                    <td className="p-3 border-b text-center border-gray-400" colSpan={6}>
                      Carregando...
                    </td>
                  </tr>
                ) : (
                  entries.map((entry) => (
                    <tr key={entry.id}>
                      <td className="p-3 border-b border-gray-400">
                        {new Date(entry.date).toLocaleDateString()}
                      </td>
                      <td className="p-3 border-b border-gray-400">
                        {entry.product.name}
                      </td>
                      <td className="p-3 border-b border-gray-400">
                        {entry.quantity}
                      </td>
                      <td className="p-3 border-b border-gray-400">
                        R$ {entry.cost_price} (R$ {(entry.cost_price / entry.quantity).toFixed(2)} UN)
                      </td>
                      <td className="p-3 border-b border-gray-400">
                        {entry.provider}
                      </td>
                      <td className="p-3 border-b border-gray-400 flex gap-4 items-center justify-center">
                        <button onClick={() => router.push(`/entry/edit/${entry.id}`)}>
                          <EditIcon sx={{ color: green[600] }} />
                        </button>
                        <button onClick={() => {
                          const confirm = window.confirm(`Tem certeza que deseja excluir esta entrada?`)
                          if (confirm) handleDelete(entry.id)
                        }}>
                          <DeleteIcon sx={{ color: green[600] }} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
                {entries && entries.length === 0 && (
                  <tr>
                    <td className="p-3 border-b border-gray-400" colSpan={6}>
                      Nenhum item encontrado
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <button
              onClick={() => router.push("/entry/create")}
              className="mt-4 bg-primary-600 w-2/3 p-4 rounded-b text-white font-bold hover:brightness-90">
              <AddIcon /> ADICIONAR ENTRADA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
