import React from 'react'

import './styles.css'

import imageSemana from '../../../public/logo_semana_fsm.png'
import imageDevpleno from '../../../public/logo_devpleno.png'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <p>
          Projeto desenvolvido por:
            Douglas Mendes / 
            <a className='p-2 hover:underline' href="https://github.com/capudougmor"> Linkedin /</a>
            <a className='p-2 hover:underline' href="www.linkedin.com/in/douglasmendesassuncao">Github</a>
        </p>
        <div className='mx-auto mt-2'>
          <img  src={imageSemana} alt="Semana devpleno"/>
          <img  src={imageDevpleno}alt="Logo devpleno"/>
        </div>
      </div>
    </>
  )
}

export default Footer