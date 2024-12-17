import { useState, useEffect } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { prefix } from "./countries";
import Navbar from "../ui/Navbar";
import Logo from "../../assets/Logo.png";
import image2 from "../../assets/register.jpg";
import { CgDanger } from "react-icons/cg";

import {createUser} from "../../services/user";


export default function Temp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: 0,
    photeUrl: "/assets/flags/Flag_of_Argentina.svg.webp",
    rol: "",
    password: "",
  });

  const [isFirstForm, setIsFirstForm] = useState(true);
  const [isInversor, setIsInversor] = useState(true);
  const [openPrefixList, setOpenPrefixList] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCountry = (country) => {
    const found = prefix.find((pref) => pref.country === country);
    setData({
      ...data,
      prefix: found.pref,
      flag: found.src,
    });
  };

  const handleClickPrefixItem = (e) => {
    const id = Number(e.target.id);
    const found = prefix.find((pref) => pref.pref === id);
    setData({
      ...data,
      prefix: id,
      flag: found.src,
    });
    setOpenPrefixList(false);
  };

  const handleVisibilityPass1 = () => {
    const $pass1 = document.getElementById("password");
    const $eye1 = document.getElementById("eye1-off");
    const $eye2 = document.getElementById("eye1-on");
    if ($pass1.type === "text") {
      $pass1.type = "password";
      $eye1.classList.toggle("hidden");
      $eye2.classList.toggle("hidden");
    } else {
      $pass1.type = "text";
      $eye1.classList.toggle("hidden");
      $eye2.classList.toggle("hidden");
    }
  };

  const handleVisibilityPass2 = () => {
    const $pass2 = document.getElementById("confirm");
    const $eye1 = document.getElementById("eye2-off");
    const $eye2 = document.getElementById("eye2-on");
    if ($pass2.type === "text") {
      $pass2.type = "password";
      $eye1.classList.toggle("hidden");
      $eye2.classList.toggle("hidden");
    } else {
      $pass2.type = "text";
      $eye1.classList.toggle("hidden");
      $eye2.classList.toggle("hidden");
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "phone") {
      setData({
        ...data,
        phone: Number(event.target.value),
      });
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleRoleChange = (rol) => {
    setIsInversor(rol === "inversor");
    setData((prev) => ({
      ...prev,
      rol,
    }));
  };


  //enviar la info al verify
  const handleRegisterSuccess = (email) => {
    navigate('/verifyCount', { state: { email } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(data)
    const email = data.email
    handleRegisterSuccess(email);
  };




  return (
    <div
      style={{ backgroundImage: `url(${image2})`,  minHeight: '100vh', }}
      className="relative w-screen flex flex-col bg-cover bg-center px-6 md:px-0  flex justify-center content-center  flex-wrap "
    >
      <div className="w-full min-h-screen py-6 inset-0 bg-[#447089] bg-opacity-80  flex flex-col">
        <Navbar />
        <div className="flex w-full justify-center">
          <div className="py-10 px-10 rounded-lg border-coloPrimary border w-1/2 flex flex-col gap-6 backdrop-blur-sm bg-white/30 text-colorPrimary p-4 items-center">
            <div>
              <div className="flex w-full justify-center">
                <div className=" w-32 h-32 rounded-full ">
                  <img src={Logo} alt="" className="w-full h-full" />
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div
                  className="text-3xl font-semibold"
                  style={{
                    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Registrarme
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[27px] flex-row">
              <span
                className={isFirstForm ? "font-bold text-xl text-colorPrimary underline underline-offset-8 cursor-pointer decoration-colorFourth" : "font-normal text-xl text-colorPrimary cursor-pointer"}
                style={{
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                }}
                onClick={() => setIsFirstForm(true)}
              >
                Información personal
              </span>
              <span
                className={!isFirstForm ? "font-bold text-xl text-colorPrimary underline underline-offset-8 cursor-pointer decoration-colorFourth" : "font-normal text-xl text-colorPrimary cursor-pointer"}
                onClick={() => setIsFirstForm(false)}
                style={{
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                Seguridad de la cuenta
              </span>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-center gap-[15px]"
            >
              <div className={isFirstForm ? "w-full flex gap-[118px] my-4" : "hidden"}>
                <div className="w-full flex flex-col gap-6">
                  {/* Name and last name */}
                  <div className="w-full flex gap-4">
                    <div className="w-1/2 flex flex-col gap-[11px] self-stretch">
                      <div className="flex flex-col text-xl gap-2 ">
                        <span
                          style={{
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          Nombre
                        </span>
                        <input
                          className="w-100 p-2 b-1 border bg-transparent"
                          name="firstName"
                          value={data.firstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-[11px] self-stretch">
                      <div className="flex flex-col text-xl gap-2 ">
                        <span
                          style={{
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          Apellido
                        </span>
                        <input
                          className="w-100 p-2 b-1 border bg-transparent"
                          name="lastName"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email and country */}
                  <div className="flex w-full gap-4">
                    <div className="w-1/2 flex flex-col gap-[11px] self-stretch">
                      <div className="flex flex-col text-xl gap-2 ">
                        <span
                          style={{
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          Email
                        </span>
                        <input
                          className="w-100 p-2 b-1 border bg-transparent"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="w-1/2 flex flex-col gap-[11px] self-stretch">
                      <div className="flex flex-col text-xl gap-2 ">
                        <span
                          style={{
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          País de residencia
                        </span>
                        <input
                          className="w-100 p-2 b-1 border bg-transparent"
                          name="country"
                          value={data.country}
                          onChange={handleChange}
                        />
                        <datalist id="countries">
                          {prefix?.map(({ country }) => (
                            <option
                              key={country}
                              onClick={() => handleCountry(country)}
                            >
                              {country}
                            </option>
                          ))}
                        </datalist>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex w-full gap-4">
                    <div className="w-1/2 flex flex-col gap-[11px] self-stretch">
                      <div className="flex flex-col text-xl gap-2 ">
                        <span
                          style={{
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          Teléfono
                        </span>
                        <div className="flex items-center">
                          <input
                            type="number"
                            className="w-full p-2 b-1 border bg-transparent"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-1/2 flex flex-col gap-[11px] self-stretch">
                      <div className="flex flex-col text-xl gap-2 ">
                        <span
                          style={{
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          Rol
                        </span>
                        <div className="flex gap-4">
                          <label
                            htmlFor="role_inversor"
                            style={{
                              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                            }}
                          >
                            <input
                              type="radio"
                              id="role_inversor"
                              name="role"
                              value="inversor"
                              checked={data.rol === "inversor"}
                              onChange={() => handleRoleChange("inversor")}
                            />
                            Inversor
                          </label>
                          <label
                            htmlFor="role_beneficiario"
                            style={{
                              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                            }}
                          >
                            <input
                              type="radio"
                              id="role_beneficiario"
                              name="role"
                              value="solicitanteCredito"
                              checked={data.rol === "solicitanteCredito"}
                              onChange={() => handleRoleChange("solicitanteCredito")}
                            />
                            Beneficiario
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={!isFirstForm ? "flex gap-6 w-full justify-center" : "hidden"}>
                <div className="w-1/2 flex flex-col gap-[11px] self-stretch">
                  <label
                    htmlFor="password"
                    style={{
                      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      id="password"
                      className="w-full p-2 border-b bg-transparent"
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`cursor-pointer ${
                          showPass ? "hidden" : ""
                        }`}
                        id="eye1-off"
                        onClick={() => setShowPass(true)}
                      >
                        👁️
                      </span>
                      <span
                        className={`cursor-pointer ${
                          showPass ? "" : "hidden"
                        }`}
                        id="eye1-on"
                        onClick={() => setShowPass(false)}
                      >
                        👁️
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 flex flex-col gap-[11px] self-stretch">
                  <label
                    htmlFor="confirm"
                    style={{
                      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Confirmar contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="confirm"
                      value={data.confirm}
                      onChange={handleChange}
                      id="confirm"
                      className="w-full p-2 border-b bg-transparent"
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`cursor-pointer ${
                          showConfirm ? "hidden" : ""
                        }`}
                        id="eye2-off"
                        onClick={() => setShowConfirm(true)}
                      >
                        👁️
                      </span>
                      <span
                        className={`cursor-pointer ${
                          showConfirm ? "" : "hidden"
                        }`}
                        id="eye2-on"
                        onClick={() => setShowConfirm(false)}
                      >
                        👁️
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full py-2 mt-8 bg-colorFourth text-white rounded-lg">
                Crear cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
