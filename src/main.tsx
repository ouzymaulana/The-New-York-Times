import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className='min-h-screen bg-gray-50 py-8 px-4'>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
