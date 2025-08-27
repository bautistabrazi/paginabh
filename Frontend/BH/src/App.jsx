import './css/Grid.css'
import './css/App.css'
import './css/colors.css'
import './css/shadows.css'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Header from './views/headers/header.jsx'
import Home from './views/componentes/home.jsx'
import Layout from './views/ui/Layout';
import { LAYOUTS } from './views/ui/layouts';
import React, { useRef } from 'react';

function App() {
  const bodyRef = useRef();
  return (
    <BrowserRouter>
      <main>
        <Layout
          layout={LAYOUTS.ALL_BODY}
          body={<Home scrollContainerRef={bodyRef} />}
          bodyRef={bodyRef}
          foot={null}
        />
      </main>
    </BrowserRouter>
  )
}

export default App
