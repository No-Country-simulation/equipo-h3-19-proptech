import PropTypes from 'prop-types'

export default function PrimaryButton({ children, handler, atribute, typeOfButton, buttonHeight }) {

  const buttonClass =
    buttonHeight ?
      "h-[49px] flex flex-col justify-center items-center gap-[5.267080783843994px] bg-[#64b742] active:bg-[#85df62] rounded-[5.267080783843994px] font-medium text-[16px] leading-[20px] text-center text-white px-4 hover:scale-105" :
      "h-[33px] flex flex-col justify-center items-center gap-[5.267080783843994px] bg-[#64b742] active:bg-[#85df62] rounded-[5.267080783843994px] font-medium text-[16px] leading-[20px] text-center text-white px-4 hover:scale-105"

  return (
    <button
      type={typeOfButton ? typeOfButton : 'button'}
      onClick={() => {
        handler !== undefined && handler(atribute)
      }}
      className={buttonClass}
    >
      {children}
    </button>
  )
}

PrimaryButton.propTypes = {
  handler: PropTypes.func,
  atribute: PropTypes.string,
  children: PropTypes.node,
  typeOfButton: PropTypes.string,
  buttonHeight: PropTypes.string
}