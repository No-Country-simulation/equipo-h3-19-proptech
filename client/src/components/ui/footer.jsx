import React, { useEffect, useState } from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


const Footer = () => {




  return (
    <footer className="w-full">
     <div className="flex w-full footer bg-bgTerceary text-neutral-content grid-rows-2 p-10">
     <nav className="w-1/5">
        <div className="flex flex-col items-center"> 
            <div className="flex w-full text-xl font-bold justify-center font-serif " >Informacion de contacto</div>
            <div className="text-base">+57 3120 000 000</div>
            <div className="text-base">ejemplo@gmail.com</div>
        </div>
      </nav>

      <nav className="w-3/5 flex flex-col justify-center items-center">
        <div className="flex w-full text-3xl font-bold justify-center font-serif" >Financial.Land</div>
        <div className="border-b-2 border-colorFithy w-48 pt-2"></div>
        <div className="flex-col flex gap-2 text-xl">
                <div className="flex text-5xl gap-2 pt-4 ">
                    <FaLinkedin />
                    <FaFacebookSquare />
                    <FaInstagramSquare />
                    <AiFillTikTok />
                </div>
            </div>
      </nav>
      <nav className="w-1/5 flex flex-col items-center">
        <a className="link link-hover hover:text-gray-300 cursor-pointer">Legal Warning</a>
        <a className="link link-hover hover:text-gray-300 cursor-pointer">Terms of use</a>
        <a className="link link-hover hover:text-gray-300 cursor-pointer">Privacy Policy</a>
        <a className="link link-hover hover:text-gray-300 cursor-pointer">Cookie policy</a>
      </nav>
     </div>

     <div className="flex flex-col py-10 text-sm gap-2">
        <div className="font-bold underline">Terminos y Condiciones </div>
        <div className="flex ">
            Al utilizar nuestra plataforma, aceptas cumplir con los terminos y Condiciones establecidos.
            Estos incluyen politicas relacionadas con el uso del sitio, la inversion, la privacidad de datos,
            y las pnligaciones de las partes involucradas. Te recomendamos leer nuestros Terminos y Condiciones
            completos para mas informacion.
        </div>
     </div>
    </footer>
  );
};

export default Footer;
