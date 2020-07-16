import React, {useEffect, useState} from 'react'
import api from '../../services/api'

import './styles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Dash = () => {
    const [opinions, setOpinions] = useState([])

    const company_id = localStorage.getItem('company_id')
    const ativo = ['Promoção ativa', 'Promoção inativa']

    useEffect(() => {
        api.get('opinion', {
            headers: {
                Authorization: company_id,
            }
        }).then(response => {
            setOpinions(response.data)
        })
    }, [company_id])

    return (
        <>
            <Header />
            <div className="dash">
                <h1>Seus cupons</h1>
                <form onSubmit='#'>
                    <div className='radios'>
                        {ativo.map(ativo => {
                            return (
                                <label>
                                    {ativo}
                                    <input className='radio' type="radio" name='ativo' value={ativo} />
                                </label>)
                        })}
                    </div>
                    <div className="fields">
                        <label >Promoção</label>
                        <input type="text" placeholder="Cumpon no valor de 10%" />
                    </div>
                    <h3>Opiniões</h3>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Nome</th>
                                <th scope='col'>E-mail</th>
                                <th scope='col'>Whatsapp</th>
                                <th scope='col'>Cupom</th>
                                <th scope='col'>Promo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {opinions.map(opinion => (
                                <tr key='id'>
                                    <th scope="row">  1 </th>
                                    <td> {opinion.name} </td>
                                    <td> {opinion.email} </td>
                                    <td> {opinion.whatsapp} </td>
                                    <td> {opinion.score}</td>
                                    <td><button type="button"  class="btn btn-edit btn-link text-primary">Editar</button></td>
                                    <td><button type="button" class="btn btn-link text-danger">Excluir</button></td>
                                </tr>
                                ))
                            }                            
                        </tbody>
                    </table>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Dash