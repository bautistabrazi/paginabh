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
    
        <div className="inicio">
            <div className="foto">
                <img src={logo} className="logo" />
            </div>
            <div className="circulo"></div>
            <div className="linea"></div>
            <div className="imagenes">
                <div className="imagen-ropa imagen">
                    <div className="velo-ropa velo"></div>
                    <img src={pezzella} />
                </div>
                <div className="imagen-barber imagen">
                    <div className="velo-barber velo"></div>
                    <img src={lomonaco} />
                </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
