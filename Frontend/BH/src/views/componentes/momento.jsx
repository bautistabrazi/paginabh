import '../css/historia.css';
import React from "react";
import { useMemo } from "react";

const imagenes = import.meta.glob("../../assets/*", { eager: true, import: "default" });

const Momento =  React.memo(function Momento({texto, foto, lado_foto, visible, scroll }) {

    if (!visible) {
        return null;
    }

    const imgPath = useMemo(() => {
        return Object.values(imagenes).find((path) => path.includes(foto));
    }, [foto]);

    return (
            <div className='inner-grid div-foto-historia'>
                {lado_foto === "left" ? 
                <>
                    <img src={imgPath} className={`historia-foto ${lado_foto}`}/>
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
});

export default Momento;