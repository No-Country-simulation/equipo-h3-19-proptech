import { Link } from "react-router-dom";
import Notifications from "@ui/Notifications";
import Recent from './transactions/Recent/Recent'

export default function Home() {
  return (
    <div className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7">
      <div className="flex flex-row w-full items-center justify-between" >
        <span className="font-normal text-[32px] text-black font-serif">Hola Juana</span>
        <Link
          to="#"
          className="px-[15.80124282836914px] py-[6.583850860595703px] font-medium text-[16px] leading-[20px] text-center bg-colorFourth text-white rounded-md"
        >
          Configura tu panel
        </Link>
      </div>
      <div className="w-full flex flex-col px-5 pt-7 gap-7 overflow-auto scroll-hidden">
        <Notifications messages={[{
          id: '1', body: 'Has recibido el 2/1 un pago de USD 90.000 a tu cuenta de BBVA.'
        }]} />
        <div className="flex flex-row bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] ">

          <div className="flex flex-col">
            <div className="w-full flex flex-col gap-3 pl-12 pt-12">
              <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Mis préstamos</span>
              <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Detalle de préstamo al 3 de enero de 2025.</span>
            </div>

            <div className="w-full flex flex-row pl-20 pr-10 py-10 gap-7">
              <div className="w-[171px] h-28 flex flex-col items-center justify-center border bg-custom-gradient gap-4 rounded-3xl">
                <span className="font-bold text-[32px] leading-[25.143999099731445px] text-right text-white">180.000</span>
                <div className="flex flex-col gap-1">
                  <span className="font-normal text-[14px] leading-[18px] text-center text-white">
                    Monto total pagado
                  </span>
                  <span className="font-normal text-[14px] leading-[18px] text-center text-white">
                    (USD)
                  </span>
                </div>
              </div>
              <div className="w-[171px] h-28 flex flex-col items-center justify-center border bg-custom-gradient  gap-4 rounded-3xl">
                <span className="font-bold text-[32px] leading-[25.143999099731445px] text-right text-white">27</span>
                <div className="flex flex-col gap-1">
                  <span className="font-normal text-[14px] leading-[18px] text-center text-white">
                    Cuotas faltantes
                  </span>
                  <span className="font-normal text-[14px] leading-[18px] text-center text-white">
                    a pagar
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-4 px-5">
            <button
              className="place-self-end font-bold text-[16px] leading-[25.143999099731445px] text-center text-[#1b98e0] px-5 py-2 border border-transparent hover:border-black "
            >
              Descargar informe
            </button>
            <img className="w-[455px] h-[272px]" src="/assets/temp/grafico1.svg" alt="grafico1" />
          </div>
        </div>

        <Recent />
        
      </div>
    </div>
  )
}
