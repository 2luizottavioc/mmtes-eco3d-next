import Image from "next/image";
import eco3dLogo from "../../../public/eco3d-logo.png";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import { green } from  '@mui/material/colors';

const Header = () => {
    return(
        <div className="bg-black w-full h-16 flex items-center p-4 justify-between ">
          <div className="flex items-center gap-6">
          <Image src={eco3dLogo} width={50} height={50}/>
          <span className="text-primary-700 font-semibold">Estoque Eco3D</span>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-1 items-center font-semibold">
                <HomeRoundedIcon sx={{ color: green[700] }}/>
                <a className="text-primary-700 hover:cursor-pointer hover:underline">Inicio</a>
            </div>
            <div className="flex gap-1 items-center font-semibold">
                <PersonIcon sx={{ color: green[700] }}/>
                <a className="text-primary-700 hover:cursor-pointer hover:underline">Conta</a>
            </div>
          </div>
        </div>
    )
}

export default Header;