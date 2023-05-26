import React from 'react'
import '../css/Contador.css'

function Contador({numClics}){
  return (
    <article className='contador'>
        {numClics}
    </article>
  )
}

export default Contador;