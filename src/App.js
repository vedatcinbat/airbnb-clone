/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';


import Navbar from './Components/Navbar';
import PageFooter from './Components/PageFooter';
import Houses from './Components/Houses';
import DisplayTotal from './Components/DisplayTotal';
import BasketPage from './pages/BasketPage';





function App() {
  const [category, setCategory] = useState("Rooms");
  const [basket, setBasket] = useState([]);
  return(
    <div className="max-sm:w-[100%] max-sm:overflow-hidden">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage basket={basket} setBasket={setBasket} category={category} setCategory={setCategory} />} />
        <Route path="/basket" element={<BasketPage basket={basket} setBasket={setBasket} category={category} setCategory={setCategory} />}  />
      </Routes>
    </BrowserRouter>
    </div>
  
  )
  
}

export default App;
