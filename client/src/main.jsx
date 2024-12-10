import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import  store  from "./redux/store.js";

import { AuthProvider } from './AuthContext';

import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_OUR_BACKEND_URL || "http://localhost:3000/api/v1"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
