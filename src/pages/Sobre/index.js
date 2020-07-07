import React from 'react'
import { Link } from 'react-router-dom'

// import './styles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Sobre = () => {
  return (
    <>
      <Header />
      <h1>Sobre</h1>
      <div>
        <Link to='/' >
          Home
        </Link>
      </div>
      <Footer />
    </>
  )
}











export default Sobre