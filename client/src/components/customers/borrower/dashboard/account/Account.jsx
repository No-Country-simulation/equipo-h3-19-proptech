import SecondaryButton from "../../../../ui/SecondaryButton";

export default function Account() {
  return (
    <main className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7 overflow-auto scroll-hidden">
      <header className="font-normal text-[32px] text-black font-serif">Cuenta bancaria y tarjetas</header>

      <section className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-7 p-5">
        <header className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Tarjetas asociadas</header>
        <aside className="w-full flex flex-row justify-around">
          <article className="flex flex-col items-center gap-4">
            <img src="/assets/temp/credit-card.svg" alt="credit card" />
            <span className="font-bold text-[16px] leading-[20px] text-center underline text-[#2980b9]">Ver datos de la tarjeta</span>
          </article>

          <article className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[16px] leading-[20px] text-black">Titular de la tarjeta</span>
              <span className="font-normal text-[16px] leading-[21px] text-black">Juana López</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[16px] leading-[20px] text-black">Fecha de vencimiento</span>
              <span className="font-normal text-[16px] leading-[21px] text-black">23/2028</span>
            </div>
          </article>

          <article className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[16px] leading-[20px] text-black">Red de pago</span>
              <span className="font-normal text-[16px] leading-[21px] text-black">MasterCard</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[16px] leading-[20px] text-black">Dirección de la tarjeta</span>
              <span className="w-[140px] text-wrap font-normal text-[16px] leading-[21px] text-black">
                Av. Los Cedros 348
                15074 Miraflores
                Lima
              </span>
            </div>
          </article>
        </aside>

        <aside className="w-full flex flex-row justify-between -mt-10">
          <article className="flex flex-col self-stretch items-start justify-end gap-4">
            <span className="text-[12px] leading-[20px] flex gap-2 items-baseline">
              Forma de pago establecida. Utilizaremos esta forma de pago para abonar los préstamos solicitados.
              <span className="font-bold text-[16px] leading-[20px] text-center underline text-[#2980b9] cursor-pointer">
                Más información.
              </span>
            </span>
          </article>

          <article className="flex flex-col items-stretch gap-4">
            <SecondaryButton buttonWidth={"160px"}>Actualizar Tarjeta</SecondaryButton>
            <SecondaryButton buttonWidth={"160px"}>Eliminar Tarjeta</SecondaryButton>
          </article>
        </aside>
      </section>

      <section className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-7 p-5">
        <header className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Cuentas asociadas</header>
        <aside className="w-full flex flex-row justify-around">
          <article className="h-full flex flex-col items-start justify-around gap-4">
            <div className="flex flwx-row gap-4">
              <input type="radio" name="accountType" id="saving" className="size-6" />
              <label htmlFor="saving" className="font-normal text-[16px] leading-[20px] text-black">
                Caja de ahorro
              </label>
            </div>
            <div className="flex flwx-row gap-4">
              <input type="radio" name="accountType" id="current" className="size-6" />
              <label htmlFor="current" className="font-normal text-[16px] leading-[20px] text-black">
                Cuenta corriente
              </label>
            </div>
          </article>
          <article className="flex flex-col gap-5 justify-start">
            <div className="flex flex-row w-[448px] h-32 border border-[#2980b9] rounded-lg justify-around items-center">
              <div className="flex flex-col">
                <span className="font-normal text-sm leading-[25px] text-black">Titularidad de la cuenta</span>
                <span className="font-medium text-[16px] <leading-[25px] text-black">Juana López</span>
              </div>
              <div className="flex flex-col">
                <span className="font-normal text-sm text-black">Tipo y número de cuenta</span>
                <div className="flex flex-col">
                  <span className="font-medium text-[16px] leading-[20px] text-black">Caja de ahorros</span>
                  <span className="font-medium text-[16px] leading-[20px] text-black">4562309829493200</span>
                </div>
              </div>
            </div>
            <span className="font-bold text-[16px] leading-[20px] text-start underline text-[#2980b9]">Detalles de la cuenta</span>
          </article>
        </aside>

        <aside className="w-full flex flex-row justify-between -mt-10">
          <article className="flex flex-col self-stretch items-start justify-end gap-4">
            <span className="text-[12px] leading-[20px] flex gap-2 items-baseline">
              Forma de pago establecida. Utilizaremos esta forma de pago para abonar los préstamos solicitados.
              <span className="font-bold text-[16px] leading-[20px] text-center underline text-[#2980b9] cursor-pointer">
                Más información.
              </span>
            </span>
          </article>

          <article className="flex flex-col items-stretch gap-4">
            <SecondaryButton buttonWidth={"160px"}>Actualizar Cuenta</SecondaryButton>
            <SecondaryButton buttonWidth={"160px"}>Eliminar Cuenta</SecondaryButton>
          </article>
        </aside>
      </section>
    </main >
  )
}
