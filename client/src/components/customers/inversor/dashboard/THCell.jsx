import PropTypes from 'prop-types'

export default function THCell ({children, width}) {
  return (
    <td 
    className={'font-black text-[12px] text-center text-black text-wrap'}
    width={width}
    >
      {children}
    </td>
  )
}

THCell.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
}
