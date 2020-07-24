import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'
import api from '../../services/api'

import Header from '../components/Header'
import Footer from '../components/Footer'


const Registro = () => {

  const history = useHistory()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      name, email
    }

    try {
      const response = await api.post('company', data)

      alert(`Seu id de acesso: ${response.data.id}`)
      history.push('/login')
    } catch (err) {
      alert('Erro no cadastro, tente novamente.', err)
    }
  }

  return (
    <>
      <Header />
      <div className="registro">
        <h1>Dados para o registro</h1>
          
          <form onSubmit={handleRegister}>
            <div className='fields'>
              <label>Empresa:</label>
              <input 
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder='Nome da empresa'
              />
            </div>
            <div className='fields'>
              <label>E-mail:</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder='E-mail'
              />
            </div>
            <button className='button' type='submit' >Registrar empresa</button>
          </form>
        </div>
      <Footer />
    </>
  )
}

export default Registro