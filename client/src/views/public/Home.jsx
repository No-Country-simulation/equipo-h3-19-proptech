import Header from "../../components/ui/Header";
import FlipCard from "../../components/FlipCard/FlipCard";
import Carousel from "../../components/carrouselNoticias/Carousel";
import Acordion from "../../components/acordeonPreguntas/acordPre.jsx";
import SendEmail from "../../components/sendContactoEmail/sendEmail.jsx";
import Footer from "../../components/ui/footer.jsx";

import { GrScorecard } from "react-icons/gr";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { GiSecurityGate } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

import { GiCash } from "react-icons/gi";
import { LuCalendarClock } from "react-icons/lu";





export default function Home() {
  return (
    <div className="w-full font-sans">
      <Header />
      <div className="w-screen h-screen bg-background text-foreground">
        {/** 1 section */}
        <div className="w-full flex py-28 px-10">
          {/** izquierda  */}
          <div className="w-1/2 w-full flex  justify-center">
            <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-6 ">
                <div className="text-5xl font-serif font-bold">
                  <div>Invierte inteligentemente</div>
                  <div>Maximiza tus rendimientos</div>
                </div>
                <div>
                  <div className="">Texto sobre invertir en inmuebles en America Latina</div>
                </div>
                <div className="border-b-4 w-40 border-colorFithy"></div>
              </div>

              <div className="flex flex-col gap-10 text-colorSecondary">
                <div className="flex justify-between">
                  <div className="">
                    <div className="text-7xl font-bold">305M</div>
                    <div className="flex justify-center font-semibold">
                      Monto total invertido
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-7xl font-bold flex justify-center">
                      14%
                    </div>
                    <div className="flex justify-center font-semibold">
                      Porcentaje de promedio de ROI
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col">
                    <div className="text-7xl font-bold flex justify-center">
                      20.000
                    </div>
                    <div className="flex justify-center font-semibold">
                      Prestarios conectados con inversores
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/**  derecha calculadora */}
          <div className="w-1/2 flex">
            {/**calculadora de simulacion */}
            <div className="border bg-gray-200 border-solid  w-96 rounded-md p-6">
              <div className="text-lg">Calcula tu rendimiento estimado</div>

              <div className="py-6 flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="text-lg font-bold">
                    Monto de inversion inicial
                  </div>
                  <div className="text-xs">
                    ingresa el monto que querrias invertir y en que moneda
                  </div>
                  <div className="flex justify-center gap-2">
                    <input className="w-3/4 h-8" type="number"/>
                    <select className="w-1/4 p-2 border text-[10px] h-8 ">
                        <option value="option1">
                          🇺🇸 USD
                        </option>
                        <option value="option2">co COP</option>
                        <option value="option3">ar ARG</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="text-lg font-bold">
                    Plazo de inversion
                  </div>
                  <div className="text-xs">
                    ingresa el plazo en el que querrias invertir tu dinero
                  </div>
                  <div className="flex justify-center gap-2">
                    <input className="w-3/4 h-8" />
                    <select className="w-1/4 p-2 border text-[10px] h-8 ">
                        <option value="option1">Anual</option>
                        <option value="option2">Mensual</option>
                        <option value="option3">Trimestral</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="text-lg font-bold">
                    Riesgo de inversion
                  </div>
                  <div className="text-xs">
                    ingresa tu perfil de inversor
                  </div>
                  <div className="flex justify-center gap-2">
                    <select className="w-full p-2 border text-base  ">
                        <option value="option1">Alta</option>
                        <option value="option2">Leve</option>
                        <option value="option3">Sin riesgo</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-1 justify-center">
                  <div className="bg-colorFourth text-colorPrimary font-semibold px-3 py-2 cursor-pointer rounded-md w-64 justify-center flex">
                    REALIZAR SIMULACION
                  </div>
                </div>




              </div>
            </div>
          </div>
        </div>

        {/** 2 section */}
        <div id="Beneficios" className="w-full flex flex-col pb-28 px-10 gap-10">
          <div className="flex w-full justify-center text-4xl font-serif font-bold">Beneficios</div>
          <div className="w-full flex flex-col gap-10">
            <div className="flex justify-evenly">
              <FlipCard
                title={"score crediticio"}
                description={
                  "Seguridad garantizada de estabilidad financiera de prestarios"
                }
                icono={<GrScorecard />}
              />
              <FlipCard
                title={"soporte 24/7"}
                description={
                  "Atencion en linea para resolver cualquier consulta o inquietud"
                }
                icono={<MdOutlinePhoneCallback />}
              />
            </div>
            <div className="flex flex justify-evenly">
              <FlipCard
                title={"Rentabilidad competitiva"}
                description={
                  "Tasas de retorno superiores al promedio del mercado, optimizadas para maximizar tus ganancias."
                }
                icono={<GiSecurityGate />}
              />
              <FlipCard
                title={"Diversificacion de portafolio"}
                description={
                  "Oportunidades para invertir en diferentes tipos de proyectos con niveles de riesgo ajustados a tus objetivos financieros"
                }
                icono={<MdOutlineSecurity />}
              />
              <FlipCard
                title={"Transparencia"}
                description={
                  "Documentación verificada de cada prestatario y garante. Descarga de documentación de análisis y reportes"
                }
                icono={<MdOutlinePhoneCallback />}
              />
            </div>
          </div>
        </div>

        {/** 3 section */}
        <div className="w-full flex flex-col pb-28 px-10 gap-10 ">
          <div className="flex h-[28rem]">
            <div className="w-1/2 flex justify-center items-center">
              <div className="gap-6 flex flex-col items-center text-7xl">
                <GiCash />
                <div className="font-semibold text-center text-4xl w-96 flex justify-center">
                  Montos 3x mayores otorgados por los bancos
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center bg-slate-100">
              <div className="gap-6 flex flex-col items-center text-7xl">
                <LuCalendarClock />
                <div className="font-semibold text-center text-4xl w-96 flex justify-center">
                  Devolucion del prestamo a 180 meses
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** 4 section  */}
        <div id="Noticias" className="w-full  flex flex-col pb-28  gap-10 ">
          <Carousel />
        </div>

        {/** 5 section  */}
        <div className="w-full  flex flex-col pb-28 px-10 gap-20 ">
          <div className="flex w-full justify-center text-4xl font-serif font-bold">
            Operamos en toda America Latina
          </div>
          <div className="w-full flex flex-col gap-10 items-center">
            <div className="flex text-2xl w-2/3 flex-col gap-20 ">
              <div className="flex w-full justify-around">
                <div className="flex flex-col gap-1">
                  <div className="w-12">Argentina</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Chile</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Uruguay</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
              </div>

              <div className="flex w-full justify-around">
                <div className="flex flex-col gap-1">
                  <div className="w-12">Bolivia</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Ecuador</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Panama</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
              </div>

              <div className="flex w-full justify-around">
                <div className="flex flex-col gap-1">
                  <div className="w-12">Brazil</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Mexico</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Paraguay</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
              </div>

              <div className="flex w-full justify-around">
                <div className="flex flex-col gap-1">
                  <div className="w-12">Colombia</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Peru</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-12">Guatemala</div>
                  <div className="border border-colorFithy w-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** 6 section  */}
        <div  id="Preguntas" className="w-full  flex  justify-center pb-28 px-10 gap-20 ">
          
          <div className="w-4/5 flex flex-col gap-10 items-center">
            <div className="flex w-full text-4xl font-serif font-bold">
                Preguntas Frecuentes
            </div>
            <div className="flex flex-col gap-20 w-full">
              <Acordion />
            </div>
          </div>
        </div>

        {/** 7 section  */}
        <div id="Contacto" className="w-full bg-colorSecondary text-colorPrimary py-14 flex flex-col pb-28 px-10 gap-5">
          <div className="flex w-full justify-center text-4xl font-serif font-bold">Contacto</div>

          <div className="w-full flex flex-col gap-10 items-center">
            <div className="flex w-full justify-center text-xl">
              Si quieres ponerte en contacto con nosotros, escribenos al
              email...
            </div>
            <div className="flex gap-20 w-full justify-center">
              <SendEmail />
            </div>

          </div>

        </div>

        {/** 8 section  */}
        <div className="w-full  flex flex-col  px-10 gap-20 bg-colorSecondary">
          <div className="w-full text-lg text-colorPrimary flex flex-col gap-6">
              <Footer />
          </div>
        </div>


      </div>
    </div>
  );
}
