import React from 'react'


import Header from '../components/Header'
import Footer from '../components/Footer'

const Dash = () => {
    return (
        <>
            <Header />
            <div className="dash">
                <h1>Seus cupons</h1>
                <form onSubmit='#'>
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