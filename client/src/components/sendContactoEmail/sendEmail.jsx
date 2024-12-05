import React,{useState, useEffect} from "react";

const sendEmail = () => {



    const initialDataState = {
        name: "",
        email: "",
        country: "",
        email: "",
        phone: 0,
        consultation: "",
        bodyConsultation: ''
      }
      const [data, setData] = useState(initialDataState)


      const handleChange = event => {
        if (event.target.name === 'phone') {
          setData({
            ...data,
            phone: Number(event.target.value)
          })
        } else {
          setData({
            ...data,
            [event.target.name]: event.target.value
          })
        }
      };

      const handleSubmit = async() => {
        try {
            alert("hola tu formulario ha sido enviado", data.name , data)
           //await sendEmail(data);
        } catch (error) {
        }
      };
    





  return (
    <div>
      <form className="flex flex-col gap-4 w-[48rem]" onSubmit={handleSubmit}>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex gap-4 w-full  ">
            <div className="flex flex-col w-1/2 gap-1">
              <label htmlFor="email">Nombre</label>
              <input
                className="w-100 p-2 b-1 border bg-colorSecondary"
                id="Nombre"
                name="name"
                type="text"
                placeholder="Mr."
                value={data.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-1/2 gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="w-100 p-2 b-1 border  bg-colorSecondary"
                id="email"
                name="email"
                type="email"
                placeholder="email@mail.com"
                value={data.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-4 w-full justify-center">
            <div className="flex flex-col  w-1/2  gap-1">
              <label htmlFor="email">Pais de residencia</label>
              <input
                className="w-100 p-2 b-1 border  bg-colorSecondary"
                id="pais"
                name="country"
                type="text"
                placeholder="Colombia"
                value={data.country}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col  w-1/2  gap-1">
              <label htmlFor="email">Telefono</label>
              <input
                className="w-100 p-2 b-1 border  bg-colorSecondary"
                id="telefono"
                name="phone"
                type="text"
                placeholder="+ 00 000 000 000"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex gap-4 w-full justify-center">
            <div className="flex flex-col w-full  gap-1">
              <label htmlFor="email">Motivo de consulta</label>
              <input
                className="w-100 p-2 b-1 border  bg-colorSecondary"
                id="motivoConsulta"
                name="consultation"
                type="text"
                placeholder="Invertir dinero"
                value={data.consultation}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-4 w-full justify-center">
            <div className="flex flex-col w-full  gap-1">
              <label htmlFor="email">Motivo de consulta</label>
              <textarea
                className="w-100 p-2 b-1 border  bg-colorSecondary"
                id="detalle"
                name="bodyConsultation"
                type="text"
                placeholder="Tengo este dinero y me gustaria invertirlo para...."
                value={data.bodyConsultation}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-colorFourth px-4 text-xl py-2 cursor-pointer rounded-md font-semibold w-auto"
          >
            Enviar Consulta
          </button>
        </div>
      </form>
    </div>
  );
};

export default sendEmail;
