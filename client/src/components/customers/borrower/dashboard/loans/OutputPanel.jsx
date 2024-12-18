import PropTypes from 'prop-types'
import PrimaryButton from '@ui/PrimaryButton'

export default function OutputPanel({ changePanel }) {
  return (
    <main
      className="self-center w-[805px] h-[537px] flex flex-col bg-custom-gradient-2 rounded-3xl gap-10 px-24 py-20 relative"
    >
      <button className="font-bold text-[16px] leading-[25.143999099731445px] text-right underline text-white top-4 right-6 absolute">
        Ver cronograma de pagos
      </button>

      <section className="w-full flex flex-row justify-around">
        <article className="flex flex-col items-center">
          <span className="font-bold text-[60px] text-white">64.534</span>
          <span className="font-semibold text-[20px] text-white -mt-5">USD por mes</span>
        </article>
        <article className="flex flex-col items-center">
          <span className="font-bold text-[60px] text-white">2.323.327</span>
          <span className="font-semibold text-[20px] text-white -mt-5">USD a pagar en 3 años</span>
        </article>
      </section>

      <div className="w-full border border-white" />

      <section className="w-full flex flex-row justify-around">
        <article className="flex flex-col items-center gap-4">
          <span className="font-semibold text-[20px] text-white">
            Cuota estimada
          </span>
          <span className="font-normal text-[16px] text-center text-white">
            Tu cuota mensual será de 64.534 USD.
          </span>
        </article>
        <article className="flex flex-col items-center gap-4">
          <span className="font-semibold text-[20px] text-center text-white">
            Total a pagar
          </span>
          <span className="font-normal text-[16px] text-center text-white">
            En 3 años pagarás 2.323.237 USD
          </span>
        </article>
        <article className="flex flex-col items-center gap-4">
          <span className="font-semibold text-[20px] text-center text-white">
            Resumen del préstamo
          </span>
          <div className="flex flex-col">
            <span className="w-[234px] font-normal text-[16px] text-center text-white">
              Monto solicitado: 2.000.000 USD
            </span>
            <span className="w-[234px] font-normal text-[16px] text-center text-white">
              Plazo: 3 años
            </span>
            <span className="w-[234px] font-normal text-[16px] text-center text-white">
              Tasa anual de interés: 10%
            </span>
          </div>
        </article>
      </section>

      <section className="w-full flex flex-row justify-around">
        <button
          onClick={() => changePanel(true)}
          className="h-[49px] flex flex-col justify-center items-center gap-[5.267080783843994px] px-4 py-2 font-semibold text-[20px] leading-[20px] text-center text-white border border-white rounded-md active:scale-105"
        >
          Realizar nueva simulación
        </button>
        <PrimaryButton
          buttonHeight='49px'
        >
          Solicitar préstamo
        </PrimaryButton>
      </section>
    </main>
  )
}

OutputPanel.propTypes = {
  changePanel: PropTypes.func
}