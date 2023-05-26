import kirbyLogo from './img/kirby-logo.png'
import './App.css'
import Boton from './components/Boton'
import Contador from './components/Contador'
import { useState } from 'react'

function App() {

  // Agregarle el estado
  const [numClics, setNumClics] = useState(0); // Valor inicial de números de clics


  // Función para el botón clic
  const manejarClic = () => {
    // Sumarle uno y asignar ese nuevo valor al estado del componente
    setNumClics(numClics+1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <>
      <article className='App'>

        <picture className='kirby-logo-contenedor'>
          <img src={kirbyLogo} alt='Logo Kirby SuperStart' className='kirby-logo' />
        </picture>

        <section  className="contenedor-principal">

          {/* Contador */}
          <Contador numClics={numClics}/>

        {/* Botones */}
          <Boton 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}
          />

          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}
          />
          
        </section>
      </article>

        
    </>
    )
}

export default App
