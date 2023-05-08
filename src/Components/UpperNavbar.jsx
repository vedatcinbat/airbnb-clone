/* eslint-disable no-unused-vars */
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ReorderIcon from "@mui/icons-material/Reorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

const airbnblogo =
  "https://companieslogo.com/img/orig/ABNB-4aaade0f.png?t=1633511992";

function UpperNavbar({ basket, totalPrice }) {
  const numObjects = Object.keys(basket).length;

  return (
    <div
      className="
    bg-gray-100 w-full flex items-center justify-between text-center 
    max-sm:text-[1rem] sm:text-[1rem] md:text-[1.2rem] lg:text-[1.5rem]
    max-sm:h-[5rem] sm:h-[4.5rem] md:h-[5.5rem] lg:h-[6rem]
    max-lg:p-4 max-lg:items-center xl:p-4
    sticky top-0 z-5 text-black
    "
    >
      <Link to="/">
        <div className="left-part flex items-center">
          <img
            src={airbnblogo}
            className="cursor-pointer xl:ml-[3rem] max-sm:w-[1rem] max-sm:h-[1rem] max-lg:w-[1.8rem] max-lg:h-[1.8rem] lg:h-[2rem] lg:w-[2rem]"
            alt="Logo"
          />
          <div className="cursor-pointer max-lg:ml-2 lg:ml-2 text-[#FF385C]">
            airbnb
          </div>
        </div>
      </Link>

      <div className="cursor-pointer center-part flex xl:ml-[6rem] text-black  ">
        <div className="texts flex xl:rounded-r-[2.5rem] max-sm:items-center xl:border xl:border-slate-300 xl:hover:border-slate-400 xl:rounded-l-[2.5rem] max-sm:text-[0.5rem] xl:text-center max-sm:ml-[1rem] max-sm:p-[0.2rem] max-sm:bg-slate-200 max-sm:rounded-l-lg xl:bg-white xl:p-2 xl:text-[1rem]  ">
          <div className="text1 xl:mr-4 xl:pr-4 xl:pl-4 xl:border-r-2 xl:p-2 max-sm:p-[0.2rem] max-sm:border-1 ">
            Anywhere
          </div>
          <div className="text2 xl:mr-4 xl:pr-4 xl:border-r-2 xl:p-2 max-sm:p-[0.2rem]  ">
            Any week
          </div>
          <div className="text3 xl:pr-4 text-gray-400 xl:p-2 max-sm:p-[0.2rem]  ">
            Add guests
          </div>
          <SearchIcon className="max-sm:scale-50 xl:scale-[1.5] xl:mr-2 xl:mt-[0.5rem] xl:text-white xl:bg-[#FF385C] xl:rounded-full" />
        </div>
      </div>

      <div className="cursor-pointer right-part xl:mr-[3rem] flex max-sm:text-[0.6rem] xl:items-center max-sm:items-center">
        <div className="cursor-pointer xl:mr-2 xl:text-[1rem] xl:font-bold">
          Airbnb your home
        </div>
        <LanguageIcon className="cursor-pointer max-sm:scale-[0.4]  xl:mr-2 xl:scale-100" />
        <div className="cursor-pointer xl:pb-3 xl:pt-3 xl:flex xl:items-center right-right-part xl:rounded-full  xl:border xl:border-slate-300">
          <ReorderIcon className="cursor-pointer  max-sm:scale-[0.6] xl:mr-3 xl:ml-2 xl:scale-100" />
          <AccountCircleIcon className="cursor-pointer max-sm:scale-[0.6] xl:text-[#717171] xl:mr-2 xl:scale-150" />
          <div className="basket flex justify-between">
            <div className="toBasket -translate-y-1 -translate-x-1">
              <Link to="/basket" className="">
                <ShoppingBasketIcon
                  to="/basket"
                  className="xl:scale-[1.2] xl:mr-2 xl:ml-2"
                />
              </Link>
            </div>
            <Link to="/basket" className="">
              <div className="absolute text-sm border rounded-full text-white bg-black ml-[2rem] -translate-x-[3.5rem] -translate-y-[0.1rem] w-[1.4rem] h-[1.4rem]">
                {numObjects}
              </div>
            </Link>
          </div>
        </div>
        <Link to="/basket" className="">
          <div className="totalPrice border border-1 border-[#121212] p-2 text-[1.3vh] rounded-[2rem] flex">
            <div className="mr-2">Total Price : </div>
            <div>{totalPrice !== null && <div>{totalPrice} $</div>}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UpperNavbar;
