import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()

  const showHide = () => {
    const $menu = document.getElementById("user-menu")
    $menu.classList.toggle("hidden")
    $menu.classList.toggle("flex")
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="flex items-center justify-between h-14 col-span-3 bg-darker-blue text-white rounded-2xl px-6">
      <div className="flex  gap-5">
        <Link to='#' className="flex flex-row gap-1">
          <span className="font-normal text-[15px] text-[#faf9f6]">Calendario</span>
          <img src="/assets/icons/arrow-down-white.svg" alt="caledar arrow" />
        </Link>
        <Link to='#' className="flex flex-row gap-1">
          <span className="font-normal text-[15px] text-[#faf9f6]">Ayuda</span>
          <img src="/assets/icons/help-icon.svg" alt="caledar arrow" />
        </Link>
      </div>

      <img src="/assets/search.svg" alt="search" />

      <div className="flex gap-9 relative">
        <img className="cursor-pointer" src="/assets/user.svg" alt="usuario" onClick={showHide} />
        <img src="/assets/icons/bell-icon.svg" alt="alerts" />
        <div
          className="hidden w-60 h-[116px] flex-col items-start justify-center -bottom-32 right-9 z-30 absolute px-6 gap-5"
          style={{ backgroundImage: "url('/assets/user-menu.svg')" }}
          id="user-menu"
          onClick={showHide}
        >
          <Link className="flex items-center gap-2" to="/inversor/dashboard/profile">
            <img src="/assets/icons/user-icon.svg" alt="user icon" />
            <span className="font-bold text-[16px] leading-[8.187499642372131%] text-white">
              Mi Perfil
            </span>
          </Link>
          <button className="flex items-center gap-2" >
            <img src="/assets/icons/logout-icon.svg" alt="user icon" />
            <span
              onClick={handleLogout}
              className="font-bold text-[16px] leading-[8.187499642372131%] text-white"
            >
              Cerrar Sesión
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
