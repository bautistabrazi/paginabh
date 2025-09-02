import '../css/home.css';
import logo from '../../assets/logo2.png';
import lomonaco from '../../assets/lomonaco.webp';
import fotoRopa from '../../assets/foto-bhropa.jpg';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Historia from './historia';

const TAMANIO_INICIO = 40;
const TAMANIO_FINAL = 20;

export default function Home({ scrollContainerRef }) {
  const [scrollY, setScrollY] = useState(0);
  const [shrinkDistance, setShrinkDistance] = useState(() => window.innerHeight * 0.25);

  const updateShrinkDistance = useCallback(() => {
    setShrinkDistance(window.innerHeight * 0.25);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateShrinkDistance);
    return () => window.removeEventListener('resize', updateShrinkDistance);
  }, [updateShrinkDistance]);

  useEffect(() => {
    const container = scrollContainerRef?.current || window;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = container === window ? window.scrollY : container.scrollTop;
          setScrollY(y);
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [scrollContainerRef]);

  const { scale, opacidad, opacidadFotoFija } = useMemo(() => {
    const progress = Math.min(scrollY / shrinkDistance, 1);
    const offsetScroll = scrollY - shrinkDistance;
    const progressScale = offsetScroll > 0 ? Math.min(offsetScroll / shrinkDistance / 2, 1) : 0;

    const tamaño = TAMANIO_INICIO - (TAMANIO_INICIO - TAMANIO_FINAL) * progressScale;
    const scaleValue = tamaño / TAMANIO_INICIO;

    return {
      scale: scaleValue,
      opacidad: progress < 1 ? 1 : 0,
      opacidadFotoFija: progress < 1 ? 0 : 1,
    };
  }, [scrollY, shrinkDistance]);

  const divFotoStyle = useMemo(() => ({ opacity: opacidad
   }), [opacidad]);
  
  const divFotoFijaStyle = useMemo(() => ({
    position: 'fixed',
    top: 0,
    left: '50%',
    transformOrigin: 'top center',
    transform: `translateX(-50%) scale(${scale})`,
    width: `${TAMANIO_INICIO}vh`,
    height: `${TAMANIO_INICIO}vh`,
    borderRadius: '50%',
    backgroundColor: 'var(--formulario)',
    boxShadow: 'var(--shadow-elevation-24-box)',
    overflow: 'hidden',
    opacity: opacidadFotoFija,
    zIndex: 2000,
    transition: 'transform 0.1s ease ',
  }), [scale, opacidadFotoFija]);

  return (
    <div id="home">
      <div className="circulo"></div>
      <div className="linea"></div>
      <div style={divFotoFijaStyle}>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="inicio">
        <div style={divFotoStyle} className="div-foto">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="imagenes">
          <div className="linea-cover"></div>
          <div className="imagen-ropa imagen">
            <div className="velo-ropa velo"></div>
            <img src={fotoRopa} alt="ropa" className='foto'/>
          </div>
          <div className="imagen-barber imagen">
            <div className="velo-barber velo"></div>
            <img src={lomonaco} alt="barber" />
          </div>
        </div>
      </div>
      <Historia></Historia>
    </div>
  );
}
