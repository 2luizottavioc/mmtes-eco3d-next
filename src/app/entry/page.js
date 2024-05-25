import Header from "../components/Header";
import SidebarLinks from "../components/SidebarLinks";

export default function Entry() {
  return (
    <div className="flex">
      <SidebarLinks />
      <div className="w-full">
        <Header page="Produtos"/>
      </div>
    </div>
  );
}
