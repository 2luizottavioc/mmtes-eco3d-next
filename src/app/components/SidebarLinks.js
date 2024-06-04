'use client';

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SidebarLinks = () => {
  const router = useRouter()

  return (
    <aside className="bg-black w-64 flex flex-col justify-start items-start h-screen p-12 ">
      <ul className="mt-5 space-y-4 text-primary-600 font-medium	text-lg	">
        <li className="cursor-pointer hover:text-white transition-all">
          <a onClick={() => router.push("/products")}>Produtos</a>
        </li>
        <li className="cursor-pointer hover:text-white transition-all">
          <a onClick={() => router.push("/entry")}>Entradas</a>
        </li>
        <li className="cursor-pointer hover:text-white transition-all">
          <a onClick={() => router.push("/sales")}>Vendas</a>
        </li >
      </ul >
  <button className="mt-auto p-1 px-4 text-primary-600 border" onClick={() => signOut()}>sair</button>
    </aside >
  );
};

export default SidebarLinks;
