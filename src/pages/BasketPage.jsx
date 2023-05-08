import React from "react";
import PageFooter from "../Components/PageFooter";
import UpperNavbar from "../Components/UpperNavbar";
import OrderBasketItem from "../Components/OrderBasketItem";

function BasketPage({ category, setCategory, basket, setBasket }) {
  //console.log(basket);

  const size = Object.keys(basket).length;

  let totalPrice = 0;

  for(let i = 0; i < size; i++) {
      let price = Number(basket[i].Price);
      totalPrice += price;
  }

  return (
    <>
      <nav className="sticky top-0 z-[100]">
        <UpperNavbar totalPrice={totalPrice} basket={basket} />
      </nav>

      <div className="orders flex">
        <div className="order-items w-[95%]">
            {basket.map((houseDetails) => {
                return <OrderBasketItem houseDetails={houseDetails} />
            })}
        </div>
      </div>

      <PageFooter />
    </>
  );
}

export default BasketPage;
