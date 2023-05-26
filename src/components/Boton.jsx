import React from 'react';
import '../css/Boton.css'

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    // Operador ternario
    <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} onClick={manejarClic}>
        {texto}
    </button>
  );
}

export default Boton;