import PropTypes from 'prop-types'

export default function SecondaryButton({ children, buttonWidth }) {

  const buttonClass = buttonWidth ?
  `w-[${buttonWidth}] h-[33px] flex items-center bg-white rounded-md px-4 py-2 border border-colorTerciary font-medium text-[16px] leading-[20px] text-center text-colorTerciary text-center` :
  "h-[33px] w-fit flex items-center bg-white rounded-md px-4 py-2 border border-colorTerciary font-medium text-[16px] leading-[20px] text-center text-colorTerciary"
  return (
    <button
      className={buttonClass}
    >
      {children}
    </button>
  )
}

SecondaryButton.propTypes = {
  children: PropTypes.node,
  buttonWidth: PropTypes.string
}