
import './css/App.css'
import './css/colors.css'
import './css/shadows.css'
import { store } from './redux/store'
import { useSelector, useDispatch} from 'react-redux'
import Header from './views/headers/header.jsx'
import Home from './views/componentes/home.jsx'

function App() {
/*   const state = useSelector(state=> state)
  const dispatch = useDispatch() */

  return (
    <>
      <Header></Header>
      <Home></Home>
    </>
  )
}

export default App
