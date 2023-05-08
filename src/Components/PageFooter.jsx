import React from 'react'

function PageFooter() {
  return (
    <>
      <div className = "w-[100%] max-sm:w-[46vh] border border-1 border-t-slate-300 h-[4rem] xl:flex xl:justify-between xl:items-center overflow-hidden bg-white fixed bottom-0">
        <div className = "left-part xl:flex xl:ml-4">
          <div className="font-bold text-black font-mono xl:mr-2 cursor-pointer xl:hover:border-2 xl:hover:border-b-slate-900">2023 Airbnb, Inc.</div>  
          <div className = "xl:flex w-[0.4rem] h-[0.3rem] bg-black xl:rounded-full xl:mt-[0.5rem] xl:mr-2 xl:items-center"></div>
          <div className="font-bold text-black font-mono xl:mr-2 cursor-pointer xl:hover:border-2 xl:hover:border-b-slate-900">Terms</div>  
          <div className = "xl:flex w-[0.4rem] h-[0.3rem] bg-black xl:rounded-full xl:mt-[0.5rem] xl:mr-2 xl:items-center"></div>
          <div className="font-bold text-black font-mono xl:mr-2 cursor-pointer xl:hover:border-2 xl:hover:border-b-slate-900">Sitemap</div>  
          <div className = "xl:flex w-[0.4rem] h-[0.3rem] bg-black xl:rounded-full xl:mt-[0.5rem] xl:mr-2 xl:items-center"></div>
          <div className="font-bold text-black font-mono xl:mr-2 cursor-pointer xl:hover:border-2 xl:hover:border-b-slate-900">Privacy.</div>  
          <div className = "xl:flex w-[0.4rem] h-[0.3rem] bg-black xl:rounded-full xl:mt-[0.5rem] xl:mr-2 xl:items-center"></div>
          <div className="font-bold text-black font-mono xl:mr-2 cursor-pointer xl:hover:border-2 xl:hover:border-b-slate-900">Your Privacy Choices</div>
          <div className = "xl:flex w-[0.4rem] h-[0.3rem] bg-black xl:rounded-full xl:mt-[0.5rem] xl:mr-2 xl:items-center"></div>
          <div className="font-bold text-black font-mono xl:mr-2 cursor-pointer xl:hover:border-2 xl:hover:border-b-slate-900">Destinations</div>  
        </div>
        
      </div>  
    </>
  )
}

export default PageFooter