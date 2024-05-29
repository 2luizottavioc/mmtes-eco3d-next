import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="bg-black">
          <div className="container mx-4 px-20 flex justify-between items-center py-3">
            <a className="navbar-brand" href="#">
              <Image
                src="/eco3d-logo.png"
                width={120}
                height={40}
                alt="Eco3D Logo"
              />
            </a>
            <button className="text-white focus:outline-none md:hidden ">
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            <div className="hidden md:flex space-x-4 ">
              <a href="#home" className="text-white hover:text-primary-700">
                Home
              </a>
              <a href="#recursos" className="text-white hover:text-primary-700">
                Recursos
              </a>
              <a
                href="#beneficios"
                className="text-white hover:text-primary-700"
              >
                Benefícios
              </a>
              <a
                href="#"
                className="ml-4 px-3 py-1 border border-white text-white rounded-md  hover:bg-white hover:text-black"
              >
                Entrar
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="bg-green-900 text-white py-15 px-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="md:w-2/3 flex items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Eco 3D</h1>
              <p className="mt-4 text-3xl">
                Gerenciamento de{" "}
                <span className="text-primary-400">estoque</span> usado para
                controle de materiais recicláveis para filamentos de{" "}
                <span className="text-primary-400">impressora 3D!</span>
              </p>
              <form className="mt-4 mb-4">
                <button
                  type="button"
                  className="bg-black text-primary-700 font-bold py-2 px-4 rounded-lg hover:text-primary-500 "
                >
                  Cadastre-se
                </button>
              </form>
            </div>
          </div>

          <div className="md:w-1/3 hidden md:block">
            <Image
              src="/mulher-reciclagem.png"
              alt="Mulher Reciclagem"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      <section id="recursos" className="py-20  border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 flex items-center px-20">
              <div>
                <h2 className="text-3xl font-bold">Gestão de produtos</h2>
                <p className="mt-4">
                  Oferecemos uma interface amigável para gerenciar seus produtos
                  de forma fácil.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 ">
              <Image
                src="/tela-produtos.png"
                alt="Tela de Produtos"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row px-20">
            <div className="md:w-1/2 ">
              <Image
                src="/tela-vendas.png"
                alt="Tela de Vendas"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
            <div className="md:w-1/2 flex items-center">
              <div>
                <h2 className="text-3xl font-bold">
                  Registre suas entradas e vendas!
                </h2>
                <p className="mt-4">
                  Oferecemos a funcionalidade de registrar os produtos
                  recicláveis que entram no seu estoque e os que vendem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="pb-20 pt-15 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row px-20">
            <div className="md:w-1/3 text-center mb-4 md:mb-0">
              <Image
                src="/interface.png"
                alt="Interface"
                width={500}
                height={500}
                className="mx-auto"
              />
              <h2 className="text-2xl font-bold">Fácil de usar</h2>
              <p className="mt-2">
                Ferramentas intuitivas e usabilidade acessível.
              </p>
            </div>
            <div className="md:w-1/3 text-center mb-8 md:mb-0">
              <Image
                src="/reciclagem.png"
                alt="Reciclagem"
                width={500}
                height={500}
                className="mx-auto"
              />
              <h2 className="text-2xl font-bold">Propósito sustentável</h2>
              <p className="mt-2">
                Projeto sustentável e favorável ao meio ambiente.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <Image
                src="/suporte.png"
                alt="Suporte"
                width={500}
                height={500}
                className="mx-auto"
              />
              <h2 className="text-2xl font-bold">Suporte amigo</h2>
              <p className="mt-2">Conte com o nosso suporte a qualquer hora!</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between px-20">
            <div>
              <p className="mb-4">
                <a href="#home" className="mr-4 hover:text-primary-700">
                  Home
                </a>
                <a href="#recursos" className="mr-4 hover:text-primary-700">
                  Recursos
                </a>
                <a href="#beneficios" className="mr-4 hover:text-primary-700">
                  Benefícios
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
