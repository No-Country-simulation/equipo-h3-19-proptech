import React, { useState, useEffect } from "react";
import "./carousel.css";
import { Link } from "react-router-dom";

import image2 from "../../assets/register.jpg";

import fondoNotices1 from "../../assets/Front/1.png"
import fondoNotices2 from "../../assets/Front/2.png"
import fondoNotices3 from "../../assets/Front/3.png"

import { getNotices,getTwoNotices } from "../../services/notices";
import { FaArrowRightLong } from "react-icons/fa6";




const Carousel = () => {
  const [data, setData] = useState(null);

  const [notices, setNotices] = useState(null);

  const images = [
     fondoNotices1,
     fondoNotices2,
     fondoNotices3
  ]


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const datas = await getNotices();
        setNotices(datas); // Guardar los datos en el estado


        const data2 = await getTwoNotices();

        setData(data2)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // console.log(notices);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
  className="slider w-full   h-[30rem] bg-gray-400  "
  style={{
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    
  }}
>
  <div className=" py-6 inset-0 bg-opacity-80 w-full h-full flex flex-col ">
    <button className="slider-button prev text-8xl bg-transparent w-18 h-20 " 
      onClick={prevSlide}
      style={{
        background: "transparent", // Fondo transparente
        border: "none",            // Asegúrate de quitar bordes si es necesario
        outline: "none"  
      }}
    >
      ❮
    </button>
    <div className="slider-content w-full h-full">
      {data?.map((slide, index) => (
        <div
          key={slide.url}
          className={`w-full slide ${
            index === currentIndex ? "active" : "hidden"
          }`}
        >
          <div className="caption px-20 flex w-full h-full">
            <div className="w-1/2 flex flex-col gap-5 justify-center items-center ">
              <div className="w-[44rem] h-80  rounded-lg py-8 px-10 bg-white/5 backdrop-blur-md flex flex-col">
                <div className="font-semibold text-3xl pb-4">{slide.title}</div>
                <div className="text-base"> {slide.description}</div>
                <div className="flex gap-3 h-10 py-10">
                  <Link className="flex gap-2" to={slide.url}>
                    <div className="h-full text-sm flex items-center">
                    Leer Mas
                    </div>
                  <div className="h-full text-3xl flex items-center">
                    <FaArrowRightLong />
                  </div>
                </Link>
              </div>

              </div>
              

            </div>
            
          </div>
        </div>
      ))}
    </div>
    <button 
      className="slider-button next text-8xl bg-transparent w-18 h-20" 
      onClick={nextSlide}
      style={{
        background: "transparent", // Fondo transparente
        border: "none",            // Asegúrate de quitar bordes si es necesario
        outline: "none"  
      }}
    >
      ❯
    </button>
  </div>
</div>

  );
};

export default Carousel;
