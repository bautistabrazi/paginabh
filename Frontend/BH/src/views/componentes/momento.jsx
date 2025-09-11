import '../css/momento.css';
import React, { useMemo } from 'react';
const imagenes = import.meta.glob("../../assets/*", { eager: true, import: "default" });
import {  useSelector } from 'react-redux';

export default function Momento ({texto, foto, lado_foto, visible, index}) {

    const imgPath = imagenes[`../../assets/${foto}`];

    const scrollY = useSelector((state) => state.scrolls.scrollY ?? 0);
    const distance = useSelector((state) => state.scrolls.distance ?? window.innerHeight);
    
    const {opacidad, desp} = useMemo(() => {
        const progress = Math.min(scrollY / (((distance * 0.75) * (index + 1 )) * 0.85), 1);
        const offsetScroll = scrollY - ((distance * 0.75) * (index + 1 )) - distance * -0.25;
        const progressDesp = offsetScroll > 0 ? Math.min(offsetScroll / (distance * 0.25), 1) : 0;
        const desplazamiento = 110 * (1 - progressDesp)

        return {
            opacidad: progress < 1 ? 0.3 : 1,
            desp: lado_foto == "right" ? desplazamiento : desplazamiento * -1,
        };
    }, [scrollY, distance, index]);

    const divMomentoStyle = useMemo(() => ({ 
        opacity: opacidad,
        transition: '0.3s',
    }), [opacidad]);

    const historiaFotoStyle = useMemo(() => ({         
        width: `40vw`,
        height: `30vw`,
        objectFit: `cover`,
        transform: `translateX(${desp}vh)`
    }), [scrollY, desp]);












    if (!visible) {
        return null;
    }

    return (
            <div id={"Momento"} className='inner-grid div-foto-historia' style={divMomentoStyle}>
                {lado_foto === "left" ? 
                <>
                    <div className='grid'>
                        <img src={imgPath} className={`historia-foto center`} style={historiaFotoStyle}/>
                    </div>
                    <div className='grid historia-texto-right'><p>{texto}</p></div>
                </>
                :
                <>
                    <div className='grid historia-texto-left'><p>{texto}</p></div>
                    <div className='grid'>
                        <img src={imgPath} className={`historia-foto center`} style={historiaFotoStyle}/>
                    </div>
                </>
                }
            </div>
    );
}
