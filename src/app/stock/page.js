import SidebarLinks from "../components/SidebarLinks";
import Header from "../components/Header";
export default function Stock() {
  return (
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Estoque"/>
        <div>
          <h1>Estoque</h1>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
