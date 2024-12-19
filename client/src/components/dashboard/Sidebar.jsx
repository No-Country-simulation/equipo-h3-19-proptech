import SidebarMenu from "./SidebarMenu"

export default function Sidebar() {

  const completed = 1

  return (
    <div className="h-screen flex flex-col items-center justify-start bg-colorSecondary text-colorPrimary p-5 rounded-2xl">
      {/*  PROGRESS */}
      <div className="w-full h-auto flex flex-col gap-4 px-12" id="progress">
        <span className="font-normal text-[12px] text-colorPrimary">Configura tu Panel de control</span>
        <div className="w-[175px] h-2 bg-white pl-9 rounded-[100px] relative">
          <div className="h-2 rounded-[59px] bg-[#1890ff] left-0 absolute" style={{ width: 25 * completed + 'px' }} />
        </div>
        <span className="font-normal text-[11px] text-colorPrimary">{completed}/7 Completados</span>
      </div>
      {/* PROGRESS */}

      {/* TOP MENU */}
      <div className="flex flex-col w-full p-5 gap-2">
        <SidebarMenu label={'Inicio'} icon={'home'} target={'#'} arrow={false} />
        <SidebarMenu label={'Mis tarjetas'} icon={'cards'} target={'#'} arrow={true} />
        <SidebarMenu label={'Análisis de rendimiento'} icon={'returns'} target={'#'} arrow={true} />
        <SidebarMenu label={'Transacciones'} icon={'transactions'} target={'#'} arrow={true} />
      </div>
      {/* TOP MENU */}

      <div className="w-[333px] h-[1px] bg-colorPrimary" />  {/* SEPARADOR */}

      {/* BOTTOM MENU */}
      <div className="flex flex-col w-full p-5 gap-2">
        <SidebarMenu label={'Reporte'} icon={'report'} target={'#'} arrow={false} />
        <SidebarMenu label={'Mis Inversiones'} icon={'investments'} target={'#'} arrow={true} />
        <SidebarMenu label={'Ingresos'} icon={'income'} target={'#'} arrow={true} />
        <SidebarMenu label={'Configuración'} icon={'settings'} target={'#'} arrow={false} />
      </div>
      {/* BOTTOM MENU */}
    </div>
  )
}
