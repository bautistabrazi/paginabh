import '../css/historia.css';
import React, { useEffect, useState, useMemo } from 'react';
const imagenes = import.meta.glob("../../assets/*", { eager: true, import: "default" });

export default function Momento ({texto, foto, lado_foto, visible, scrollY, shrinkDistance }) {

    const imgPath = imagenes[`../../assets/${foto}`];
        
    const {  opacidad } = useMemo(() => {
        const progress = Math.min(scrollY / shrinkDistance, 1);
    
        return {
          opacidad: progress < 1 ? 0 : 1,
        };
      }, [scrollY, shrinkDistance]);
    
    const divMomentoStyle = useMemo(() => ({ opacity: opacidad,
        transition: '1s',
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
