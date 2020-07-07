import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../../public/logo.png';


const Header = () => {
  return (
    <>
      <div className='header'>
          <div className='container'>
            <Link className='logo' to='/'>
              <img className='logoImg' src={ logoImg } alt="PalpiteBox" />
            </Link>
          </div >
          <div className='navbar' >
            <Link to='/sobre'>
              Sobre
            </Link>
            <Link to='/contato'>
              Contato
            </Link>
            <Link to='/pesquisa'>
              Pesquisa
            </Link>
          </div>
      </div>
    </>
  )
}

export default Header