import SidebarMenu from "./SidebarMenu"
import { useEffect, useState } from 'react';

export default function Sidebar() {

  const initialState = {
    investments: false,
    transactions: false,
    account: false,
    settings: false,
  }
  const [activeStates, setActiveStates] = useState(initialState);
  const [current, setcurrent ] = useState('')

  useEffect(()=> {
    setcurrent(location.href.split('/').pop())
  }, [])

  const handleClick = (key) => {
    setActiveStates({
      ...activeStates,
      [key]: !activeStates[key]
    })
  };

  const completed = 6

  return (
    <div className="h-[calc(100dvh-56px)] flex flex-col items-center justify-start bg-darker-blue text-our-white p-5 rounded-t-2xl overflow-auto scroll-hidden">
      {/*  PROGRESS */}
      <div className="w-full h-auto flex flex-col gap-4 px-12" id="progress">
        <span className="font-normal text-[12px] text-our-white">Configura tu Panel de control</span>
        <div className="w-[175px] h-2 bg-white pl-9 rounded-[100px] relative">
          <div className="h-2 rounded-[59px] bg-[#1890ff] left-0 absolute" style={{ width: 25 * completed + 'px' }} />
        </div>
        <span className="font-normal text-[11px] text-our-white">{completed}/7 Completados</span>
      </div>
      {/* PROGRESS */}

      {/* TOP MENU */}
      <div className="flex flex-col w-full p-5 gap-2">
        <SidebarMenu
          label={'Panel de control'}
          icon={'home'}
          target={'dashboard/'}
          arrow={false}
          handler={handleClick}
          current={current}
        />
        <SidebarMenu
          key={'investments'}
          label={'Mis Inversiones'}
          icon={'income'}
          target={'investments'}
          arrow={true}
          active={activeStates.investments}
          current={current}
          submenu={[
            {
              label: 'Portafolio',
              target: 'investments/portfolio'
            },
            {
              label: 'Calendario',
              target: 'investments/calendar'
            },
            {
              label: 'Historial de inversiones',
              target: 'investments/history'
            },
            {
              label: 'Análisis y estadísticas',
              target: 'investments/analysis'
            },
            {
              label: 'Simulador de inversión',
              target: 'investments/simulator'
            }
          ]}
          handler={handleClick}
        />
        <SidebarMenu
          label={'Transacciones'}
          icon={'transactions'}
          key={'transactions'}
          target={'transactions'}
          arrow={true}
          active={activeStates.transactions}
          current={current}
          submenu={[
            {
              label: 'Transacciones recientes',
              target: 'transactions/recent'
            },
            {
              label: 'Solicitar retiro',
              target: 'transactions/withdraw'
            },
            {
              label: 'Comisiones',
              target: 'transactions/commisions'
            },
            {
              label: 'Pagos',
              target: 'transactions/payments'
            }
          ]}
          handler={handleClick}
        />
      </div>
      {/* TOP MENU */}

      <div className="w-full h-[1px] bg-our-white" />  {/* SEPARADOR */}

      {/* BOTTOM MENU */}
      <div className="flex flex-col w-full p-5 gap-2">
        <SidebarMenu
          label={'Mi cuenta'}
          icon={'report'}
          key={'account'}
          target={'dashboard/#'}
          arrow={false}
          active={activeStates.account}
          handler={handleClick}
          current={current}
        />
        <SidebarMenu
          label={'Configuración'}
          icon={'settings'}
          key={'settings'}
          target={'dashboard/#'}
          arrow={false}
          active={activeStates.settings}
          handler={handleClick}
          current={current}
        />
      </div>
      {/* BOTTOM MENU */}
      {
        /*
        <SidebarMenu label={'Mis tarjetas'} icon={'cards'} target={'#'} arrow={true} />
        <SidebarMenu label={'Ingresos'} icon={'income'} target={'#'} arrow={true} />
        <SidebarMenu label={'Análisis de rendimiento'} icon={'returns'} target={'#'} arrow={true} />
        */
      }
    </div>
  )
}
