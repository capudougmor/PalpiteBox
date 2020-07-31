import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'

import './styles.css'
import api from '../../services/api'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Pesquisa = () => {

  const [companyName, setCompanyName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [suggestion, setSuggestion] = useState('')
  const [score, setScore] = useState('')

  const notas = [1, 2, 3, 4, 5]
  // state para a mensagem de sucesso
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState()

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      companyName, name, email, whatsapp, suggestion, score
    }

    try {
      const response = await api.post('opinion', data)

      alert('Enviado com sucesso!')
      setSucess(true)
      console.log(response.data.cuponKey)
      setRetorno(response.data.cuponKey)
    } catch (err) {
      alert('Erro ao enviar dados!')
    }
  }
  return (
    <>
      <Header />
      <div className="pesquisa">
        <h1>Criticas e sugestões</h1>
        <p>
          O restaurante X sempre busca por atender melhor seus clientes.
        <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      { !sucess &&
        <form onSubmit={handleRegister}>
          <div className='fields'>
            <label>Seu nome:</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder='Nome completo'
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
          <div className='fields'>
            <label>Whatsapp:</label>
            <input
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              type="text"
              placeholder='Whatsapp' />
          </div>
          <div className='fields'>
            <label>Empresa:</label>
            <input
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              type="text"
              placeholder='Empresa'
            />
          </div>
          <div className='fields'>
            <label>Sua crítica ou sugestão:</label>
            <input
              value={suggestion}
              onChange={e => setSuggestion(e.target.value)}
              type="text"
              placeholder='Texto' />
          </div>
          <div className='fields'>
            <label>Nota:</label>
          </div>
          <div className="radios">
            {notas.map(nota => {
              return (
                <label key={nota} >{nota}<br />
                  <input
                    className='radio'
                    name='nota'
                    value={nota}
                    onChange={e => setScore(e.target.value)}
                    type="radio"
                  /></label>)
            })}
          </div>
          <button className='button' type='submit' >Enviar sugestão</button>
        </form>
      }
      {sucess && <div className='promotion'>
          <p className="cuponKey">Obrigado por contribuir com sua sugetão ou critica.</p>
          {
            retorno && <p className="cuponKey">Seu cupom: 
            <br/><br/> {retorno}</p>
          }
          <p>Tire um print ou uma foto desta página e leve ao estabelecimento.</p>
        </div>
      }
      </div>
      <Footer />
    </>
  )
  
}

export default Pesquisa