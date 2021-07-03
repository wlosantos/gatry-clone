import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './form.scss'

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: ''
}

const PromotionForm = () => {
  const [values, setValues] = useState(initialValue)
  const history = useHistory()

  function onChange(event) {
    const {name, value} = event.target

    setValues({...values, [name]: value})
  }

  function onSubmit(event) {
    event.preventDefault()

    axios.post('http://localhost:5000/promotions', values)
      .then(response => {
        history.push('/')
      })
  }

  return (
    <div>
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>

      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="title">Título</label>
          <input type="text" 
            id="title"
            name='title'
            onChange={onChange}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="url">Link</label>
          <input type="text" 
            id="url"
            name='url'
            onChange={onChange}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="imageUrl">Image (URL)</label>
          <input type="text" 
            id="imageUrl"
            name='imageUrl'
            onChange={onChange}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="price">Price</label>
          <input type="number" 
            id="price"
            name='price'
            onChange={onChange}
          />
        </div>
        <div>
          <button type='submit'>Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default PromotionForm
