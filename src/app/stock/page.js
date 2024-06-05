import SidebarLinks from "@/components/SidebarLinks";
import Header from "@/components/Header";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { green } from  '@mui/material/colors';

export default function Stock() {
  return (
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Estoque"/>
        <div className="flex flex-col gap-4 p-4">
          <h1 className="text-center text-primary-700 text-3xl font-bold">ESTOQUE</h1>
          <div className="flex flex-col items-center justify-center ">
            <table className="w-2/3  text-center">
              <tr >
                  <th className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Quantidade
                  </th>
                  <th  className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Produtos
                  </th>
                  <th  className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                    Preço
                  </th>
                  <th  className="w-64 text-primary-700 font-bold text-xl p-1 border-b-2 border-gray-400">
                 
                  </th>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-400">
                  10
                </td>
                <td className="p-3 border-b border-gray-400">
                  Garrafa PET
                </td>
                <td className="p-3 border-b border-gray-400">
                  14,99
                </td>
                <td className="p-3 border-b border-gray-400 flex gap-4 items-center justify-center">
                  <button><EditIcon  sx={{ color: green[600] }}/></button>
                  <button><DeleteIcon  sx={{ color: green[600] }}/></button>
                </td>
              </tr>
              <tr>
                <td className="p-3 border-b border-gray-400">
                  250
                </td>
                <td className="p-3 border-b border-gray-400">
                  Tampinhas Plásticas
                </td>
                <td className="p-3 border-b border-gray-400">
                  8,99
                </td>
                <td className="p-3 border-b border-gray-400 flex gap-4 items-center justify-center">
                  <button><EditIcon  sx={{ color: green[600] }}/></button>
                  <button><DeleteIcon  sx={{ color: green[600] }}/></button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
