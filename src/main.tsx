/**
 * Punto de entrada principal de la aplicación
 * Calculadora Culichi - Vite + React + TypeScript + Tailwind
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
