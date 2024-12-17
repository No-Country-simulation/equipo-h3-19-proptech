import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'

export default function Navbar({ user }) {
  const navigate = useNavigate()

  const hideMenu = () => {
    const $menu = document.getElementById("user-menu")
    $menu.classList.remove("flex")
    $menu.classList.add("hidden")
  }

  const showHideMenu = () => {
    const $menu = document.getElementById("user-menu")
    $menu.classList.toggle("hidden")
    $menu.classList.toggle("flex")
  }

  const showHideConfirm = () => {
    const $dialog = document.getElementById("confirm")
    $dialog.classList.toggle("hidden")
    $dialog.classList.toggle("flex")
  }

  const hideConfirm = () => {
    const $menu = document.getElementById("confirm")
    $menu.classList.remove("flex")
    $menu.classList.add("hidden")
  }

  const handleClickCloseButton = () => {
    hideConfirm()
    hideMenu()
  }

  const handleLogout = () => {
    // dispatch logout
    hideMenu()
    hideConfirm()
    navigate('/')
  }

  const handlePrfilButtonClick = () => {
    handleClickCloseButton()
    navigate(`/${user.role}/dashboard/profile`)
  }

  const showCalendar = () => {
    const $calendar = document.getElementById('calendar')
    $calendar.classList.remove('hidden')
    $calendar.classList.add('flex')
  }
  const hideCalendar = () => {
    const $calendar = document.getElementById('calendar')
    $calendar.classList.remove('flex')
    $calendar.classList.add('hidden')
  }

  return (
    <div className="flex items-center justify-between h-14 col-span-3 bg-darker-blue text-white rounded-2xl px-6">
      <div className="flex  gap-5">
        <button className="flex flex-row gap-1 relative" onClick={showCalendar}>
          <span className="font-normal text-[15px] text-[#faf9f6]">Calendario</span>
          <img src="/assets/icons/arrow-down-white.svg" alt="caledar arrow"/>
        </button>
        <div
          id="calendar"
          className="w-[100dvw] h-[99dvh] hidden pl-80 pt-14 top-0 left-0 absolute  bg-[#55555533] z-40 cursor-pointer"
          onClick={hideCalendar}
        >
          <img className="w-[395px] h-[573px]" src="/assets/temp/calendar.svg" alt="calendar" />
        </div>
        <Link to='#' className="flex flex-row gap-1">
          <span className="font-normal text-[15px] text-[#faf9f6]">Ayuda</span>
          <img src="/assets/icons/help-icon.svg" alt="caledar arrow" />
        </Link>
      </div>

      <img src="/assets/search.svg" alt="search" />

      <div className="flex gap-9 relative">
        <img className="cursor-pointer" src={user.src} alt="usuario" onClick={showHideMenu} />
        <img src="/assets/icons/bell-icon.svg" alt="alerts" />
        <div
          className="hidden w-60 h-[116px] flex-col items-start justify-center -bottom-32 right-9 z-30 absolute px-6 gap-5"
          style={{ backgroundImage: "url('/assets/user-menu.svg')" }}
          id="user-menu"
        >
          <button
            onClick={handlePrfilButtonClick}
            className="flex items-center gap-2">
            <img src="/assets/icons/user-icon.svg" alt="user icon" />
            <span className="font-bold text-[16px] leading-[8.187499642372131%] text-white">
              Mi Perfil
            </span>
          </button>
          <button
            className="flex items-center gap-2"
            onClick={showHideConfirm}
          >
            <img src="/assets/icons/logout-icon.svg" alt="user icon" />
            <span
              className="font-bold text-[16px] leading-[8.187499642372131%] text-white"
            >
              Cerrar Sesión
            </span>
          </button>
        </div>

        {/*  MODAL DE CONFIRMACION  */}
        <div id='confirm' className="h-screen w-screen hidden items-center justify-center -top-3 -left-[1150px] z-50 bg-[#fafafa77] absolute">
          <div className="w-[572px] h-[177px] flex flex-col items-center justify-start bg-white shadow-md p-5 gap-5">
            <img
              src="/assets/icons/close-icon.svg"
              alt="user icon"
              className="self-end cursor-pointer"
              onClick={handleClickCloseButton}
            />
            <span className="font-normal text-[18px] text-black">
              ¿Estás seguro que deseas cerrar sesión?
            </span>
            <div className="flex flex-row gap-6">
              <button
                className="flex justify-center items-center gap-[5.267080783843994px] self-stretch grow px-[15.80124282836914px] py-[6.583850860595703px] border border-[#2980b9] rounded-md"
                onClick={handleClickCloseButton}
              >
                <span className="font-medium text-[16px] leading-[20px] text-center text-[#2980b9]">
                  Cancelar
                </span>
              </button>
              <button
                className="flex justify-center items-center gap-[5.267080783843994px] self-stretch grow px-[15.80124282836914px] py-[6.583850860595703px] bg-[#64B742] rounded-md"
                onClick={handleLogout}
              >
                <span className="font-medium text-[16px] leading-[20px] text-center text-white">
                  Cerrar sesión
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  user: PropTypes.shape({
    src: PropTypes.string,
    role: PropTypes.string
  })
}