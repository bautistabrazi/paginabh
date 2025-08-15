import '../css/home.css'
import logo from '../../assets/logo2.png'
import pezzella from '../../assets/pezzella.webp'
import lomonaco from '../../assets/lomonaco.webp'

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
            <div class="imagenes">
                <div class="imagen-ropa">
                    <img src={pezzella} />
                </div>
                <div class="imagen-barber">
                    <img src={lomonaco} />
                </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
