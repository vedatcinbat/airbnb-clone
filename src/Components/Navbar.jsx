import React from 'react'
import UpperNavbar from './UpperNavbar';
import LowerNavbar from './LowerNavbar';
// eslint-disable-next-line no-unused-vars
import DisplayTotal from './DisplayTotal';





function Navbar({category, setCategory, basket, totalPrice}) {
  
    return (
      <header className="sticky top-0 bottom-2 xl:w-[100%]">
          <UpperNavbar totalPrice={totalPrice} basket={basket} />
          <LowerNavbar category={category} setCategory={setCategory} />
      </header>
      
    );
}

export default Navbar