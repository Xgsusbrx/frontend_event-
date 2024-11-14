import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css"
import {RegisterForm} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegisterForm  />
  </StrictMode>,
)
