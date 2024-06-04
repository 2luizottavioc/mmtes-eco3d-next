"use client";

import Header from "../components/Header";
import SidebarLinks from "../components/SidebarLinks";
import { useSession } from "next-auth/react";

export default function Entry() {
  // const { data: session } = useSession();
  // console.log(session.user);

  return (
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Entradas" />
        <div className="flex flex-col gap-4 p-4 items-center justify-center">
          <form className="w-3/4">
            <fieldset className=" p-4 flex flex-col items-center rounded-t gap-4">
              <h1 className="text-primary-900 text-3xl font-bold">
                Criar entradas
              </h1>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">
                  Data
                </label>
                <input
                  type="date"
                  name="name"
                  className="border-gray-400 border rounded p-1"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Estoque atual</label>
                <select
                 className="border-gray-400 border rounded p-2"
                >
                  <option>Item 1</option>
                  <option>Item 2</option>
                  <option>Item 3</option>
                  <option>Item 4</option>
                  <option>Item 5</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Quantidade</label>
                <input
                  type="number"
                  name="valor-venda"
                  className="border-gray-400 border rounded p-1"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Valor custo</label>
                <input
                  type="number"
                  name="valor-custo"
                  className="border-gray-400 border rounded p-1"
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
        </div>
      </div>
    </div>
  );
}
