import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Pesquisa = () => {
  function handleRegister(e) {


    e.preventDefault()
  }

  return (
    <>
      <Header />
      <div className="pesquisa">
        <h1>Criticas e sugestões</h1>
        <p>
          O restaurante X sempre busca por atender melhor seus clientes. 
          <br/>
          Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
        <form onSubmit={handleRegister}>
          <div className='fields'>
            <label>Seu nome:</label>
            <input type="text"/>
          </div>
          <div className='fields'>
            <label>E-mail:</label>
            <input type="text"/>
          </div>
          <div className='fields'>
            <label>Whatsapp:</label>
            <input type="text"/>
          </div>
          <div className='fields'>
            <label>Sua crítica ou sugestão:</label>
            <input type="text"/>
          </div>
          <button className='button' type='submit' >Enviar sugestão</button>
        </form>
        
      </div>
      <Footer />
    </>
  )
}


export default Pesquisa