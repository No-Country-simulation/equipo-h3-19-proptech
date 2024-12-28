import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    { title: "¿Cual es el retorno promedio esperado de la plataforma?", content: "Es un componente interactivo que permite mostrar y ocultar información." },
    { title: "¿Que medidas de seguridad tiene la plataforma para proteger mi inversion?", content: "Se basa en el estado para alternar la visibilidad del contenido." },
    { title: "¿Hay costos o comisiones por invertir?", content: "Es común en preguntas frecuentes (FAQ), menús, y configuraciones." },
  ];

  return (
    <div className="w-full" style={{  margin: "0 auto" }}>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
          <button
            onClick={() => toggleAccordion(index)}
            className="border border-colorTerciary bg-colorPrimary"
            style={{
              
              width: "100%",
              padding: "10px",
              textAlign: "left",
        
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div
            className="bg-colorSecondary text-colorPrimary py-4 px-4" 
              style={{ 
                  
                  borderTop: "1px solid #ccc" 
                  }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;