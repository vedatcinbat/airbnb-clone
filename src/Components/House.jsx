import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Carousel from "better-react-carousel";
import "./house.css";

export default function House({data, basket, setBasket}) {


   function handleAdd() {
    setBasket(prevVal => {
        return [...prevVal, data];
    });
    //alert("Item added to the basket !");
   };
   console.log(basket);
  return (
    <>
       <div className = "box xl:w-[21rem] z-1 xl:h-[25rem] flex flex-col justify-between  xl:mr-4 ">
        <div className = "sliderBox flex-1  xl:p-[1rem] xl:rounded-lg ">
            <Carousel className="" cols={1} rows={1} loop>
                <Carousel.Item>
                    <div className="imgPart">
                        <img className="sliderImg w-[20rem] border border-1 border-[#ff385d54]" id="img" src={data.Pictures.p1} alt="img1" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgPart">
                        <img className="sliderImg w-[20rem] border border-1 border-[#ff385d54]" id="img" src={data.Pictures.p2} alt="img2" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imgPart">
                        <img className="sliderImg w-[20rem] border border-1 border-[#ff385d54]" id="img" src={data.Pictures.p3} alt="img3" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div  className="imgPart">
                        <img className="sliderImg w-[20rem] border border-1 border-[#ff385d54]" id="img" src={data.Pictures.p4} alt="img4" />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className = "bottomPart flex-1 text-[1rem] xl:p-4 mb-4">
            <div className = "locationAndScore xl:flex xl:justify-between">
                <div className = "location font-bold text-xl">{data.Location}</div>
                <div className = "starArea flex">
                    <div className = "star font-bold">{data.Star}</div>
                    <StarIcon className="text-[#f4ff5b]" />
                </div>
            </div>
            <div className = "description text-[#686868]">{data.Description}</div>
            <div className="priceAndAddButton flex justify-between mt-2 items-center">
                <div className = "price font-bold">{data.Price} $ night</div>
                <button 
                className = "addButton p-2 border border-1 border-[#000000] font-bold bg-[#fd617e] text-white cursor-pointer rounded-xl"
                onClick={() => handleAdd({data})}
                >Add to card</button>
            </div>
        </div>
       </div>
    </>
  )
}

