import { useState } from "react";
// import { useFormStatus } from "react-dom";
import { Link } from "react-router-dom";
import { prefix } from "./countries";
// import { signup } from "@/lib/auth.js";

import Navbar from "../ui/Navbar";
import Logo from "../../assets/Logo.png";
import image2 from "../../assets/register.jpg";
// import { CgDanger } from "react-icons/cg";

export default function Temp() {
  // const [state, action] = useActionState(signup, undefined);
  // const { pending } = useFormStatus();

  // useEffect(() => {
  //   if (state?.data) {
  //     console.log(state.data)
  //   }
  // }, [state]);

  const isSelectedClass =
    "font-bold text-xl text-colorPrimary underline underline-offset-8 cursor-pointer decoration-colorFourth";
  const noSelectedClass = "font-normal text-xl text-colorPrimary cursor-pointer";
  const [isFirstForm, setIsFirstForm] = useState(true);
  const [isInversor, setIsInversor] = useState(true);
  const [openPrefixList, setOpenPrefixList] = useState(false);

  const initialDataState = {
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    prefix: 54,
    flag: "/assets/flags/Flag_of_Argentina.svg.webp",
    phone: 0,
    role: '',
    password: '',
    confirm: ''
  }
  const [data, setData] = useState(initialDataState)

  // const [showPass, setShowPass] = useState(false)
  // const [showConfirm, setShowConfirm] = useState(false)

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

  const handleChange = event => {
    if (event.target.name === 'phone') {
      setData({
        ...data,
        phone: Number(event.target.value)
      })
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value
      })
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${image2})` }}
      className=" w-screen flex flex-col bg-cover bg-center px-6 md:px-0 justify-center content-center flex-wrap "
    >
      <div className="py-6 inset-0 bg-[#447089] bg-opacity-80 w-full h-full flex flex-col">
        <Navbar />
        <div className="flex w-full justify-center">
          <div className="py-10 rounded-lg border-coloPrimary border w-1/2 flex flex-col gap-6 backdrop-blur-sm bg-white/30 text-colorPrimary p-4 items-center">
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
                className={isFirstForm ? isSelectedClass : noSelectedClass}
                style={{
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                }}
                onClick={() => setIsFirstForm(true)}
              >
                Información personal
              </span>
              <span
                className={!isFirstForm ? isSelectedClass : noSelectedClass}
                onClick={() => setIsFirstForm(false)}
                style={{
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                }}
              >
                Seguridad de la cuenta
              </span>
            </div>

            <form
              // action={action}
              className="w-full flex flex-col items-center gap-[15px]"
            >
              <div
                className={
                  isFirstForm ? "w-full flex gap-[118px] my-4" : "hidden"
                }
              >
                <div className="w-full flex flex-col gap-6">
                  {/**name and apellido */}
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
                        { /* state?.errors?.firstName && (
                          <p className="flex items-center gap-2 text-xs text-red-500">
                            <CgDanger />
                            {state.errors.firstName}
                          </p>
                        ) */}
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
                        {/*state?.errors?.lastName && (
                          <p className="flex items-center gap-2 text-xs text-red-500">
                            <CgDanger />{state.errors.lastName}</p>
                        )*/}
                      </div>
                    </div>
                  </div>

                  {/**email pais residencia */}
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
                        {/*state?.errors?.email && <p className="flex items-center gap-2 text-xs text-red-500">
                          <CgDanger />{state.errors.email}</p>*/}
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
                          id="country"
                          list="countries"
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
                        {/*state?.errors?.country && (
                          <p className="flex items-center gap-2 text-xs text-red-500">
                            <CgDanger />{state.errors.country}</p>
                        )*/}
                      </div>
                    </div>
                  </div>

                  {/**telefono  y pregunta inversion */}
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
                        <div className="flex items-center justify-between">
                          <div className="w-[120px]  h-[50px] flex flex-row items-center gap-2 px-2.5 py-[9px] border relative">
                            <span className="font-normal text-base text-colorPrimary flex w-1/3">
                              +{data.prefix}
                            </span>
                            <img
                              className="size-[20px] w-1/3"
                              src={data.flag}
                              alt="argentina prefix"
                            />
                            <img
                              className="size-[14px] cursor-pointer hover:scale-150 w-1/3"
                              src="/assets/icons/arrow-down.svg"
                              onClick={() => setOpenPrefixList(true)}
                            />
                            <input
                              type="text"
                              className="hidden"
                              name="prefix"
                              value={data.prefix}
                              onChange={handleChange}
                            />
                            <ul
                              className={
                                openPrefixList
                                  ? "overflow-auto w-[107px] h-48 absolute top-12 left-0 z-10 bg-transparent border"
                                  : "hidden"
                              }
                            >
                              {prefix?.map(({ pref, src }) => (
                                <li
                                  id={pref}
                                  onClick={handleClickPrefixItem}
                                  className="h-[50px] flex items-center justify-center hover:border-2 hover:border-black cursor-pointer gap-2"
                                  key={pref}
                                >
                                  +{pref} <img src={src} alt={src} />
                                </li>
                              ))}
                            </ul>
                          </div>
                          <input
                            type="number"
                            className="w-100 p-2 b-1 border bg-transparent"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                          />

                        </div>
                      </div>
                    </div>

                    <div className="w-1/2 flex flex-col gap-[19px] self-stretch">
                      <div className="flex flex-col text-xl gap-2 ">
                        <span
                          style={{
                            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          Para qué deseas una cuenta?
                        </span>
                        <div className="flex items-center gap-[51px] self-stretch">
                          <div className="flex items-center gap-2.5">
                            <input
                              type="checkbox"
                              className="w-[34px] h-[34px]"
                              name="role"
                              value="INVERSOR"
                              id="inversor"
                              checked={isInversor}
                              onChange={() => setIsInversor(true)}
                            />
                            <label
                              htmlFor="inversor"
                              className="font-normal text-[20px] text-colorPrimary"
                            >
                              Invertir
                            </label>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <input
                              type="checkbox"
                              className="w-[34px] h-[34px]"
                              name="role"
                              value="BENEFICIARY"
                              id="beneficiary"
                              checked={!isInversor}
                              onChange={() => setIsInversor(false)}
                            />
                            <label
                              htmlFor="beneficiary"
                              className="font-normal text-[20px] text-colorPrimary"
                            >
                              Pedir financiación
                            </label>
                          </div>
                        </div>
                        {/*state?.errors?.role && <p>{state.errors.role}</p>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  !isFirstForm ? "flex flex-col gap-[15px] my-4" : "hidden"
                }
              >
                <div className="flex flex-col gap-[11px] self-stretch relative">
                  <div className="flex flex-col text-xl gap-2 ">
                    <span
                      style={{
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Contraseña
                    </span>
                    <input
                      type="text"
                      className="w-100 p-2 b-1 border bg-transparent"
                      name="password"
                      id="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                    <img
                      className="hidden size-6 top-[53px] right-2 absolute z-10"
                      src="/assets/icons/pass-visible-off.svg"
                      alt="pass invisible"
                      id="eye1-off"
                      onClick={handleVisibilityPass1}
                    />
                    <img
                      className="size-6 top-[53px] right-2 absolute z-10"
                      src="/assets/icons/pass-visible-on.svg"
                      alt="pass invisible"
                      id="eye1-on"
                      onClick={handleVisibilityPass1}
                    />
                    {/*state?.errors?.password && <p className="flex items-center gap-2 text-xs text-red-500">
                      <CgDanger />{state.errors.password}</p>*/}
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] self-stretch relative">
                  <div className="flex flex-col text-xl gap-2 ">
                    <span
                      style={{
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Repetir contraseña
                    </span>
                    <input
                      type="text"
                      className="w-100 p-2 b-1 border bg-transparent"
                      name="confirm"
                      id="confirm"
                      value={data.confirm}
                      onChange={handleChange}
                    />
                    <img
                      className="hidden size-6 top-[53px] right-2 absolute z-10"
                      src="/assets/icons/pass-visible-off.svg"
                      alt="pass invisible"
                      id="eye2-off"
                      onClick={handleVisibilityPass2}
                    />
                    <img
                      className="size-6 top-[53px] right-2 absolute z-10"
                      src="/assets/icons/pass-visible-on.svg"
                      alt="pass invisible"
                      id="eye2-on"
                      onClick={handleVisibilityPass2}
                    />
                    {/*state?.errors?.confirm && <p className="flex items-center gap-2 text-xs text-red-500">
                      <CgDanger />{state.errors.confirm}</p>*/}
                  </div>
                </div>
                <span className="font-normal text-[18px] text-colorPrimary" style={{
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                }}>
                  Configurar Autenticación de 2 Pasos
                </span>
              </div>
              <div className="flex justify-center">
                <Link
                  to={'/inversor/dashboard/'}
                  className="bg-colorFourth px-3 py-2 cursor-pointer rounded-md font-semibold text-colorPrimary "
                >
                  CONTINUAR
                </Link>
              </div>
            </form>
            <span className="font-normal text-base  text-colorPrimary mt-2">
              Ya tienes una cuenta?{" "}
              <Link to="/login" className="font-bold hover:text-gray-200" style={{
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
              }}>
                Inicia sesión
              </Link>
            </span>
          </div>
        </div>{" "}
      </div>
    </div>
  );


}
