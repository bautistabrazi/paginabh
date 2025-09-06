import '../css/historia.css';
import Momento from './momento';
import datos from "../../mock/datos.json"

export default function Historia() {
  
  return (
    <div id="historia">
      <div className='velo-contenedor'><div className="velo-horizontal"></div></div>
      <div className='fotos-container'> 
        {Object.values(datos.Historias).map((historia, index) => (
          <Momento key={index} {...historia} scroll="100" />
        ))}
      </div>
    </div>
  );
}
