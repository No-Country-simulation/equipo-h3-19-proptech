import Table from "@ui/Table"
import TDCell from "@ui/TDCell"
import TDRow from "@ui/TDRow"
import THCell from "@ui/THCell"
import THrow from "@ui/THrow"
import { investmentshistory } from "./data"

export default function HistoryTable() {

  return (
    <div className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-5 p-5 overflow-auto">
      <div className="flex flex-row self-end gap-5">
        <button className="w-auto] h-[31px] flex flex-row gap-2 border border-gray-300 rounded px-3 py-2 items-center hover:border-[#154C6C]">
          <span className="font-normal text-[15px] leading-[25.143999099731445px] text-center text-black">Ordenar </span>
          <img src={`/assets/icons/sorting-icon.svg`} alt='icono de ordenar' />
        </button>
        <button className="w-auto] h-[31px] flex flex-row gap-2 border border-gray-300 rounded px-3 py-2 items-center hover:border-[#154C6C]">
          <span className="font-normal text-[15px] leading-[25.143999099731445px] text-center text-black">Filtrar </span>
          <img src={`/assets/icons/filter-icon.svg`} alt='icono de ordenar' />
        </button>
      </div>
      <Table>
        {/* CABECERA DE LA TABLA */}
        <THrow>
          <THCell width={`70px`}>Fecha</THCell>
          <THCell width={`94px`}>Invertido</THCell>
          <THCell width={`48px`}>Moneda</THCell>
          <THCell width={`104px`}>Recuperado al día</THCell>
          <THCell width={`120px`}>Diferencia intermensual</THCell>
          <THCell width={`85px`}>Rendimiento al día</THCell>
          <THCell width={`94px`}>Rendimiento total estimado</THCell>
          <THCell width={`83px`}>Monto total estimado</THCell>
          <THCell width={`73px`}>Cuotas restantes</THCell>
        </THrow>
        {
          investmentshistory?.length > 0 ? investmentshistory.map(({
            date, amountinvested, currency, amountrecovered, monthlyvariation, dailyreturn, projectedgain, expectedtotal, remainingpayments
          }, index) => {
            //#region CUERPO DE LA TABLA
            return (
              <TDRow key={index} backgroundColor={index % 2 === 0 ? 'white' : '#F4F4F4'} >
                <TDCell width={`[70px]`}>{date}</TDCell>
                <TDCell width={`[94px]`}>{amountinvested}</TDCell>
                <TDCell width={`[48px]`}>{currency}</TDCell>
                <TDCell width={`[104px]`}>{amountrecovered}</TDCell>
                <TDCell width={`[120px]`}>{monthlyvariation}</TDCell>
                <TDCell width={`[85px]`}>{dailyreturn}</TDCell>
                <TDCell width={`[94px]`}>{projectedgain}</TDCell>
                <TDCell width={`[83px]`}>{expectedtotal}</TDCell>
                <TDCell width={`[73px]`}>{remainingpayments}</TDCell>
              </TDRow>
            )
            //# endregion
          }) :
            //#region Si TABLA VACIA
            (
              <TDRow backgroundColor={'white'}>
                <TDCell width={`[70px]`}></TDCell>
                <TDCell width={`[94px]`}></TDCell>
                <TDCell width={`[48px]`}></TDCell>
                <TDCell width={`[104px]`}></TDCell>
                <TDCell width={`[120px]`}></TDCell>
                <TDCell width={`[85px]`}></TDCell>
                <TDCell width={`[94px]`}></TDCell>
                <TDCell width={`[83px]`}></TDCell>
                <TDCell width={`[73px]`}></TDCell>
              </TDRow>
            )
          //# endregion
        }
      </Table>
    </div>
  )
}
