import '../css/home.css'
import logo from '../../assets/logo2.png'
import pezzella from '../../assets/pezzella.webp'
import lomonaco from '../../assets/lomonaco.webp'
import React, { useEffect, useState } from 'react'

export default function Home({ scrollContainerRef }) {
  const [scrollY, setScrollY] = useState(0);

  // Ajustá este valor para cuánto scroll tarda en achicarse completamente
  const SHRINK_DISTANCE = 8;

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

  // Interpolá tamaño y posición
  const initialSize = 40; // vh
  const finalSize = 25;    // vh
  const size = initialSize - (initialSize - finalSize) * progress;
  const scale = size / initialSize;

  // Interpolá la posición Y (de 25vh a 0)
  const initialY = 25; // vh
  const translateY = (1 - progress) * initialY;

  // Usá style en vez de clases para animación suave
  const fotoStyle = {
    position: 'sticky',
    zIndex: 2000,
    width: `${size}vh`,
    height: `${size}vh`,
    transform: `translateX(calc(50vw - ${size / 2}vh)) translateY(${translateY}vh) scale(${scale})`,
    transition: 'width 0.1s, height 0.1s, transform 0.1s',
    borderRadius: '50%',
    backgroundColor: 'var(--formulario)',
    boxShadow: 'var(--shadow-elevation-24-box)',
    overflow: 'hidden',
  };

  const imgStyle = {
    width: `${size}vh`,
    height: `${size}vh`,
    borderRadius: '50%',
    transition: 'width 0.1s, height 0.1s',
  };

  return (
    <>
      <div id="home">
        <div className="circulo"></div>
        <div className="linea"></div>
        <div className="inicio">
          <div className="foto sticky-foto" style={fotoStyle}>
            <img src={logo} className="logo" style={imgStyle} />
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
