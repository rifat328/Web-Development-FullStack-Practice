import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Greet from './components/Greet.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
