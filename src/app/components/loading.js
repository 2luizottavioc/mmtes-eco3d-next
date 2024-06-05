"use client"

import { Puff } from 'react-loader-spinner'

const Loading = ({ page }) => {
  // const router = useRouter()

  return (
    <div className="fixed z-10 w-screen h-screen flex justify-center bg-black bg-opacity-70 items-center ">
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