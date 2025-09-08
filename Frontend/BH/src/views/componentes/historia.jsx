import '../css/historia.css';
import Momento from './momento';
import datos from "../../mock/datos.json"

export default function Historia({scrollY, shrinkDistance}) {

  const items = Object.values(datos.Historias);
  
  return (
    <div id="historia">
      <div className='velo-contenedor'><div className="velo-horizontal"></div></div>
      <div className='fotos-container'> 
        {items?.map((historia, index) => (
          <Momento key={index} {...historia} scrollY={scrollY} shrinkDistance={shrinkDistance * (index + 1)} />
        ))}
      </div>
    </div>
  );
}
