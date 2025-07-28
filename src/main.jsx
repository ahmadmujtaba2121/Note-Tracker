import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NoteProvider } from './Context/NoteContext.jsx';
import { Toaster } from "react-hot-toast"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteProvider>
      <App />
      <Toaster position="top-center" reverseOrder={false} />
    </NoteProvider>
  </StrictMode>

)
