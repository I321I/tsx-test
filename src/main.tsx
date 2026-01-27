import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import EmptyContent from './components/EmptyContent.tsx';
import Navigation from './components/Navigation.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <App></App>
    
    </BrowserRouter>
  </StrictMode>,
)
