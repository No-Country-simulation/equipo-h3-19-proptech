import Table from "../../Table"
import TDCell from "../../TDCell"
import TDRow from "../../TDRow"
import THCell from "../../THCell"
import THrow from "../../THrow"
import { transactionshistory } from "./data"

export default function RecentTable() {

  return (
    <div className="w-full flex flex-col gap-5 p-5">
      <div className="flex flex-row self-end gap-5">
        <button className="w-auto] h-[31px] flex flex-row gap-2 border border-gray-300 rounded px-3 py-2 items-center hover:border-[#154C6C]">
          <span className="font-normal text-[15px] leading-[25.143999099731445px] text-center text-black">Ordenar </span>
          <img src={'/assets/icons/sorting-icon.svg'} alt='icono de ordenar' />
        </button>
        <button className="w-auto] h-[31px] flex flex-row gap-2 border border-gray-300 rounded px-3 py-2 items-center hover:border-[#154C6C]">
          <span className="font-normal text-[15px] leading-[25.143999099731445px] text-center text-black">Filtrar </span>
          <img src={'/assets/icons/filter-icon.svg'} alt='icono de ordenar' />
        </button>
      </div>
      <Table>
        {/* CABECERA DE LA TABLA */}
        <thead className="w-full">
          <THrow>
            <THCell width={'70px'}>Fecha</THCell>
            <THCell width={'38px'}>Monto</THCell>
            <THCell width={'73px'}>Transacción</THCell>
            <THCell width={'48px'}>Moneda</THCell>
            <THCell width={'104px'}>Cuenta de pago</THCell>
            <THCell width={'100px'}>Rendimiento total estimado</THCell>
            <THCell width={'98px'}>Comprobante</THCell>
          </THrow>
        </thead>
        <tbody className="w-full">
          {
            transactionshistory?.length > 0 ? transactionshistory.map(({
              id, date, amount, transaction_status, currency, payment_account, projectedgain
            }, index) => {
              //#region CUERPO DE LA TABLA
              return (
                <TDRow key={id} backgroundColor={index % 2 === 0 ? 'white' : '#F4F4F4'} >
                  <TDCell width={'70px'}>{date}</TDCell>
                  <TDCell width={'38px'}>{amount}</TDCell>
                  <TDCell width={'73px'}>{transaction_status}</TDCell>
                  <TDCell width={'48px'}>{currency}</TDCell>
                  <TDCell width={'104px'}>{payment_account}</TDCell>
                  <TDCell width={'100px'}>{projectedgain}</TDCell>
                  <TDCell width={'98px'}>
                    <span className="font-bold text-[12px] text-[#1b98e0] text-nowrap">Ver comprobante</span>
                  </TDCell>
                </TDRow>
              )
              //# endregion
            }) :
              //#region Si TABLA VACIA
              (
                <TDRow backgroundColor={'white'}>
                  <TDCell width={'70px'}></TDCell>
                  <TDCell width={'38px'}></TDCell>
                  <TDCell width={'73px'}></TDCell>
                  <TDCell width={'48px'}></TDCell>
                  <TDCell width={'104px'}></TDCell>
                  <TDCell width={'100px'}></TDCell>
                  <TDCell width={'98px'}></TDCell>
                </TDRow>
              )
            //# endregion
          }
        </tbody>
      </Table>
    </div>
  )
}
