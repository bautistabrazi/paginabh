import '../css/inicio.css'
import pezzella from '../../assets/pezzella.webp'
import lomonaco from '../../assets/lomonaco.webp'

function Inicio() {
/*   const state = useSelector(state=> state)
  const dispatch = useDispatch() */

  return (
    <>
        <div id="inicio">
            <div className="imagenes">
              <div className="linea-cover"></div>
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
    </>
  )
}

export default Inicio
