import React from 'react'
import House from './House'
import "../Components/houses.css"

const Rooms = [
    {
        RoomId: 1,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/miso/Hosting-546923400311446203/original/4c43b516-a11b-49bb-a2ed-d4b0c8cc34a5.jpeg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/miso/Hosting-546923400311446203/original/239adad6-2478-45c8-9c9b-bd3527b792ff.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/miso/Hosting-546923400311446203/original/2332cde9-89bb-46d5-b803-a1f91e7e12d9.jpeg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/miso/Hosting-546923400311446203/original/02eb20aa-6f28-4204-a91a-a125878d027f.jpeg?im_w=720"
        },
        Location: "Mexico City, Mexico",
        Description: "Stay with Riley * Artist",
        Star: "4.2",
        Date: "May 4-9",
        Price: "743",
    },
    {
        RoomId: 2,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/90d22704-7f1a-44ad-924a-ecbdbb666db0.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/7fa4060d-60c1-44b0-921b-6958e7b200f1.jpeg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/b7c698e2-6d20-4d2a-a933-4c3f9e36eac4.jpeg?im_w=720"
        },
        Location: "Valencia, Spain",
        Description: "Stay with Sagrario * Coach",
        Star: "4.1",
        Date: "Sep 20-27",
        Price: "843",
    },
    {
        RoomId: 3,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/miso/Hosting-31508919/original/6d35f347-3e35-4103-8845-6d868945d237.jpeg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/miso/Hosting-31508919/original/250dc0c3-4f9a-4149-af74-36b274d83ca0.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/c8279a67-2b35-4448-b45d-a45913dae0bd.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/5c3f1837-c973-4f44-9e92-26c7d4e687da.jpg?im_w=720"
        },
        Location: "Cotia, Brazil",
        Description: "Stay with Roberta * Works in wellness",
        Star: "3.2",
        Date: "May 5-11",
        Price: "1190",
    },
    {
        RoomId: 4,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/a0b3e1d3-2e64-421b-b021-98e1973f9cfe.jpg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/5d2b6625-d4b8-45ee-8d40-c1322c77d7f4.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/749528e3-d251-4ee7-aa24-4b13604e7501.jpg?im_w=720"
        },
        Location: "Surry Hills, Australia",
        Description: "Stay with Bron * Business owner",
        Star: "5.0",
        Date: "Jul 15-20",
        Price: "2074",
    },
    {
        RoomId: 5,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e80ace7e-c494-49b9-9595-08ab76ef4365.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/b779ec9c-080a-4788-9391-512f7d247aa0.jpeg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/55b0263c-756d-466b-b050-39b031398a1d.jpeg?im_w=720"
        },
        Location: "Lindfield, UK",
        Description: "Stay with Michelle & Micheal * Food Artist",
        Star: "3.8",
        Date: "May 8-13",
        Price: "2723",
    },
    {
        RoomId: 6,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/airflow/Hosting-588792902420108198/original/2ad04755-5c82-4a77-bf29-9de0b331fc3e.jpg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/airflow/Hosting-588792902420108198/original/570e024a-4f34-4d5a-b99e-f7de5051631a.jpg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/airflow/Hosting-588792902420108198/original/bc425787-435d-4988-ad04-3a624958e3a0.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/airflow/Hosting-588792902420108198/original/4571d59a-2c33-44a1-8bc0-105e8ccec4a2.jpg?im_w=720"
        },
        Location: "Varese, Italy",
        Description: "Stay with Valentina * Agente Ietterario",
        Star: "4.7",
        Date: "May 14-20",
        Price: "1473",
    },
]
const AmazingViews = [
    {
        RoomId: 1,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/9b478996-6c61-4188-b053-c0f6e3193b63.jpg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/a5598e2d-c8d7-4e50-b85b-5b9c5f88c546.jpg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/5ca2e858-1d4b-48f4-ac2b-fa2c8cef1506.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/358e022d-5ba5-4d8d-9e1b-b34f97da3ec8.jpg?im_w=720"
        },
        Location: "Mikonos, Greece",
        Description: "Beach and mountain views",
        Star: "5.0",
        Date: "May 9-16",
        Price: "1200",
    },
    {
        RoomId: 2,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/miso/Hosting-627705419239587313/original/cee7ab7d-3a33-4a60-bd15-cc76f08254b3.jpeg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/miso/Hosting-627705419239587313/original/ace4a4be-192c-4df2-ba67-ceb3dd655945.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/miso/Hosting-627705419239587313/original/d21df143-4289-4e87-ba2f-b7d772371751.jpeg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/miso/Hosting-627705419239587313/original/1254cdf0-04d3-4dfc-acbd-9b27a789d43d.jpeg?im_w=720"
        },
        Location: "Paros, Greece",
        Description: "Sea views",
        Star: "4.2",
        Date: "Sep 20-25",
        Price: "1250",
    },
    {
        RoomId: 3,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/5a76f348-3d88-40ae-b1ee-4304275e6ee5.jpg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/4897526e-2f6a-40fe-8b4e-836aa1c98885.jpg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/6d993546-7d80-44c3-bfbb-19b5b2dbcbf1.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/aa78e8cf-3859-427d-8add-0e0ad810800b.jpg?im_w=720"
        },
        Location: "Mikonos, Greece",
        Description: "Sea views",
        Star: "4.1",
        Date: "May 9-12",
        Price: "1590",
    },
    {
        RoomId: 4,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/f9be352b-3b55-45a7-8c34-dc9ef16e5e08.jpg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/02dfba16-8d63-489d-9d61-3185a8325d40.jpg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/be45c55b-3c77-4fc2-923c-5933a71741c1.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/104df38f-15bb-48e9-a5d7-823d9f3d0fc7.jpg?im_w=720"
        },
        Location: "Ornos, Greece",
        Description: "Sea views",
        Star: "5.0",
        Date: "May 19-24",
        Price: "2200",
    },
    {
        RoomId: 5,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/4b303c90-f039-47d2-8ce6-af3e35a5172c.jpg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/miso/Hosting-667001117636139655/original/fe4dec8c-6b7b-4bfa-a5f1-36f9b9ec5195.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/miso/Hosting-667001117636139655/original/2b750888-515f-4567-9b9d-46be9d41ce54.jpeg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/12d984f0-5661-4a06-a7ba-5ee0b4f1ffb4.jpg?im_w=720"
        },
        Location: "Villa in Cantabria, Spain",
        Description: "La Casona de la Playa 7 beds * 5 bedrooms",
        Star: "5.0",
        Date: "Jul 12-20",
        Price: "1500",
    },
    {
        RoomId: 6,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/miso/Hosting-582538156051539155/original/707bc745-ae65-4cc0-a052-7b91fdb1d2f6.jpeg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/miso/Hosting-582538156051539155/original/8e625e97-0df3-4bd1-8834-f54159096ead.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/miso/Hosting-582538156051539155/original/88414b8f-819c-47eb-b6b9-148f47781b18.jpeg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/miso/Hosting-582538156051539155/original/014c5d57-b8d9-4e3b-a488-e82861cffa27.jpeg?im_w=720"
        },
        Location: "Dammuso in Martingana, Italy",
        Description: "Carpe Diem a dream corner on a dream island",
        Star: "4.5",
        Date: "May 12-20",
        Price: "2822",
    },
]
const Beachfront = [
    {
        RoomId: 1,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/miso/Hosting-42383266/original/45cfd85c-61b0-4062-8378-0be578045a18.jpeg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/miso/Hosting-42383266/original/34e4a711-17a5-483f-84a4-2a45cb141133.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/cb775684-35e2-43ef-9c2c-84dc7860090c.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/8844a50b-36f1-49bf-bc09-b0ad4e0c1d9b.jpg?im_w=720"
        },
        Location: "Urla, Turkey",
        Description: "S355 km away",
        Star: "4.94",
        Date: "Jun 3-8",
        Price: "500",
    },
    {
        RoomId: 2,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-771706153372878751/original/bbb5f5f6-7cef-4934-bc36-02ca716790ae.jpeg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-771706153372878751/original/aab088fc-be5a-4846-baf6-4d30c74d697d.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-771706153372878751/original/2bb7e158-0b3e-4eb8-9a01-36bbae82ba13.jpeg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-771706153372878751/original/4fb25f15-2e55-4850-9e9e-eabeac63ddbd.jpeg?im_w=720"
        },
        Location: "Galveston, Texas, US",
        Description: "A Step Into Paradise, Ocean Front Home",
        Star: "4.85",
        Date: "May 9-16",
        Price: "1488",
    },
    {
        RoomId: 3,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/45b18cad-9cd1-49f1-920a-5eeeca412996.jpg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/miso/Hosting-42293601/original/6b0b3266-3347-42f4-89e7-e05eead07295.jpeg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/7f6a6cf3-7b6a-46fa-b4f4-f83b702725ab.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/ad2264a9-4089-40a7-ba0d-dbf4be2e6f88.jpg?im_w=720"
        },
        Location: "Home in Saco, Maine, US",
        Description: "The Beach House.",
        Star: "3.6",
        Date: "May 5-15",
        Price: "950",
    },
    {
        RoomId: 4,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/monet/Luxury-578072673038532316/original/9a5abcc2-75e5-48e6-9688-69847b83175e?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/monet/Luxury-578072673038532316/original/7f3dc424-2f1c-49b8-b6b9-0e258394101f?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/monet/Luxury-578072673038532316/original/0ecc2384-ae4a-44f2-ac26-8afa71719a20?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/monet/Luxury-578072673038532316/original/674fcfd3-415d-4ebe-899d-d9af808cdcdc?im_w=720"
        },
        Location: "Saint-Raphael, France",
        Description: "Villa Hedone",
        Star: "5.0",
        Date: "Jul 20-25",
        Price: "2400",
    },
    {
        RoomId: 5,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/12f6a6cc-9880-46c8-b9cf-b30799cbe3fd.jpg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/8668e2e5-bf9a-4b97-9ffd-b2af98c2d4d7.jpg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/ffbfcb27-687f-40d2-91e0-855e596f0ec1.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/5e2bfeb1-2243-4735-b2b8-61d4e10b1de9.jpg?im_w=720"
        },
        Location: "Cabin in Millbrook, UK",
        Description: "Cynara - Characteristic 3 bed cabin",
        Star: "5.0",
        Date: "Jun 6-12",
        Price: "1500",
    },
    {
        RoomId: 6,
        Pictures : {
            p1: "https://a0.muscache.com/im/pictures/12f6a6cc-9880-46c8-b9cf-b30799cbe3fd.jpg?im_w=720",
            p2: "https://a0.muscache.com/im/pictures/8668e2e5-bf9a-4b97-9ffd-b2af98c2d4d7.jpg?im_w=720",
            p3: "https://a0.muscache.com/im/pictures/ffbfcb27-687f-40d2-91e0-855e596f0ec1.jpg?im_w=720",
            p4: "https://a0.muscache.com/im/pictures/5e2bfeb1-2243-4735-b2b8-61d4e10b1de9.jpg?im_w=720"
        },
        Location: "Cabin in Millbrook, UK",
        Description: "Cynara - Characteristic 3 bed cabin",
        Star: "5.0",
        Date: "Jun 6-12",
        Price: "1500",
    },
]




function Houses({category, basket, setBasket}) {
  if(category === "Rooms") {
    return (
        <div className = "mainHouse z-1 text-[5rem] xl:w-[100%] xl:p-[3rem] flex justify-between flex-wrap align-center items-center">
            {Rooms.map((room) => {
                return <House data={room} basket={basket} setBasket={setBasket} />
            } )}
        </div>
      )
  }else if(category === "Amazing Views") {
    return (
        <div className = "mainHouse z-1 text-[5rem] xl:w-[100%] xl:p-[3rem] flex flex-wrap align-center items-center">
            {AmazingViews.map((room) => {
                return <House data={room} basket={basket} setBasket={setBasket} />
            } )}
        </div>
      )
  }else if (category === "Beachfront") {
    return (
        <div className = "mainHouse z-1 text-[5rem] xl:w-[100%] xl:p-[3rem] flex flex-wrap align-center items-center">
            {Beachfront.map((room) => {
                return <House data={room} basket={basket} setBasket={setBasket}/>
            } )}
        </div>
      )
  }
}

export default Houses