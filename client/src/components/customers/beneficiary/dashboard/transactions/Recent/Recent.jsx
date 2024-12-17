import RecentTable from "./RecentTable";

export default function Recent() {

  return (
    <div className="w-full h-[calc(100dvh-56px)] flex flex-col px-3 py-7 gap-7">
      <span className="font-normal text-[32px] text-black font-serif">Transacciones</span>
      <div className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-5 p-5 overflow-auto scroll-hidden">
        <div className="flex flex-row w-full items-center justify-between pr-5" >
          <div className="w-full flex flex-col gap-3 pl-5">
            <span className="font-medium text-[20px] leading-[25.143999099731445px] text-black">Transacciones recientes</span>
            <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Historial de transacciones realizadas y recibidas</span>
          </div>

          <button className="font-bold text-[16px] leading-[25.143999099731445px] text-right underline text-[#1b98e0] text-nowrap ">
            Descargar historial de transacciones
          </button>
        </div>
        <RecentTable />
      </div>
    </div>
  )
}
