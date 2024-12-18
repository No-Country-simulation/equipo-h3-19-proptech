import SidebarMenu from "@ui/SidebarMenu"
import { useEffect, useState } from 'react';

export default function Sidebar() {

  const initialState = {
    "investments-analysis": false,
    "transactions-recent": false,
    account: false,
    settings: false,
  }
  const [activeStates, setActiveStates] = useState(initialState);
  const [current, setcurrent] = useState('')

  useEffect(() => {
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
    <main className="h-[calc(100dvh-56px)] flex flex-col items-center justify-start bg-darker-blue text-our-white p-5 rounded-t-2xl overflow-auto scroll-hidden">
      {/*  
      //#region  PROGRESS 
      */}
      <header className="w-full h-auto flex flex-col gap-4 px-12" id="progress">
        <span className="font-normal text-[12px] text-our-white">Configura tu Panel de control</span>
        <div className="w-[175px] h-2 bg-white pl-9 rounded-3xl relative">
          <div className="h-2 rounded-3xl bg-[#1890ff] left-0 absolute" style={{ width: 25 * completed + 'px' }} />
        </div>
        <span className="font-normal text-[11px] text-our-white">{completed}/7 Completados</span>
      </header>
      {/* 
      //# endregion
      */}

      {/* TOP MENU */}
      {/* 
      //#region HOME LINK 
      */}
      <section className="flex flex-col w-full p-5 gap-2">
        <SidebarMenu
          label={'Panel de control'}
          icon={'home'}
          target={''}
          arrow={false}
          handler={handleClick}
          current={current}
          userRole={'inversor'}
        />
        {/*
        //# endregion
        //#region INVERSONES
        */}
        <SidebarMenu
          key={'investments'}
          label={'Mis Inversiones'}
          icon={'income'}
          target={'investments-analysis'}
          arrow={true}
          active={activeStates["investments-analysis"]}
          current={current}
          userRole={'inversor'}
          submenu={[
            {
              label: 'Portafolio',
              target: 'investments-portfolio'
            },
            {
              label: 'Calendario',
              target: 'investments-calendar'
            },
            {
              label: 'Historial de inversiones',
              target: 'investments-history'
            },
            {
              label: 'Análisis y estadísticas',
              target: 'investments-analysis'
            },
            {
              label: 'Simulador de inversión',
              target: 'investments-simulator'
            }
          ]}
          handler={handleClick}
        />
        {/*
        //# endregion
        //#region TRANSACCIONES
        */}
        <SidebarMenu
          label={'Transacciones'}
          icon={'transactions'}
          key={'transactions'}
          target={'transactions-recent'}
          arrow={true}
          active={activeStates['transactions-recent']}
          current={current}
          userRole={'inversor'}
          submenu={[
            {
              label: 'Transacciones recientes',
              target: 'transactions-recent'
            },
            {
              label: 'Solicitar retiro',
              target: 'transactions-withdraw'
            },
            {
              label: 'Comisiones',
              target: 'transactions-commisions'
            },
            {
              label: 'Pagos',
              target: 'transactions-payments'
            }
          ]}
          handler={handleClick}
        />
      </section>
      {/*
        //# endregion
      */}
      {/* FIN TOP MENU */}

      <div className="w-full h-[1px] bg-our-white" />  {/* SEPARADOR */}

      {/* BOTTOM MENU */}
      {/*
        //#region CUENTA
      */}
      <section className="flex flex-col w-full p-5 gap-2">
        <SidebarMenu
          label={'Mi cuenta'}
          icon={'account'}
          key={'account'}
          target={''}
          arrow={false}
          active={activeStates.account}
          handler={handleClick}
          current={current}
          userRole={'inversor'}
        />
        {/*
        //# endregion
        //#region PERFIL
        */}
        <SidebarMenu
          label={'Configuración'}
          icon={'settings'}
          key={'settings'}
          target={'profile'}
          arrow={false}
          active={activeStates.settings}
          handler={handleClick}
          current={current}
          userRole={'inversor'}
        />
        {/*
        //# endregion
        */}
      </section>
      {/* FIN BOTTOM MENU */}
    </main>
  )
}
