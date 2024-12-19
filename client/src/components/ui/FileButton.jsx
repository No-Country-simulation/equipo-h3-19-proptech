import PropTypes from 'prop-types'

export default function FileButton({ children, handler, atribute }) {
  return (
    <div className="w-auto flex justify-center items-center gap-2.5 px-[15.80124282836914px] py-[6.583850860595703px] border border-colorTerciary relative rounded-md">
      <button
        onClick={() => handler(atribute)}
        name="salaryreceipt"
        className="-top-2 -right-2 transition-transform hover:scale-110 active:rotate-90 absolute"
      >
        <img src="/assets/icons/rounded-close-icon.svg" alt="close icon" />
      </button>
      <img src="/assets/icons/doc-icon.svg" alt="doc icon" />
      <span className="font-medium text-[16px] leading-[20px] text-center text-colorTerciary">{children}</span>
    </div>
  )
}

FileButton.propTypes = {
  children: PropTypes.node,
  handler: PropTypes.func,
  atribute: PropTypes.string
}