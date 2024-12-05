import React from "react";
import './flipcard.css'

const FlipCard = ({title, description, icono}) => {


  return (
  
      <div className="card ">
        <div className="  w-96 h-64 card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
          <div className="border-2 border-colorSecondary text-black rounded-lg card__front absolute top-0 bottom-0 right-0 left-0 p-8  flex items-center justify-center">
            <div className="flex flex-col gap-8">
                <h2 className="text-6xl font-semibold">{title}</h2>
                <div className="text-7xl flex justify-center">{icono}</div>
            </div>
            
          </div>
          <div className="border-4 border-colorSecondary text-black rounded-lg card__back absolute top-0 bottom-0 right-0 left-0 p-8  flex items-center justify-center">
            <h2>
                {description}
            </h2>
          </div>
        </div>
      </div>
   
  );
};

export default FlipCard;
