import PropTypes from 'prop-types'

export default function TDRow ({children, backgroundColor}) {
  return (
    <tr className={`w-full flex flex-row justify-around`} style={{backgroundColor}}>
      {children}
    </tr>
  )
}

TDRow.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string
}
