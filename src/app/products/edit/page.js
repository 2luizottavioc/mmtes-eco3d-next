import SidebarLinks from "../../components/SidebarLinks";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { green } from "@mui/material/colors";

export default function Stock() {
  return (
    <div className="flex">
    <SidebarLinks />
    <div className="w-full">
      <Header page="Entradas" />
      <div className="flex flex-col gap-4 p-4 items-center justify-center">
        <form className="w-3/4">
          <fieldset className=" p-4 flex flex-col items-center rounded-t gap-4">
            <h1 className="text-primary-900 text-3xl font-bold">
             EDITAR PRODUTO
            </h1>
            <div className="flex flex-col w-full">
              <label className="text-primary-900">
                Nome
              </label>
              <input
                type="text"
                name="name"
                className="border-gray-400 border rounded p-1"
                value={"Garrafa PET"}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-primary-900">Valor</label>
              <input
                type="number"
                name="valor"
                className="border-gray-400 border rounded p-1"
                value={14.99}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-primary-900">Quantidade</label>
              <input
                type="number"
                name="quantidade"
                className="border-gray-400 border rounded p-1"
                value={10}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-primary-900">Descrição</label>
              <textarea
                type="number"
                name="descricao"
                className="border-gray-400 border rounded p-4"
                value={"Material de embalagem, o PET atende a inúmeras exigências técnicas e de saudabilidade, protegendo diversos alimentos e bebidas com muita eficiência."}
              ></textarea>
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
