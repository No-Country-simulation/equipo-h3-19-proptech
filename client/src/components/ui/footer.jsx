import React, { useEffect, useState } from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";


const Footer = () => {




  return (
    <footer className="w-full">
     <div className="flex w-full footer bg-bgTerceary text-neutral-content grid-rows-2 p-10">
     
     <nav className="w-2/6 flex flex-col justify-center items-center">
        <div className="flex w-full text-3xl font-bold justify-center font-serif" >Financial.Land</div>
        <div className="border-b-2 border-colorFithy w-48 pt-2"></div>
   
        <div className="text-base  pt-6">
              Somos una empresa en la que conectamos inversores y usuarios con soluciones 
              financieras innovadoras y herramientas flexibles para decisiones estratégicas.
        </div>
      
        <div className="flex gap-2 text-xl w-full">
                <div className="flex text-2xl gap-6 pt-4 ">
                    <FaLinkedin className="cursor-pointer hover:text-stone-200" />
                    <FaFacebookSquare className="cursor-pointer hover:text-stone-200" />
                    <FaInstagramSquare className="cursor-pointer hover:text-stone-200" />
                </div>
            </div>
      </nav>
     
     
     <nav className="w-2/6 flex flex-col items-center">
        <div className="flex items-center gap-14"> 
          <div className="flex flex-col gap-4 ">
            <div className="font-bold text-2xl">Productos</div>
            <div className="flex flex-col gap-2 text-base">
                <div className="cursor-pointer hover:text-stone-200">Invertir</div>
                <div className="cursor-pointer hover:text-stone-200">Prestamo</div>
                <div className="cursor-pointer hover:text-stone-200">Preguntas</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="font-bold text-2xl">Nosotros</div>
            <div className="flex flex-col gap-2 text-base">
                <div className="cursor-pointer hover:text-stone-200">Compania</div>
                <div className="cursor-pointer hover:text-stone-200">Blog</div>
                <div className="cursor-pointer hover:text-stone-200">Mi cuenta</div>
            </div>
          </div>
        </div>
      </nav>

      
      <nav className="w-2/6 flex flex-col items-center">
        <div className="">
        <div className="font-bold text-2xl pb-6 w-full justify-center">Proximamante tendremos actualizaciones</div>
        
        <div className="flex gap-4 w-full justify-center">
          <div className="w-48 bg-colorFithy rounded-lg flex py-2">
            <div className="w-full flex">
              <div className="w-1/3 text-4xl flex justify-center items-center" >
                  <FaApple />
                </div>
                <div className="w-2/3">
                  <div className="text-xs">Proximamante en</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
            </div>  
          </div>
          <div className="w-48 bg-colorFithy rounded-lg flex py-2">
            <div className="w-full flex">
              <div className="w-1/3 text-4xl flex justify-center items-center" >
                <IoLogoGooglePlaystore />
                </div>
                <div className="w-2/3">
                  <div className="text-xs">Proximamante en</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
            </div>  
          </div>
        </div>

        <div>
          <div></div>
        </div>
        </div>
      </nav>


     </div>
      <div className="flex w-full border-t border-gray-400 my-4"></div>

     <div className="flex flex-col py-10 text-sm gap-6">
        <div className="font-bold underline">
          <div className="w-full flex justify-between">
          <div>© 2024 Techfinance SAS. Todos los derechos reservados.</div>
            <div className="flex gap-4">
              <div className="cursor-pointer hover:text-gray-300">Terminos y Condiciones</div>
              <div>|</div>
              <div className="cursor-pointer hover:text-gray-300">Politicas de Privacidad</div>
            </div>
          </div>
          
        </div>
        <div className="flex text-justify">
        FinancialLand es una marca comercial de FINANCIALLAND SAS, sociedad por acciones simplificada, con domicilio en una reconocida avenida de la ciudad de Buenos Aires. FinancialLand no garantiza rendimientos, retornos de ningún tipo ni la recuperación del capital invertido. Las proyecciones de rentabilidad estimada y los plazos de inversión mencionados en su sitio web oficial son únicamente aproximaciones internas realizadas por FinancialLand SAS basadas en estudios de mercado.

Las inversiones están sujetas a variaciones en los precios y riesgos inherentes al mercado inmobiliario. Es responsabilidad de los potenciales inversores llevar a cabo un análisis detallado de riesgos antes de comprometerse en los fideicomisos ofrecidos. FinancialLand SAS no proporciona asesoramiento financiero o legal, por lo que los inversores deben consultar con sus propios asesores especializados antes de tomar decisiones de inversión.

Se informa al público que, conforme a lo establecido en el artículo 1673 del Código Civil y Comercial de la Nación, el registro de Fiduciarios Financieros no implica que los fideicomisos en los que participen estén regulados por la COMISIÓN NACIONAL DE VALORES (CNV), cuya competencia se limita exclusivamente a fideicomisos financieros bajo el régimen de oferta pública.
        </div>
     </div>
    </footer>
  );
};

export default Footer;
