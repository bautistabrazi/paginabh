import './css/Grid.css'
import './css/App.css'
import './css/colors.css'
import './css/shadows.css'
import Home from './views/componentes/home.jsx'
import React, { useRef } from 'react';
import { useSelector } from 'react-redux'

function App() {

  const scrollState = useSelector(state => state.scrolls)
  const bodyRef = useRef();

  return ( 
      <main ref={bodyRef}>
        <Home scrollContainerRef={bodyRef}/>
      </main>    
  )
}

export default App
