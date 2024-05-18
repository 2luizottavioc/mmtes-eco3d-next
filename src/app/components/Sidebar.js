import Image from "next/image";
import eco3dLogo from "../../../public/eco3d-logo.png";
const Sidebar = () => {
  return (
    <aside className="bg-black w-64 flex justify-center items-end h-screen">
      <Image src={eco3dLogo} width={100} height={100} alt="Eco 3D Logo" />
    </aside>
  );
};

export default Sidebar;
