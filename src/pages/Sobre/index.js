import React from 'react';

// import './styles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Sobre = () => {
  return (
    <>
      <Header />
      <div className='sobre'>
        <h1>Sobre este projeto</h1>
        <p>
          Este projeto foi desenvolvido na semana Fullstack Master. 
          Com aulas ministradas pelo professor Túlio do canal DevPleno.
          Tem como intuito principal os primeiros passos com React. Podendo posteriormente 
          ser implementado novas ferramentas para um estudo mais detalhaso.
        </p> 

      </div>
      <Footer />
    </>
  )
}


export default Sobre