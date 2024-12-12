import PropTypes from 'prop-types'

export default function Table ({children}) {
  return (
    <table className="w-full flex flex-col items-center">
      {children}
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.node
}
