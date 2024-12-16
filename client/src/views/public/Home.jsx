import Header from "@ui/Header";
import FlipCard from "../../components/FlipCard/FlipCard";
import Carousel from "../../components/carrouselNoticias/Carousel";
import Acordion from "../../components/acordeonPreguntas/acordPre.jsx";
import SendEmail from "../../components/sendContactoEmail/sendEmail.jsx";
import Footer from "../../components/ui/footer.jsx";
import Calculadora from "../../components/calculadora/calculadoraInversion.jsx";
import CalendaryReunion from "../../components/calendars/calendaryReunion.jsx";

import ImagenFondo from "../../assets/imageBack.png";

// import { GrScorecard } from "react-icons/gr";
// import { MdOutlinePhoneCallback } from "react-icons/md";
// import { GiSecurityGate } from "react-icons/gi";
// import { MdOutlineSecurity } from "react-icons/md";

import { GiCash } from "react-icons/gi";
import { LuCalendarClock } from "react-icons/lu";

// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export default function Home() {
  return (
    <div className="w-full font-sans">
      <Header />
      <div className="w-screen h-screen bg-background text-foreground">
        {/** 1 section */}
        <div className="w-full flex py-28 px-10">
          {/** izquierda  */}
          <div className="w-full flex  justify-center ">
            <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-6 ">
                <div className="text-5xl font-serif font-bold">
                  <div>Invierte inteligentemente</div>
                  <div>Maximiza tus rendimientos</div>
                </div>
                <div>
                  <div className="">
                    Texto sobre invertir en inmuebles en America Latina
                  </div>
                </div>
                <div className="border-b-4 w-40 border-colorFithy"></div>
              </div>

              <div className="flex flex-col gap-10 text-colorSecondary">
                <div className="flex justify-between">
                  <div className="">
                    <div className="text-7xl font-extrabold">305M</div>
                    <div className="flex justify-center font-semibold">
                      Monto total invertido
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-7xl font-extrabold flex justify-center">
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
          <div
            className="w-1/2 flex"
            style={{
              backgroundImage: `url(${ImagenFondo})`,
              backgroundSize: "",
              backgroundPosition: "",
            }}
          >
            {/**calculadora de simulacion */}
            <Calculadora />
          </div>
        </div>

        {/** 2 section */}
        <div
          id="Beneficios"
          className="w-full flex flex-col pb-28 px-10 gap-10"
        >
          <div className="flex w-full justify-center text-4xl font-serif font-bold">
            Beneficios
          </div>
          <div className="w-full flex flex-col gap-20">
            <div className="flex justify-evenly">
              <FlipCard
                title={"score crediticio"}
                description={
                  "Seguridad garantizada de estabilidad financiera de prestarios"
                }
              />
              <FlipCard
                title={"soporte 24/7"}
                description={
                  "Atencion en linea para resolver cualquier consulta o inquietud"
                }
              />
            </div>
            <div className="flex justify-evenly">
              <FlipCard
                title={"Rentabilidad competitiva"}
                description={
                  "Tasas de retorno superiores al promedio del mercado, optimizadas para maximizar tus ganancias."
                }
              />
              <FlipCard
                title={"Diversificacion de portafolio"}
                description={
                  "Oportunidades para invertir en diferentes tipos de proyectos con niveles de riesgo ajustados a tus objetivos financieros"
                }
              />
              <FlipCard
                title={"Transparencia"}
                description={
                  "Documentación verificada de cada prestatario y garante. Descarga de documentación de análisis y reportes"
                }
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
        <div
          id="Preguntas"
          className="w-full  flex  justify-center pb-28 px-10 gap-20 "
        >
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
        <div
          id="Contacto"
          className="w-full bg-colorSecondary text-colorPrimary py-14 flex flex-col pb-28 px-10 gap-5"
        >
          <div className="flex w-full justify-center text-4xl font-serif font-bold">
            Contacto
          </div>

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
        <div
          id="Contacto"
          className="w-full bg-colorSecondary text-colorPrimary py-14 flex flex-col pb-28 px-10 gap-5"
        >
          <div className="w-full flex flex-col gap-10 items-center">
            <div className="flex w-full justify-center text-2xl">
              Coordina una llamada con nuestro equipo
            </div>
            <div className="flex gap-20 w-full justify-center border-radius">
              <div className="w-[70rem] bg-white flex text-black rounded-md">
                <div className="w-1/3">
                  <div className="w-full px-4 py-6 flex flex-col h-full justify-between">
                    <div className="flex flex-col gap-6">
                      <div>
                        <div>Gerentes de Desarrollo Comercial</div>
                        <div className="text-xl font-bold">
                          Reunion con Financial Land
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex items-center">
                          <IoMdTime />
                        </div>
                        <div>30 min</div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <span>
                          Hola y bienvenido a nuestra pagina de programacion de
                          reuniones.
                        </span>
                        <span>
                          Porfavor, reserva una fecha y horario para que podamos
                          hablar y brindarte mas informacion sobre nuestros
                          servicios.
                        </span>
                        <span>!Nos vemos pronto!</span>
                      </div>

                      <div>
                        <div className="text-xs font-bold"> Fecha y horario de reunion: </div>
                        <div className="border text-lg font-bold w-[18rem] px-2 py-2 rounded-md mt-1">
                          Lun 16 de Dic - 03:00 - 03:30 pm
                        </div>
                      </div>
                    </div>
                    <div className=" flex text-xs gap-6 justify-center">
                      <div>Configuracion de cokies</div>
                      <div>Reportar problema</div>
                    </div>
                  </div>
                </div>
                <div className="w-3/2 p-6">
                  <CalendaryReunion />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** 9 section  */}
        <div className="w-full  flex flex-col  px-10 gap-20 bg-colorSecondary">
          <div className="w-full text-lg text-colorPrimary flex flex-col gap-6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
