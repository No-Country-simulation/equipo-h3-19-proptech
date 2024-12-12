import HistoryTable from "./HistoryTable";

export default function History() {

  return (
    <div className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7">
      <div className="flex flex-row w-full items-center justify-between" >
        <span className="font-normal text-[32px] text-black">Mis inversiones</span>
        <button className="font-bold text-[16px] leading-[25.143999099731445px] text-right underline text-[#1b98e0]">
          Descargar historial
        </button>
      </div>
      <HistoryTable />
    </div>
  )
}
