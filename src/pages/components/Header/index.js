import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../../public/logo.png';


const Header = () => {
  const companyName = localStorage.getItem('companyName')

  return (
    <>
      <div className='header'>
        <div className='container'>
          {companyName && <span>Bem vindo, {companyName} </span> }
          <Link className='logo' to='/'>
            <img className='logoImg' src={ logoImg } alt="PalpiteBox" />
          </Link>
        </div >
        <div className='navbar' >
          <div>
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
          <div>
            {companyName && 
              <Link to='/dash'>
                Administrar
              </Link>
            }
            <Link to='/login'>
              Login
            </Link>
            <Link to='/contato'>
              Logout
            </Link>
            <Link to='/registro'>
              Registro
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header