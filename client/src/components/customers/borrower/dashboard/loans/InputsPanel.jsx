import PropTypes from 'prop-types'
import PrimaryButton from '@ui/PrimaryButton'

export default function InputsPanel({ changeHandler, submitHandler, data }) {
  return (
    <form
      onSubmit={submitHandler}
      className="w-[805px] h-[537px] grid grid-cols-2 place-items-center justify-items-center-center bg-custom-gradient-2 rounded-3xl p-12 gap-5"
    >
      <article className="w-[317px] h-[120px] flex flex-col justify-between">
        <span className="font-semibold text-[20px] text-white">
          Monto del préstamo
        </span>
        <span className="font-normal text-[16px] text-white">
          Ingresá el monto del préstamo que quieres pedir y en qué moneda.
        </span>
        <div className="flex flex-row gap-2">
          <input
            type="number"
            className="w-[191px] h-[35px] bg-white font-normal text-[18px] text-black px-4"
            placeholder="2.000.000"
            onChange={changeHandler}
            name='amount'
            value={data.amount}
          />
          <img className="h-[35px]" src="/assets/temp/currency.svg" alt="USD currency" />
        </div>
      </article>

      <article className="w-[179px] h-[117px] flex flex-col justify-between">
        <span className="font-semibold text-[20px] text-white">
          Frecuencia de pago
        </span>
        <span className="font-normal text-[16px] text-white">
          Selecciona la frecuencia de pago.
        </span>
        <img className="h-[35px]" src="/assets/temp/monthly.svg" alt="monthly" />
      </article>

      <article className="w-[317px] h-[117px] flex flex-col justify-between">
        <span className="font-semibold text-[20px] text-white">
          Plazo del préstamo
        </span>
        <span className="font-normal text-[16px] text-white">
          Ingresá el tiempo en meses o años para pagar el préstamo.
        </span>
        <div className="flex flex-row gap-4">
          <input
            type="number"
            className="w-[100px] h-[35px] bg-white font-normal text-[18px] text-black px-4"
            placeholder="3"
            onChange={changeHandler}
            value={data.time}
          />
          <img className="h-[35px]" src="/assets/temp/years.svg" alt="years" />
        </div>
      </article>

      <article className="w-[137px] h-[88px] flex flex-col justify-between">
        <span className="font-semibold text-[20px] text-white">
          Tasa de interés
        </span>
        <span className="font-normal text-[16px] text-white">
          Tasa anual (%).
        </span>
        <img className="h-[35px]" src="/assets/temp/percent.svg" alt="percentage" />
      </article>
      <div className="col-span-2 items-center justify-center mb-5">
        <div className="w-full flex justify-center">
          <PrimaryButton
            typeOfButton='submit'
          >
            Realizar simulación
          </PrimaryButton>
        </div>
      </div>
    </form>
  )
}

InputsPanel.propTypes = {
  changeHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  data: PropTypes.shape({
    amount: PropTypes.number,
    time: PropTypes.number,
  })
}