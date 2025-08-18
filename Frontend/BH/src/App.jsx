import './css/Grid.css'
import './css/App.css'
import './css/colors.css'
import './css/shadows.css'
import { store } from './redux/store'
import { useSelector, useDispatch} from 'react-redux'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Header from './views/headers/header.jsx'
import Home from './views/componentes/home.jsx'

function App() {
/*   const state = useSelector(state=> state)
  const dispatch = useDispatch() */

  return (
    <BrowserRouter>
      <header>
        {/* <Header></Header> */}
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        
      </main>
    </BrowserRouter>
  )
}

export default App
