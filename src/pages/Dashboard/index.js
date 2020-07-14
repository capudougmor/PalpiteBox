import React from 'react'


import Header from '../components/Header'
import Footer from '../components/Footer'

const Dash = () => {

    const ativo = ['Promoção ativa', 'Promoção inativa']
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
                                    <input className='radio' type="radio" name='ativo'value={ativo} />
                                </label>)
                        })}
                    </div>
                    <div className="fields">
                        <label >Promoção</label>
                        <input type="text" placeholder="Cumpon no valor de 10%"/>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Dash