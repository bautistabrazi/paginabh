import '../css/historia.css';
import React, { useMemo } from 'react';
const imagenes = import.meta.glob("../../assets/*", { eager: true, import: "default" });
import {  useSelector } from 'react-redux';

export default function Momento ({texto, foto, lado_foto, visible, index}) {

    const imgPath = imagenes[`../../assets/${foto}`];

    const scrollY = useSelector((state) => state.scrolls.scrollY ?? 0);
    const distance = useSelector((state) => state.scrolls.distance ?? window.innerHeight);

    const {  opacidad } = useMemo(() => {
        const progress = Math.min(scrollY / ((distance * 0.75) * (index + 1 )), 1);
    
        return {
          opacidad: progress < 1 ? 0 : 1,
        };
      }, [scrollY, distance, index]);
    
    const divMomentoStyle = useMemo(() => ({ opacity: opacidad,
        transition: '0.2s',
    }), [opacidad]);

    const historiaFotoStyle = ({
        width: `40vw`,
        height: `30vw`,
        objectFit: `cover`,
      });

    if (!visible) {
        return null;
    }

    return (
            <div id={"Momento"} className='inner-grid div-foto-historia' style={divMomentoStyle}>
                {lado_foto === "left" ? 
                <>
                    <img src={imgPath} style={historiaFotoStyle}/>
                    <div className='grid center historia-texto-right'><p>{texto}</p></div>
                </>
                :
                <>
                    <div className='grid center historia-texto-left'><p>{texto}</p></div>
                    <img src={imgPath} className={`historia-foto ${lado_foto}`}/>
                </>
                }
            </div>
    );
}
