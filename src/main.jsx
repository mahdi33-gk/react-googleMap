import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { APIProvider }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <APIProvider>
    <App />
    </APIProvider>
  </StrictMode>,
)
