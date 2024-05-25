import SidebarLinks from "../components/SidebarLinks";
import Header from "../components/Header";


export default function Products() {
  return (
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Produtos" />
        <div className="flex flex-col gap-4 p-4 items-center justify-center">
        <form 
            className="w-3/4"
            >
            <fieldset className=" p-4 flex flex-col items-center rounded-t gap-4">
              <h1 className="text-primary-900 text-3xl font-bold">
                Cadastro de produtos
              </h1>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Tipo do produto reciclavel</label>
                <input
                  type="text"
                  name="name"
                  className="border-gray-400 border rounded p-1"
                 
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Estoque atual</label>
                <input
                  type="text"
                  name="estoque"
                  className="border-gray-400 border rounded p-1"
                  
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-primary-900">Valor da venda</label>
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
                className="bg-primary-900 px-4 py-2 rounded-2xl text-white w-1/3 hover:brightness-75 font-bold"
              >
                CADASTRAR PRODUTO
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
