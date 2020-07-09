import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useSWR from 'swr'

import './styles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

// const fetcher = (...args) => fetch(...args).then(res => res.json())

const Home = () => {
  const { data, error } = useSWR('http://localhost:3333/getCoupons', 
    (url) => axios(url).then(r => r.data))

  return (
    <>
      <Header />
      <div className='home'>
        <p>
          O restaurante X sempre busca por atender melhor seus clientes. Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
        <div className='button'>
          <Link to='/pesquisa'>
            De a sua opinião ou sugestão
          </Link>
        </div>
        <p>
          Ao dar sua opinião e/ou sugestão, ganhe 10% na sua próxima compra.
        </p>
        {!data && <p> Carregando... </p> }
        {!error && data && data.showCoupon &&
          <p>
            {data.message}
          </p>
        }
      </div>
      <Footer />
    </>
  )
}

export default Home