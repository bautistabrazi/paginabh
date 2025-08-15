import '../css/home.css'
import logo from '../../assets/logo.jpg'

function Home() {
/*   const state = useSelector(state=> state)
  const dispatch = useDispatch() */

  return (
    <>
      <div id="home">
    
        <div class="inicio">
            <div class="foto">
                <img src={logo} className="logo" alt="Vite logo" />
            </div>
            <div class="circulo"></div>
            <div class="linea"></div>
        </div>
        
      </div>
    </>
  )
}

export default Home
