import './css/Grid.css'
import './css/App.css'
import './css/colors.css'
import './css/shadows.css'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Home from './views/componentes/home.jsx'

import React, { useRef } from 'react';

function App() {
  const bodyRef = useRef();
  return (
    <BrowserRouter>
      <main ref={bodyRef}>
        <Home
          scrollContainerRef={bodyRef}
        />
      </main>
    </BrowserRouter>
  )
}

export default App
