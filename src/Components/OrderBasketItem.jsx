import React from "react";
import Carousel from "better-react-carousel";
import StarIcon from '@mui/icons-material/Star';

/*
RoomId
Pictures
Location
Description
Star

*/

function OrderBasketItem({ houseDetails }) {

    




  console.log(houseDetails);
  return (
    <div className="xl:p-[2rem]">
      <div className="basketItemBox border border-1 flex  border-[#b8b8b8] rounded-lg xl:p-[2rem]">
        <div className="sliderBox xl:w-[80vh] lg:w-[60vh] md:w-[40vh] max-sm:w-[20vh]  xl:pt-[0.2rem] xl:pb-[0.2rem] xl:rounded-lg ">
          <Carousel className="" cols={2} rows={1} loop>
            <Carousel.Item>
              <img
                className="lg:w-[20rem] max-sm:w-[15rem]"
                id="img"
                src={houseDetails.Pictures.p1}
                alt="img1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="lg:w-[20rem] max-sm:w-[15rem]"
                id="img"
                src={houseDetails.Pictures.p2}
                alt="img2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="lg:w-[20rem] max-sm:w-[15rem]"
                id="img"
                src={houseDetails.Pictures.p3}
                alt="img3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="lg:w-[20rem] max-sm:w-[15rem]"
                id="img"
                src={houseDetails.Pictures.p4}
                alt="img4"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className = "bottomPart max-sm:text-[0.6rem] lg:text-[1.2rem] xl:p-[2rem] mb-4 max-sm:w-[15vh] max-sm:h-[20vh] xl:w-[40vh] border border-1 border-[#b8b8b87c] rounded-xl">
            <div className = "locationAndScore xl:flex xl:justify-between xl:items-center">
                <div className = "location font-bold max-sm:text-[0.8rem] lg:text-[1.4rem]">{houseDetails.Location}</div>
                <div className = "starArea flex items-center ">
                    <div className = "star font-bold">{houseDetails.Star}</div>
                    <StarIcon className="text-[#f4ff5b]" />
                </div>
            </div>
            <div className = "description text-[#686868]">{houseDetails.Description}</div>
            <div className="priceAndAddButton flex justify-between mt-2 items-center">
                <div className = "price font-bold">{houseDetails.Price} $ night</div>
            </div>
        </div>

        
      </div>
    </div>
  );
}

export default OrderBasketItem;
