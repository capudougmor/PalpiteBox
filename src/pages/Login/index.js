import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'
import api from '../../services/api'

import Header from '../components/Header'
import Footer from '../components/Footer'


const Login = () => {

  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('session', {email, password})

      localStorage.setItem('companyName', response.data.name)
      localStorage.setItem('company_id', response.data.id)

      history.push('/dash')
    } catch (err) {
      alert('Erro no login, tente novamente.', err)
    }
  }

  return (
    <>
      <Header />
      <div className="login">
        <h1>Bem vindo faça seu login</h1>
        <form onSubmit={handleLogin}>
          <div className='fields'>
            <label>E-mail:</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              placeholder='E-mail'
            />
          </div>
          <div className='fields'>
            <label>Senha:</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="text"
              placeholder='Senha'
            />
          </div>
          <button className='button' type='submit' >Entrar</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login