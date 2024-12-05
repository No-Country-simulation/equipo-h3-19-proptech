import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function SidebarMenu({target, label, icon, arrow}) {

  const linkClass = arrow ?
  "w-full h-6 flex flex-row gap-2 justify-between" :
  "w-full h-6 flex flex-row gap-2 justify-start"
  return (
    <Link to={target} className={linkClass} >
      <div className="h-6 flex flex-row gap-2 items-center">
        <img src={`/assets/icons/${icon}-icon.svg`} alt={label} />
        <span className="font-medium text-sm text-white">
          {label}
        </span>
      </div>
      {arrow && <img src="/assets/icons/arrow-down-white.svg" alt="home" />}
    </Link>
  )
}

SidebarMenu.propTypes = {
  target: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  arrow: PropTypes.bool
}
