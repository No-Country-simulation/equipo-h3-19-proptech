import axios from "axios";




const URL = 'http://localhost:8080/api/users'

//inicio de sesion
export async function signin(user) {

  try {
    const req= await axios.post(`${URL}/login`, user)
    // hacer algo con el token data.token

   // dispatch(setUser(data.user));
  
    return req.data

  } catch (error) {
    console.log(error)
  }
}








//registrar cuenta
export async function signup(user) {
  try {
    const { data } = await axios.post('/ruta-de-registro', user)
    // hacer algo con el token data.token


    if(!data || !data.user ) throw new Error('Error registrando cuenta')
    return [null, data.user]
  } catch (error) {
    return [error]
  }
}
