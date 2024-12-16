/* eslint-disable react-hooks/exhaustive-deps */
import React,{  useState } from "react";
 import { useFormStatus } from "react-dom";

import {verifyUser} from "../../services/verify.js"

import { useDispatch } from "react-redux";


import { Link, useLocation, useNavigate } from 'react-router-dom';


import image1 from "../../assets/imagenLogin.jpg";

import Navbar from "../ui/Navbar.jsx";
import { IoEyeSharp } from "react-icons/io5";

import { MdMarkEmailRead } from "react-icons/md";






export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; 


  const [codigo, setCodigo] = useState("");
  

  const handleSubmit = async(e)=>{
    e.preventDefault(); // Evita la recarga de la página
    if (!codigo) {
      setErrors({ message: "Debes ingresar el codigo" });
      return;
    }

    try {
       await verifyUser({ email, codigo});

      navigate('/login')

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }



  return (
    <div 
      style={{ backgroundImage: `url(${image1})` }}
      className="bg-cover bg-center px-6 md:px-0  flex justify-center content-center  h-screen flex-wrap ">
      
      {/* Capa azul */}
      <div className="py-6 inset-0 bg-[#447089] bg-opacity-80 w-full h-full flex flex-col"> 
        <Navbar />
        <div className="flex w-full justify-center">
          <div className="py-10 rounded-lg py-10 border-coloPrimary border w-1/2 flex flex-col gap-6 backdrop-blur-sm bg-white/30 text-colorPrimary p-4 items-center">
          <div>
          <div className="flex w-full justify-center">
            <div className=" w-32 h-32rounded-full text-9xl">
                <MdMarkEmailRead />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="text-3xl font-semibold">Verificacion por email</div>
          </div>
          </div>

          <div className="flex flex-col gap-2 ">
             <div className="flex flex-col justify-center text-lg">
                
                <span className="text-center">Hemos enviado un codigo de verificacion al siguiente correo</span>
                <span className="text-center">
                      {email} <a className="text-sm cursor-pointer font-bold hover:text-gray-200">(cambiar)</a>
                </span>
             </div>
          </div>

        <form onSubmit={handleSubmit} className="w-2/3 flex flex-col gap-4 ">

          <div className="py-4 flex flex-col gap-3">
            {/*state?.errors?.email && <p>* {state.errors.email}</p>*/}

            <div className="flex flex-col text-xl gap-3">
              <label htmlFor="password" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>Introduce el codigo</label>
              <div className="w-full flex relative">
                <input
                className="w-full p-2 b-1 border bg-transparent"
                id="codigo"
                name="code"
                placeholder="ingresa el codigo"
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                />
              </div>
              
            </div>
            {/*state?.errors?.password && (
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )*/}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-colorFourth px-3 py-2 cursor-pointer rounded-md font-semibold text-colorPrimary "
            >
              ENVIAR CODIGO
            </button>
          </div>

        </form>

        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-1">
            
            <div className="flex w-full gap-2">
              <div> ¿No has recibido el codigo? </div>
              <Link to="/register" className="font-bold hover:text-gray-200">Probar de otra manera</Link>
            </div>
          </div>
        </div>

          </div>
        </div>
        
      </div>


    </div>
  );
}
