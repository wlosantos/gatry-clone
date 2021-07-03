import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PromotionCard from '../card/Cards'

import './search.scss'

const PromotionSearch = () => {

  const [promotions, setPromotions] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/promotions?_embed=comments')
      .then( response => {
        setPromotions(response.data)
      } )
  },[])

  return (
    <div className='promotion-search'>
      <header className='promotion-search__header'>
        <h1>Promo Show</h1>
        <Link to='/create'>Nova Promoção</Link>
      </header>
      <section className='promotion-search__input'>
        <input 
          type='search' 
          placeholder='Buscar'
        />
      </section>
      {promotions.map( (promotion) => (
        <PromotionCard promotion={promotion} key={promotion.id} />
      ))}
    </div>
  )
}

export default PromotionSearch
