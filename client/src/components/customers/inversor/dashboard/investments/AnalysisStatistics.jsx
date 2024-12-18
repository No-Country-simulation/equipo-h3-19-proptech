export default function AnalysisStatistics() {
  return (
    <main className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7">
      <header className="font-normal text-[32px] text-black font-serif">Mis inversiones</header>
      <section className="w-full  flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-5 p-5 overflow-auto scroll-hidden">
        <header className="flex flex-row w-full items-center justify-between " >
          <div className="w-full flex flex-col gap-3 pl-5">
            <span className="font-medium text-[20px] leading-[25.143999099731445px] text-black">Análisis y estadísticas</span>
            <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Rendimiento al 3 de enero de 2025.</span>
          </div>

          <button className="font-bold text-[16px] leading-[25.143999099731445px] text-right underline text-[#1b98e0] text-nowrap ">
            Descargar informe
          </button>
        </header>

        <img src="/assets/facts.svg" alt="facts" className="w-[600px] self-center" />
        <img className="w-[780px] h-[305px] self-center" src="/assets/temp/grafico1.svg" alt="grafico1" />
      </section>
    </main>
  )
}
