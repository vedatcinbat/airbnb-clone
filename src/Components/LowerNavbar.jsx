import React from 'react'
import LogoBox from './LogoBox'
import FilterListIcon from '@mui/icons-material/FilterList';
import Carousel from "better-react-carousel";
import "../Components/lowernavbar.css"

const lowerNavbar = [
  {
      LogoUrl : "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
      Title : "Rooms"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
      Title : "Amazing Views"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
      Title : "Beachfront"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
      Title : "Tiny homes"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
      Title : "Amazing pools"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
      Title : "Trending"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
      Title : "Boats"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
      Title : "Castles"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      Title : "OMG!"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
      Title : "Cabins"
  },
  {
      LogoUrl : "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
      Title : "Camping"
  },
]




function LowerNavbar({category, setCategory}) {

  
  

  return (
    <>
      <div className = "lowerNavbar max-sm:mr-[0.1rem]  max-sm:ml-[0.1rem] max-sm:flex max-sm:pr-[0.2rem] xl:pr-[5rem] max-sm:pl-[0.1rem] xl:pl-[1rem] sticky top-0 bg-white  xl:flex xl:h-[4.6rem] pt-1 max-sm:h-[3rem] xl:border-1 xl:border xl:border-b-[#dddddd]">
        <div className = "logos max-sm:border max-sm:border-black  xl:flex xl:relative xl:justify-around xl:align-center xl:items-center max-sm:w-[100%] xl:w-[188vh] xl:pl-4 max-sm:pl-1 cursor-pointer">
          <Carousel cols={10} rows={1} loop>
            {lowerNavbar.map((logo) => (
              <Carousel.Item>
                <div className = "logoboxItem xl:w-[130px] max-sm:w-[2rem] max-sm:h-[2.7rem] xl:h-[70px]">
                  <LogoBox category={category} setCategory={setCategory} logourl = {logo.LogoUrl} logoTitle = {logo.Title} />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className = "filter xl:flex max-sm:items-center max-sm:w-[100%] max-sm:ml-[0.1rem] xl:items-center xl:text-center xl:flex-grow  cursor-pointer">
          <div className = "filterItem border border-1 flex max-sm:p-1 max-sm:text-center max-sm:pl-[1rem] max-sm:items-center p-2 border-gray-300 rounded-[4rem] max-sm:w-[6rem] w-[8rem] xl:hover:shadow-xl">
              <div className = "filterIcon   xl:ml-[1rem] xl:mr-2 ">
                <FilterListIcon />
              </div>
              <div className = "filterTitle">
                <div className="max-sm:text-[0.5rem]">Filters</div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default LowerNavbar