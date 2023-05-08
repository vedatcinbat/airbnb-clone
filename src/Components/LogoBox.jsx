import React from 'react'




function LogoBox({ category, setCategory,logourl, logoTitle}) {
    
    
    const handleClick = () => {
        setCategory(logoTitle);
        /* alert("Current Category Is : " + logoTitle); */
    }

  if(logoTitle === category) {
    
    return (
       
        <>
            <div className = "xl:items-center xl:pl-4 xl:align-center">
                <div  onClick={handleClick}   className = "logoBox max-sm:items-center max-sm:bg-red-300 xl:flex xl:flex-col xl:font-bold xl:border-2 xl:border-b-slate-800 xl:border-l-white xl:border-r-white xl:border-t-white  xl:p-2 xl:text-center xl:items-center">
                    <img src = {logourl}  className="max-sm:w-[20px] max-sm:h-[20px] w-[30px] h-[30px]" alt="logoImg" />
                    <div className = "logoTitle xl:text-[0.8rem] max-sm:text-[0.6rem]">{logoTitle}</div>
                </div>
            </div>
        </>
      )
  }else {
    
    return (
        <>
            <div className = "xl:items-center hover:xl:border-2 hover:xl:border-b-slate-300 hover:xl:border-l-white hover:xl:border-r-white hover:xl:border-t-white hover:xl:align-center opacity-60 hover:opacity-80">
                <div onClick={handleClick}  className = "logoBox xl:flex xl:flex-col xl:p-2 xl:text-center xl:items-center">
                    <img src = {logourl}  className="w-[30px] h-[30px]" alt="logoImg" />
                    <div className = "logoTitle xl:text-[0.8rem]">{logoTitle}</div>
                </div>
            </div>
        </>
      )
  }
}

export default LogoBox