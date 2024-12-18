import Card from "./Card";

export default function Payments() {
  return (
    <div className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7">
      <span className="font-normal text-[32px] text-black">Transacciones</span>

      <div className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-5 p-5 overflow-auto scroll-hidden">
        <div className="flex flex-row w-full items-center justify-between pr-5 mb-5" >
          <div className="w-full flex flex-col gap-3 pl-5">
            <span className="font-medium text-[20px] leading-[25.143999099731445px] text-black">Realizar una nueva inversión</span>
            <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Elegí una opción para realizar el pago</span>
          </div>

          <button className="font-bold text-[16px] leading-[25.143999099731445px] text-right text-[#fc5130]">
            Cancelar
          </button>
        </div>

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
      </div>
    </div>
  )
}
