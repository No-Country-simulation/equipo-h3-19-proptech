import { Link } from "react-router-dom";
import Notifications from "@ui/Notifications";
import RecentTable from './transactions/Recent/RecentTable'

export default function Home() {
  return (
    <main className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7">
      <header className="flex flex-row w-full items-center justify-between" >
        <h1 className="font-normal text-[32px] text-black font-serif">Hola </h1>
        <Link
          to="#"
          className="px-4 py-2 font-medium text-base leading-5 text-center bg-[#64B742] text-white rounded-md"
        >
          Configura tu panel
        </Link>
      </header>
      <section className="w-full flex flex-col px-5 pt-7 gap-7 overflow-auto scroll-hidden">
        {/* 
        //#region NOTIFICACIONES
        */}
        <Notifications messages={[{
          id: '1', body: 'Has recibido el 2/1 un pago de USD 90.000 a tu cuenta de BBVA.'
        }]} />
        {/* 
        //# endregion 
        */}{/* 
        //#region INVERSIONES
        */}
        <Link
          to="/inversor/dashboard/investments-analysis"
          className="flex flex-row bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] "
        >

          <section className="flex flex-col">
            <header className="w-full flex flex-col gap-3 pl-12 pt-12">
              <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Mis inversiones</span>
              <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Rendimiento al 3 de enero de 2025.</span>
            </header>

            <article className="w-full flex flex-row pl-20 pr-10 py-10 gap-7">
              <div className="w-[171px] h-28 flex flex-col items-center justify-center border border-[#2980B9] gap-4">
                <span className="font-bold text-[32px] leading-[25.143999099731445px] text-right text-[#2980b9]">2.020.000</span>
                <div className="flex flex-col gap-1">
                  <span className="font-normal text-[14px] leading-[18px] text-center text-black">
                    Monto total recibido
                  </span>
                  <span className="font-normal text-[14px] leading-[18px] text-center text-black">
                    (USD)
                  </span>
                </div>
              </div>
              <div className="w-[171px] h-28 flex flex-col items-center justify-center border border-[#2980B9] gap-4">
                <span className="font-bold text-[32px] leading-[25.143999099731445px] text-right text-[#2980b9]">9</span>
                <div className="flex flex-col gap-1">
                  <span className="font-normal text-[14px] leading-[18px] text-center text-black">
                    Cuotas faltantes
                  </span>
                  <span className="font-normal text-[14px] leading-[18px] text-center text-black">
                    a recibir
                  </span>
                </div>
              </div>
            </article>
          </section>

          <aside className="flex flex-col pt-4 px-5">
            <button
              className="place-self-end font-bold text-[16px] leading-[25.143999099731445px] text-center text-[#1b98e0] px-5 py-2 border border-transparent hover:border-black "
            >
              Descargar informe
            </button>
            <img className="w-[455px] h-[272px]" src="/assets/temp/grafico1.svg" alt="grafico1" />
          </aside>
        </Link>
        {/* 
        //# endregion
        */}
        {/* 
        //#region TRANSAC
        */}
        <Link
          to="/inversor/dashboard/transactions-recent"
          className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-5 p-5 mb-5"
        >
          <RecentTable />
        </Link>
        {/* 
        //# endregion
        */}
      </section>
    </main>
  )
}
