import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'

import logoImg from '../../../public/logo.png';


const Header = () => {
  const companyName = localStorage.getItem('companyName')
  const history = useHistory()


  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <>
      <div className='header'>
        <div className='container'>
          {companyName && companyName !== "undefined" && <span>Bem vindo, {companyName} </span> }
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
            {companyName && companyName !== "undefined" &&
              <Link to='/dash'>
                Promoções
              </Link>
            }
            <Link to='/login'>
              Login
            </Link>
            
            {companyName && 
              <button onClick={handleLogout}>Logout</button>
            }
            
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