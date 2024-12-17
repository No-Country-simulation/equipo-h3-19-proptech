import PropTypes from 'prop-types'

export default function Notifications({ messages }) {
  return (
    <section className="w-full flex flex-col gap-3 p-12 bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <header className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Notificaciones</header>
      {
        messages?.length > 0 ?
          messages.map(({ id, body }) => (
            <article
              key={id}
              className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">
              {body}
            </article>
          ))
          : <article className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">No hay mensajes</article>
      }
    </section>
  )
}

Notifications.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.string
    })
  )
}