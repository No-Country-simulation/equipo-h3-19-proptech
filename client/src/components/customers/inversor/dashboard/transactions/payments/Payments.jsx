import Card from "./Card";

export default function Payments() {
  return (
    <main className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7">
      <header className="font-normal text-[32px] text-black font-serif">Transacciones</header>

      <section className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-5 p-5 overflow-auto scroll-hidden">
        <header className="flex flex-row w-full items-center justify-between pr-5 mb-5" >
          <article className="w-full flex flex-col gap-3 pl-5">
            <span className="font-medium text-[20px] leading-[25.143999099731445px] text-black">Realizar una nueva inversión</span>
            <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Elegí una opción para realizar el pago</span>
          </article>

          <button className="font-bold text-[16px] leading-[25.143999099731445px] text-right text-[#fc5130]">
            Cancelar
          </button>
        </header>

        <Card
          title={'Tarjeta de crédito o débito'}
          subtitle={'Pagá con tarjeta de crédito o débito de todos los bancos.'}
          label={'Completar datos de tarjeta'}
        />

        <Card
          title={'QR'}
          subtitle={'Pagá con cualquier billetera virtual o app bancaria.'}
          label={'Ver QR'}
        />

        <Card
          title={'Cryptomoneda'}
          subtitle={'Pagá con cualquier cryptomoneda.'}
          label={'Pagar con Crypto'}
        />
      </section>
    </main>
  )
}
