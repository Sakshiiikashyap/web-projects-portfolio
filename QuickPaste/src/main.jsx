import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux' 
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>
  </StrictMode>,
)
