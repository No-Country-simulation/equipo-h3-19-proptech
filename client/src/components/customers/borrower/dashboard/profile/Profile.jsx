import { useState } from "react"
import { personalData } from './data'
import PrimaryButton from "@ui/PrimaryButton"
import FileButton from "@ui/FileButton"
import SecondaryButton from "@ui/SecondaryButton"

export default function Profile() {

  const initialState = {
    DNI: false,
    salaryreceipt: false,
    domicilecertificate: false,
    guarantor1: false,
    guarantor2: false,
    editMode: false
  }
  const [uploaded, setUploaded] = useState(initialState)
  const [guarantorsCount, setGuarantorsCount] = useState(2)

  const handleDocUploaded = name => {
    setGuarantorsCount(prev => prev > 0 ? prev - 1 : 0)
    setUploaded({
      ...uploaded,
      [name]: true
    })
  }
  const handleDocCancel = name => {
    setGuarantorsCount(prev => prev < 2 ? prev + 1 : 2)
    setUploaded({
      ...uploaded,
      [name]: false
    })
  }

  return (
    <main className="w-full h-[calc(100dvh-56px)] flex flex-col px-5 py-7 gap-7 overflow-auto scroll-hidden">
      <header className="font-normal text-[32px] text-black font-serif">Mi perfil</header>
      {/* 
      //#region INFO PERSONAL
      */}
      <section className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-7 p-5">
        <header className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Información Personal</span>
            <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Mi información personal.</span>
          </div>

          {
            uploaded.editMode
              ?
              <div className="flex gap-4">
                <PrimaryButton
                  key={'guardar'}
                  atribute={'editMode'}
                  handler={handleDocCancel}
                >
                  Guardar
                </PrimaryButton>
                <button
                  onClick={() => handleDocCancel('editMode')}
                  className="h-[33px] w-fit flex items-center bg-white rounded-md px-4 py-2 border border-colorTerciary
                 ">
                  <span className="font-medium text-[16px] leading-[20px] text-center text-colorTerciary">
                    Cancelar
                  </span>
                </button>
              </div>
              :
              <button
                onClick={() => handleDocUploaded('editMode')}
                className="font-bold text-[16px] leading-[25.143999099731445px] text-right underline text-colorTerciary outline-none border-none"
              >
                Editar
              </button>
          }
        </header>

        <aside className="w-full grid grid-cols-4 gap-5">
          {
            personalData?.length > 0 &&
            personalData.map(({ title, subtitle }) => (
              <article className="flex flex-col gap-4" key={title}>
                <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">{title}</span>
                <span
                  contentEditable={uploaded.editMode}
                  className={
                    uploaded.editMode ?
                      "font-normal text-[16px] leading-[8.187499642372131%] text-[#FC5130]" :
                      "font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]"
                  }
                >
                  {subtitle}
                </span>
              </article>
            ))
          }
        </aside>
      </section>
      {/* 
      //# endregion
      */}
      {/* 
      //#region DOC PERSONAL
      */}
      <section className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-7 px-5 py-7">
        <header className="flex flex-col gap-4">
          <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Documentación Personal</span>
          <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Documentación Requerida</span>
        </header>

        <aside className="flex flex-row items-end gap-10">
          <article className="flex flex-col gap-4">
            <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">DNI</span>
            {
              //#region DNI
              !uploaded.DNI
                ?
                <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Adjuntar un archivo .pdf con imágenes de frente y dorso del DNI.</span>
                :
                <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Documento adjunto correctamente.</span>
            }
          </article>

          {
            !uploaded.DNI
              ?
              <div className="flex flex-row items-baseline gap-3">
                <PrimaryButton
                  key={"DNI"}
                  atribute={"DNI"}
                  handler={handleDocUploaded}
                >
                  Adjuntar DNI
                </PrimaryButton>
                {/* <button className="font-bold text-[16px] leading-[25.143999099731445px] underline text-colorTerciary">
                  Ver ejemplo
                </button> */}
              </div>
              :
              <FileButton
                key="DNI"
                atribute={"DNI"}
                handler={handleDocCancel}
              >
                DNI.JL
              </FileButton>
            //# endregion
          }
        </aside>

        <aside className="flex flex-row items-end gap-7">
          <article className="flex flex-col gap-4">
            <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Recibo de sueldo</span>
            {
              //#region REC DE SUELDO
              !uploaded.salaryreceipt
                ?
                <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Adjuntar un archivo .pdf con recibo de sueldo.</span>
                :
                <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Documento adjunto correctamente.</span>
            }
          </article>

          {
            !uploaded.salaryreceipt ?
              <PrimaryButton
                key={"salaryreceipt"}
                atribute={"salaryreceipt"}
                handler={handleDocUploaded}
              >
                Adjuntar Recibo
              </PrimaryButton>
              :
              <FileButton
                key="salaryreceipt"
                atribute={"salaryreceipt"}
                handler={handleDocCancel}
              >
                Recibo sueldo.JL
              </FileButton>
            //# endregion
          }
        </aside>

        <aside className="flex flex-row items-end gap-7">
          <article className="flex flex-col gap-4">
            <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Comprobante de domicilio</span>
            {
              //#region CERT DOMICILIO
              !uploaded.domicilecertificate
                ?
                <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Adjuntar un archivo .pdf con certificado de domicilio.</span>
                :
                <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Documento adjunto correctamente.</span>
            }
          </article>

          {
            !uploaded.domicilecertificate ?
              <PrimaryButton
                key="domicilecertificate"
                atribute={"domicilecertificate"}
                handler={handleDocUploaded}
              >
                Adjuntar Comprobante
              </PrimaryButton>
              :
              <FileButton
                key="domicilecertificate"
                atribute={"domicilecertificate"}
                handler={handleDocCancel}
              >
                Comprobante domicilio.JL
              </FileButton>
            //# endregion
          }
        </aside>
      </section>
      {/* 
      //# endregion
      */}
      {/* 
      //#region DOCs GARANTES
      */}
      <section className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-7 px-5 py-7">

        <header className="flex flex-col gap-4">
          <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Garantes</span>
          <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Documentación de garantes.</span>
        </header>

        <aside className="flex flex-row items-end gap-10">
          <article className="flex flex-col gap-5">
            <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">DNI</span>
            {
              //#region DNIs GARANTES
              guarantorsCount > 0 && (
                <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">
                  Adjuntar archivos .pdf con imágenes de frente y dorso del DNI.
                </span>
              )
            }
            <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">
              {2 - guarantorsCount}/2 Documento/s adjunto/s correctamente.
            </span>
          </article>
          {
            //#region GARANTE 1
            uploaded.guarantor1 ?
              <FileButton
                key={"guarantor1"}
                atribute={"guarantor1"}
                handler={handleDocCancel}
              >
                DNI.SG
              </FileButton>
              :
              <PrimaryButton
                key={`guarantor1`}
                atribute={`guarantor1`}
                handler={handleDocUploaded}
              >
                Adjuntar DNI
              </PrimaryButton>
            //# endregion
          }
          {
            //#region GARANTE 2
            uploaded.guarantor2 ?
              <FileButton
                key={"guarantor2"}
                atribute={"guarantor2"}
                handler={handleDocCancel}
              >
                DNI.AMR
              </FileButton>
              :
              <PrimaryButton
                key={`guarantor2`}
                atribute={`guarantor2`}
                handler={handleDocUploaded}
              >
                Adjuntar DNI
              </PrimaryButton>
            //# endregion
          }
        </aside>
      </section>

      <section className="w-full flex flex-col bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] gap-7 px-5 py-7">
        <header className="flex flex-col gap-3">
          <span className="font-semibold text-[20px] leading-[25.143999099731445px] text-black">Contrato</span>
          <span className="font-normal text-[16px] leading-[8.187499642372131%] text-[#0a0a0b]">Contrato entre Financial Land y la prestataria Juana López.</span>
          <div className="flex flex-row gap-3 items-baseline">
            <span className="font-normal text-[12px] leading-[10.916666189829508%] text-[#0a0a0b]">
              Documento firmado por ambas partes.
            </span>
            <img src="/assets/icons/check-icon.svg" alt="check icon" />
          </div>
        </header>
        {/* 
        //#region ACUERDO
        */}
        <SecondaryButton>
          Contrato FL-Juana López
        </SecondaryButton>
        {/* 
        //# endregion
        */}
      </section>
      {/* 
      //# endregion
      */}
    </main>
  )
}
