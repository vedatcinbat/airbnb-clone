import React from 'react'

function DisplayTotal() {
  return (
    <>
        <div className = "displayTotal  xl:border-[1px] w-[30rem] xl:p-[1.2rem]  xl:ml-[35%] xl:mt-[2rem] xl:border-gray-300 rounded-lg xl:flex xl:items-center xl:justify-center">
            <div className="font-bold xl:mr-4 xl:border-r-2 xl:border-black xl:p-2 xl:pr-5">Display total price</div>
            <div className="text-gray-500">Includes all fees, before taxes</div>
        </div>
    </>
  )
}

export default DisplayTotal