import axios from "axios";

import Swal from 'sweetalert2'



const URL = 'http://localhost:8080/api/users'




export const createUser= async(data)=> {

  try {
    const req = await axios.post(`${URL}/register`, data);
      //console.log('Post realizado correctamente:', req);

      
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "registro exitoso",
        showConfirmButton: false,
        timer: 1500
      });

      return req.data;
    
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


export async function updateUser({ id, user }) {
  try {
    const { data } = await axios.put(`/ruta-de-usuario?id=${id}`, user)
    
    if (!data || !data.user) throw new Error('Error actualizando usuario')
    return [null, data.user]
  } catch (error) {
    return [error]
  }
}

export async function deleteUser(id) {
  try {
    const { data } = await axios.put(`/ruta-de-usuario?id=${id}`, { isDeleted: true })
    
    if (!data || !data.user) throw new Error('Error eliminando usuario')
    return [null, data.user]
  } catch (error) {
    return [error]
  }
}


export async function getUserById(id){

  const req = await axios.get(`${URL}/${id}`)
  
  return req.data
}