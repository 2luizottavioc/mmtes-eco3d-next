'use client';

import Header from "../components/Header";
import SidebarLinks from "../components/SidebarLinks";
import { useSession } from "next-auth/react";

export default function Entry() {
  const { data: session } = useSession();
  console.log(session.user);

  return (
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Produtos"/>
      </div>
    </div>
  );
}
