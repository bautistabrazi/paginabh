import '../css/home.css';
import logo from '../../assets/logo2.png';
import fotoRopa from '../../assets/foto-bhropa.jpg';
import fotoBarber from '../../assets/foto-bhbarber.jpg';
import React, { useEffect, useMemo, useCallback } from 'react';
import Historia from './historia';
import { useDispatch, useSelector } from 'react-redux';
import { setScroll, setDistance } from '../../features/scroll/scrollSlice';

const TAMANIO_INICIO = 40;
const TAMANIO_FINAL = 20;

export default function Home({scrollContainerRef}) {

  // SETEO
  const dispatch = useDispatch();
  const scrollY = useSelector((state) => state.scrolls.scrollY ?? 0);
  const distance = useSelector((state) => state.scrolls.distance ?? window.innerHeight);

  const updateDistance = useCallback(() => {
    dispatch(setDistance(window.innerHeight));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('resize', updateDistance);
    dispatch(setDistance(window.innerHeight));
    return () => {
      window.removeEventListener('resize', updateDistance);
    };
  }, [dispatch, updateDistance]);

  useEffect(() => {
    const container = scrollContainerRef?.current || window;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = container === window ? window.scrollY : container.scrollTop;
          dispatch(setScroll(y)); 
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [scrollContainerRef, dispatch]);

  //ANIMACIONES
  const { scale, opacidad, opacidadFotoFija } = useMemo(() => {
    const progress = Math.min(scrollY / (distance * 0.25), 1);
    const offsetScroll = scrollY - (distance * 0.25);
    const progressScale = offsetScroll > 0 ? Math.min(offsetScroll / (distance * 0.25) / 2, 1) : 0;

    const tamaño = TAMANIO_INICIO - (TAMANIO_INICIO - TAMANIO_FINAL) * progressScale;
    const scaleValue = tamaño / TAMANIO_INICIO;

    return {
      scale: scaleValue,
      opacidad: progress < 1 ? 1 : 0,
      opacidadFotoFija: progress < 1 ? 0 : 1,
    };
  }, [scrollY, distance]);

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
    overflow: 'hidden',
    opacity: opacidadFotoFija,
    zIndex: 2000,
    transition: 'transform 0.1s ease ',
  }), [scale, opacidadFotoFija]);

  return (
    <>
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
              <img src={fotoBarber} alt="barber" className='foto'/>
            </div>
          </div>
        </div>
      </div>
      <Historia></Historia>
    </>
  );
}
