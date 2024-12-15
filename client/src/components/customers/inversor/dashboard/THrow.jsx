import PropTypes from 'prop-types'

export default function THrow({ children }) {
  return (
    <tr className='w-full flex flex-row items-center justify-around bg-[#d9d9d9]'>
      {children}
    </tr>
  )
}

THrow.propTypes = {
  children: PropTypes.node
}
