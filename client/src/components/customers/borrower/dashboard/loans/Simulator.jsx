import { useState } from "react"
import InputsPanel from "./InputsPanel"
import OutputPanel from "./OutputPanel"

export default function Simulator() {

  const initialDataState = {
    amount: 2000000,
    time: 3
  }
  const [data, setData] = useState(initialDataState)
  const [isInput, setIsInput] = useState(true)

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setIsInput(false)
    console.log('ok');

  }

  return (
    <main className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7">
      <header className="font-normal text-[32px] text-black font-serif">Mis préstamos</header>
      <section className="w-full  flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-5 p-5 overflow-auto scroll-hidden">
        <header className="flex flex-row w-full items-center justify-start " >
          <div className="w-full flex flex-col gap-3 pl-5">
            <span className="font-medium text-[20px] leading-[25.143999099731445px] text-black">Simulación de préstamo</span>
            <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">
              Realiza una simulación del préstamo que quieres pedir para ver sus cuotas, intereses y tiempo a pagar.
            </span>
          </div>
        </header>

        <aside className="w-full p-14">
          {
            isInput
              ?
              <InputsPanel
                changeHandler={handleChange}
                data={data}
                submitHandler={handleSubmit}
              />
              :
              <OutputPanel
                changePanel={setIsInput}
              />
          }
        </aside>
      </section>
    </main>
  )
}
