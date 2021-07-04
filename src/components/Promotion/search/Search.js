import useApi from 'components/utils/useApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PromotionList from '../List/List'

import './search.scss'

const PromotionSearch = () => {

  const [search, setSearch] = useState('')
  const [load, loadInfo] = useApi({
    url: 'http://localhost:5000/promotions',
    method: 'get',
    params: {
      _embed: 'comments',
      _order: 'desc',
      _sort: 'id',
      title_like: search || undefined,
    }
  })

  useEffect(() => {
    load()
  },[search])

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
          value={search}
          onChange={ e => setSearch(e.target.value)}
        />
      </section>
      <PromotionList 
        promotions={loadInfo.data} 
        loading={loadInfo.loading}
        error={loadInfo.error} />
    </div>
  )
}

export default PromotionSearch
