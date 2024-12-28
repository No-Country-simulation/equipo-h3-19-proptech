import axios from "axios";





//inicio de sesion
export async function signin(user) {
  try {
    const { data } = await axios.post('/ruta-de-login', user)

    // hacer algo con el token data.token
    if(!data || !data.user ) throw new Error('Error ingresando a cuenta')
    return [null, data.user]
  } catch (error) {
    return [error]
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
