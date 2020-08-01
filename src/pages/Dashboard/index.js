import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import React, { useEffect, useState } from 'react'

import './styles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Dash = () => {
    const [opinions, setOpinions] = useState([])

    const companyName = localStorage.getItem('companyName')
    const company_id = localStorage.getItem('company_id')
    const [msgCkecked, setMsgCkecked] = useState()
    const [msgCupon, setMsgCupon] = useState()

    const history = useHistory()

    useEffect(() => {
        api.get('profile', {
            headers: {
                authorization: companyName,
            }
        }).then(response => {
            setOpinions(response.data)
        })
    }, [companyName])

    useEffect(() => {
        api.get(`showCupon/${companyName}`).then(response => {
            setMsgCupon(response.data.msgCupon)
            setMsgCkecked(response.data.msgCkecked)
  console.log(response.data)

        })
    }, [companyName])
    
    async function handleUpdate(e) {
        e.preventDefault()        
        
        const data = {            
            msgCkecked,
            msgCupon
        }

        try {
            await api.put('profile', data, {
                headers: {
                    authorization: company_id,
                }
            })

            alert('Enviado com sucesso!')
            history.push('/')
        } catch(err) {
            alert('Erro ao fazer registro!')
        }
    }

    return (
        <>
            <Header />
            <div className="dash">
                <h1>Seus Cupons</h1>
                <form onSubmit={handleUpdate}>
                    <div className='radios'>
                        <label>
                            <input
                                name="isGoing"
                                className='radio'
                                type="checkbox"
                                checked={msgCkecked}
                                onChange={e => setMsgCkecked(e.target.checked)} />
                                    Promoção ativa?
                        </label>
                    </div>
                    <div className="fields">
                        <label id="title" >Promoção: </label>
                        <textarea 
                            value={msgCupon}
                            onChange={e => setMsgCupon(e.target.value)}
                            type="textarea" />
                    </div>
                    <button className='button' type='submit' >Registrar Promoção</button>
                </form>

                <h3>Opniões</h3>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Nome</th>
                            <th scope='col'>E-mail</th>
                            <th scope='col'>Whatsapp</th>
                            <th scope='col'>Nota</th>
                            <th scope='col'>Cupon</th>
                            <th scope='col'>Sugestão</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {opinions.map(opinion => (
                            <tr key={opinion.id}>
                                <td> {opinion.name} </td>
                                <td> {opinion.email} </td>
                                <td> {opinion.whatsapp} </td>
                                <td> {opinion.score}</td>
                                <td> {opinion.cuponKey}</td>
                                <td> {opinion.suggestion} </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}

export default Dash