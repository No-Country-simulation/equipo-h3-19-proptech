import PropTypes from 'prop-types'

export default function Card({title, subtitle, label}) {
  return (
    <div className="w-[480px] flex flex-col self-center bg-white py-4 border gap-4 rounded-lg justify-center items-center">
      <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-center text-black">
        {title}
      </span>

      <span className="font-normal text-[16px] text-center text-[#0a0a0b]">
        {subtitle}
      </span>

      <button className="w-fit px-4 py-2 font-medium text-[16px] leading-[20px] text-center text-white bg-colorFourth rounded-lg">
          {label}
      </button>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  label: PropTypes.string,
}