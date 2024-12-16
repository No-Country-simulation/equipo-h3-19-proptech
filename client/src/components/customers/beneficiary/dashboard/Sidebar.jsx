import SidebarMenu from "./SidebarMenu"
import { useState } from 'react';

export default function Sidebar() {

  const initialState = {
    income: false,
    transactions: false,
    account: false,
    settings: false,
  }
  const [activeStates, setActiveStates] = useState(initialState);

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
          target={''}
          arrow={false}
        />
        <SidebarMenu
          key={'loans'}
          label={'Préstamos'}
          icon={'income'}
          target={'loans-history'}
          arrow={true}
          active={activeStates.income}
          handler={handleClick}
          submenu={[
            {
              label: "Historial de préstamos",
              target: "loans-history"
            },
            {
              label: "Simulador de préstamos",
              target: "loans-simulator"
            }
          ]}
        />
        <SidebarMenu
          label={'Transacciones'}
          icon={'transactions'}
          key={'transactions'}
          target={'transactions-recent'}
          arrow={true}
          active={activeStates.transactions}
          handler={handleClick}
          submenu={[
            {
              label: "Transacciones Recientes",
              target: "transactions-recent"
            }
          ]}
        />
      </div>
      {/* TOP MENU */}

      <div className="w-full h-[1px] bg-our-white" />  {/* SEPARADOR */}

      {/* BOTTOM MENU */}
      <div className="flex flex-col w-full p-5 gap-2">
        <SidebarMenu
          label={'Mi cuenta'}
          icon={'account'}
          key={'account'}
          target={'account'}
          arrow={false}
          active={activeStates.account}
          handler={handleClick}
        />
        <SidebarMenu
          label={'Configuaración'}
          icon={'settings'}
          key={'settings'}
          target={'profile'}
          arrow={false}
          active={activeStates.settings}
          handler={handleClick}
        />
      </div>
      {/* BOTTOM MENU */}
    </div>
  )
}
