import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: '',
  token: '',
  isLoggedIn: false,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    login(state, action) {
      
  
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token =  action.payload.token;
      //state.isLoggedIn = true;

     // console.log("Estado después del login:", state); // Verifica aquí
    },
    logout(state) {
      state.id = null;
      state.email = '';
      state.token = '';
      //state.isLoggedIn = false;

      console.log("Estado después del logout:", state); // Verifica aquí
    },
  },
});




export const { login, logout } = userSlice.actions; // Exporta las acciones
export default userSlice.reducer; // Exporta el reducer