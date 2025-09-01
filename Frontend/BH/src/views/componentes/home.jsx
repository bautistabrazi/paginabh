import '../css/home.css'
import logo from '../../assets/logo2.png'
import pezzella from '../../assets/pezzella.webp'
import lomonaco from '../../assets/lomonaco.webp'
import React, { useEffect, useState } from 'react'

export default function Home({ scrollContainerRef }) {
  const [scrollY, setScrollY] = useState(0);

  // Ajustá este valor para cuánto scroll tarda en achicarse completamente
  const SHRINK_DISTANCE = 233;

  useEffect(() => {
    const container = scrollContainerRef?.current || window;
    const onScroll = () => {
      const y = container === window ? window.scrollY : container.scrollTop;
      setScrollY(y);
    };
    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [scrollContainerRef]);

  // Calculá el progreso (0 a 1)
const progress = Math.min(scrollY / SHRINK_DISTANCE, 1);

// Offset para empezar el escalado recién cuando desaparece la anterior
const offsetScroll = scrollY - SHRINK_DISTANCE; // arranca en 0 cuando desaparece la foto original
const progressScale = offsetScroll > 0 ? Math.min(offsetScroll / SHRINK_DISTANCE / 2, 1) : 0;

// Tamaño dinámico para la foto fija
const tamañoInicio = 40;
const tamañoFinal = 20;
const tamaño = tamañoInicio - (tamañoInicio - tamañoFinal) * progressScale;
const scale = tamaño / tamañoInicio;

// Opacidades
const opacidad = progress < 1 ? 1 : 0;
const opacidadFotoFija = progress < 1 ? 0 : 1;
  
  // Usá style en vez de clases para animación suave
  const divFoto = {
    zIndex: 2000,
    width: `40vh`,
    height: `40vh`,
    transform: `translateX(calc(50vw - ${40 / 2}vh)) translateY(25vh)`,
    borderRadius: '50%',
    backgroundColor: 'var(--formulario)',
    boxShadow: 'var(--shadow-elevation-24-box)',
    overflow: 'hidden',
    opacity: `${opacidad}`
  };

const divFotoFija = {
  position: 'fixed',
  top: 0,
  left: '50%',
  transformOrigin: 'top center',
  transform: `translateX(-50%) scale(${scale})`,
  width: `${tamañoInicio}vh`,
  height: `${tamañoInicio}vh`,
  borderRadius: '50%',
  backgroundColor: 'var(--formulario)',
  boxShadow: 'var(--shadow-elevation-24-box)',
  overflow: 'hidden',
  opacity: `${opacidadFotoFija}`,
  zIndex: 2000
};

  const foto = {
    width: `40vh`,
    height: `40vh`,
    borderRadius: '50%',
    transition: 'width 0.1s, height 0.1s',
  };

  return (
    <>
      <div id="home">
        <div className="circulo"></div>
        <div className="linea"></div>
        <div className="inicio">
          <div style={divFoto}>
            <img src={logo} className="logo" style={foto} />
          </div>
          <div style={divFotoFija}>
            <img src={logo} className="logo" style={foto} />
          </div>
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
      </div>
    </>
  )
}
