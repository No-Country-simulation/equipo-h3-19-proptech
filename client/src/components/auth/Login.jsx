/* eslint-disable react-hooks/exhaustive-deps */
import React,{  useState } from "react";
 import { useFormStatus } from "react-dom";

import {signin} from "../../services/auth.js"

import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlices";

import { Link } from 'react-router-dom';
import image1 from "../../assets/imagenLogin.jpg";
import Logo from "../../assets/Logo.png";
import Navbar from "../ui/Navbar";
import { IoEyeSharp } from "react-icons/io5";




export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const dispatch = useDispatch();
  //const [state, action] = useActionState(signin, undefined);
  const { pending } = useFormStatus();



  const handleSubmit = async(e)=>{
    e.preventDefault(); // Evita la recarga de la página
    if (!email || !password) {
      setErrors({ message: "Todos los campos son obligatorios" });
      return;
    }

    try {
      const response = await signin({ email, password });
      if (response && response._id && response.email) {
        const {email, _id, token}= response;
        dispatch( login({_id, email, token}))
   
        // dispatch(setUser(response.data)); // Actualiza el estado global si es necesario
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }


  const togglePasswordVisibility = () => {
   // event.preventDefault(); // Evita la recarga de la página
    setShowPassword(!showPassword);
  };





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
            <div className=" w-32 h-32rounded-full ">
              <img src={Logo} alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="text-3xl font-semibold">Iniciar sesion</div>
          </div>
          </div>

        <form onSubmit={handleSubmit} className="w-2/3 flex flex-col gap-4 ">

          <div className="py-4 flex flex-col gap-3">
            <div className="flex flex-col text-xl gap-2 ">
              <label htmlFor="email" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>Email</label>
              <input
                className="w-100 p-2 b-1 border bg-transparent"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/*state?.errors?.email && <p>* {state.errors.email}</p>*/}

            <div className="flex flex-col text-xl gap-3">
              <label htmlFor="password" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>Contraseña</label>
              <div className="w-full flex relative">
                <input
                className="w-full p-2 b-1 border bg-transparent"
                id="password"
                name="password"
                placeholder="ingresa tu password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button  onClick={togglePasswordVisibility} className="absolute inset-y-0 right-3 text-3xl">
                  <IoEyeSharp />
                </button>
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
              disabled={pending}
              type="submit"
              className="bg-colorFourth px-3 py-2 cursor-pointer rounded-md font-semibold text-colorPrimary "
            >
              INICIAR SESION
            </button>
          </div>

        </form>

        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-1">
            <Link className="flex w-full justify-center font-bold underlin hover:text-gray-200">Olvide la Contraseña</Link>
            <div className="flex w-full gap-2">
              <div>No tienes una cuenta aun? </div>
              <Link to="/register" className="font-bold hover:text-gray-200">Registrate</Link>
            </div>
          </div>
        </div>

          </div>
        </div>
        
      </div>


    </div>
  );
}
