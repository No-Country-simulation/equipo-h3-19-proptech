import PropTypes from 'prop-types'

export default function TDCell ({children}) {
  return (
    <td className={`font-normal text-[12px] text-center text-black`}>
      {children}
    </td>
  )
}


TDCell.propTypes = {
  children: PropTypes.node
}
