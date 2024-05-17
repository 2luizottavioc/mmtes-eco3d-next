import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eco 3D",
  description: "O Eco 3D é um sistema de gerenciamento de estoque voltado para materiais produzidos por impressão 3D a partir de materiais recicláveis. Este projeto visa facilitar o controle e organização dos materiais utilizados na impressão 3D, permitindo aos usuários gerenciar o estoque de forma eficiente. Com o Eco 3D, os usuários poderão cadastrar novos materiais, atualizar informações, visualizar o status do estoque e registrar movimentações, como entradas e saídas de materiais. Além disso, o sistema oferecerá funcionalidades de relatórios para análise de consumo, facilitando o planejamento e a tomada de decisões estratégicas relacionadas ao estoque de materiais recicláveis utilizados na impressão 3D."
};  

export default function RootLayout({ children }) {
  return (  
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="absolute w-svw h-svh flex flex-col bg-zinc-50 text-zinc-950">
            {children}  
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
