import '../css/home.css';
import '../css/historia.css';
import foto1 from '../../assets/1.jpg'
import foto2 from '../../assets/2.jpg'
import React from 'react';

export default function Historia() {
  
  return (
    <div id="historia">
      <div className='velo-contenedor'><div className="velo-horizontal"></div></div>
      <div className='fotos-container'> 
        <div className='inner-grid'>
          <img src={foto1} className='historia-foto centrado'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam.</p>
        </div>
        <div className='inner-grid'>
          <img src={foto2} className='historia-foto centrado'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam.</p>
        </div>
        <div className='inner-grid'>
          <img src={foto2} className='historia-foto centrado'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam.</p>
        </div>
        <div className='inner-grid'>
          <img src={foto1} className='historia-foto centrado'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam.</p>
        </div>
      </div>
    </div>
  );
}
