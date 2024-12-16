import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlices'


// cargar el estado desde el local storage
const loadFromLocalStorage = ()=>{
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) return undefined; // Si no hay datos, devuelve undefined (se usará el estado inicial)
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Error cargando el estado desde localStorage", e);
    return undefined;
  }
}
//guardar el estado en el localstrorage

const saveToLocalStorage = (state)=>{
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.error("Error guardando el estado en localStorage", error);
  }
}



const store = configureStore({
  reducer: {
    user: userReducer
  },
  preloadedState : loadFromLocalStorage(),
});
store.subscribe(()=>{
  saveToLocalStorage(store.getState());
});

export default store;