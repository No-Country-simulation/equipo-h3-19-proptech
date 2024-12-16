import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function SidebarMenu({ target, label, icon, arrow, submenu, active, handler, current, userRole }) {

  let linkClass = "w-full h-6 flex flex-row items-center gap-2 rounded-lg p-5 cursor-pointer"
  linkClass += arrow ?
    " justify-between" :
    " justify-start"
  linkClass += current !== target.split('/').pop() ? '' : ' bg-[#fafafa33]'

  return (
    <>
      <div
        to={'#'}
        className={linkClass}
        onClick={() => handler(target)}
      >
        <Link
          to={ target === 'dashboard/' ? target : '#'}
          className="h-6 flex flex-row gap-2 items-center cursor-pointer">
          <img src={`/assets/icons/${icon}-icon.svg`} alt={label} />
          <span className="font-medium text-sm text-white">
            {label}
          </span>
        </Link>
        {arrow && <img className={active ? "rotate-180" : ""} src="/assets/icons/arrow-down-white.svg" alt="home" />}
      </div>
      {
        active && submenu?.length > 0 && submenu.map(({ label, target }) => {
          console.log(current === target.split('/').pop());
          const back = current !== target.split('/').pop() ? '' : ' bg-[#fafafa33]'
          let submenuClass = `w-full pl-11 ${back}`
          
          return (
            <Link
              to={`/${userRole}/dashboard/${target}`} key={label}
              className={submenuClass}
            >
              {label}
            </Link>
          )
        })
      }
    </>
  )
}

SidebarMenu.propTypes = {
  target: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  arrow: PropTypes.bool,
  active: PropTypes.bool,
  current: PropTypes.string,
  handler: PropTypes.func,
  userRole: PropTypes.string,
  submenu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      target: PropTypes.string
    })
  )
}
