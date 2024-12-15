import React from "react";
import './flipcard.css'

const FlipCard = ({title, description, icono}) => {


  return (
  
      <div className="card ">
        <div className="  w-[29rem] h-64 card__content text-center relative p-20 transition-transform duration-1000 text-white font-bold">
          <div 
            className="
              border-2 
              border-colorSecondary 
              text-white rounded-lg 
              card__front absolute 
              top-0 bottom-0 right-0 left-0 p-8  
              flex items-center justify-center
              bg-gradient-to-bl  from-[#194e70] from-0% via-[#226a99] to-[#194e70] 
              "
            >
            <div className="flex flex-col gap-8">
                <h2 className="text-5xl font-medium">{title}</h2>
                
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
