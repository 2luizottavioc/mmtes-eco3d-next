"use client"

import Image from "next/image";
import eco3dLogo from "../../../public/eco3d-logo.png";
import { Puff } from 'react-loader-spinner'// import { useRouter } from "next/navigation";

const Loading = ({ page }) => {
  // const router = useRouter()

  return (
    <div className="w-screen h-screen flex justify-center bg-black bg-opacity-20 items-center ">
        
        <Puff
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
            
         
      
    </div>
  )
}

export default Loading;