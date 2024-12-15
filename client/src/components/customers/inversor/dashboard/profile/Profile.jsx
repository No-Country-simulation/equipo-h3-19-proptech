export default function Profile () {
  return (
    <div className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7">
      <span className="font-normal text-[32px] text-black">Hola Martín</span>
      <div className="w-full  flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-5 p-5 overflow-auto scroll-hidden">
        Ajustes de perfil
      </div>
    </div>
  )
}
