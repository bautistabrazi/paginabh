import '../css/home.css';
import '../css/historia.css';
import foto1 from '../../assets/1.jpg'
import foto2 from '../../assets/2.jpg'
import React from 'react';

export default function Historia() {
  
  return (
    <div id="historia">
      <div className='fotos-container'> 
        <img src={foto1} className='historia-foto start'/>
        <img src={foto2} className='historia-foto end'/>
      </div>
      
    </div>
  );
}
