import axios from "axios";

import Swal from 'sweetalert2'



const URL = 'http://localhost:8080/api'



export const verifyUser= async({ codigo, email })=> {

    try {
      const response = await axios.post(`${URL}/verify-otp`, {
        otp:codigo,
        email:email
      });
        //console.log('Post realizado correctamente:', req);
  
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "su correo ha sido confirmado",
          showConfirmButton: false,
          timer: 1500
        });
  
        return response.data;
      
    } catch (error) {
       // Verifica si el error tiene una respuesta del servidor
       if (error.response) {
        // El servidor respondió con un estado fuera del rango 2xx
        console.error('Error en la respuesta del servidor:', error.response.data);
        console.error('Código de estado:', error.response.status);
      } else if (error.request) {
        // La solicitud se hizo pero no se recibió respuesta
        console.error('No se recibió respuesta del servidor:', error.request);
      } else {
        // Algo sucedió al configurar la solicitud
        console.error('Error en la configuración de la solicitud:', error.message);
      }
      
    }
    
  }