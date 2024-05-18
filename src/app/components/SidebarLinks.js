const SidebarLinks = () => {
  return (
    <aside className="bg-black w-64 flex justify-start items-start h-screen p-12 ">
      <ul className="mt-5 space-y-4 text-primary-600 font-medium	text-lg	">
        <li className="">
          <a href="./stock" className="hover:text-white transition-all	">
            Estoque
          </a>
        </li>
        <li className="hover:text-white transition-all">
          <a href="./products">Produtos</a>
        </li>
        <li className="hover:text-white transition-all">
          <a href="./entry">Entradas</a>
        </li>
        <li className="hover:text-white transition-all">
          <a href="./sales">Vendas</a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarLinks;
