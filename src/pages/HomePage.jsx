import React from 'react'
import Houses from '../Components/Houses'
import Navbar from '../Components/Navbar';
import DisplayTotal from '../Components/DisplayTotal';
import PageFooter from '../Components/PageFooter';

function HomePage({basket, setBasket, category, setCategory}) {
  
  const size = Object.keys(basket).length;

  let totalPrice = 0;

  for(let i = 0; i < size; i++) {
      let price = Number(basket[i].Price);
      totalPrice += price;
  }
  return (
    <>
      
      <nav className="sticky top-0 z-[100] max-sm:w-[26vh]">
        <Navbar totalPrice={totalPrice} category={category} setCategory={setCategory} basket={basket} />
      </nav>
      {category === "Rooms" && <DisplayTotal />}

      <main className="pt-4 ">
        <Houses category={category} basket={basket} setBasket={setBasket} />
      </main>
      <PageFooter /> 
    </>
  ); 
  
}

export default HomePage