import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import useApi from 'components/utils/useApi'

import './form.scss'

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: ''
}

const PromotionForm = ({ id }) => {
  const [values, setValues] = useState(id ? null : initialValue)
  const history = useHistory()
  
  const [load] = useApi({
    url: `/promotions/${id}`,
    method: 'get',
    onCompleted: (response) => {
      setValues(response.data)
    }
  })

  const [save, saveInfo] = useApi({
    url: id ? `/promotions/${id}` : '/promotions',
    method: id ? 'put': 'post',
    data: values,
    onCompleted: response => {
      if (!response.error) {
        history.push('/')
      }
    }
  })

  useEffect(() => {
    if(id) {
      load()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  function onChange(event) {
    const {name, value} = event.target

    setValues({...values, [name]: value})
  }

  function onSubmit(event) {
    event.preventDefault()
    save()
  }

  return (
    <div>
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>
      { !values 
      ? ( <div>Carregando...</div>) 
      : (
          <form onSubmit={onSubmit}>
            {saveInfo.loading && <span>Salvando dados...</span>}
            <div className="promotion-form__group">
              <label htmlFor="title">Título</label>
              <input type="text" 
                id="title"
                name='title'
                onChange={onChange}
                value={values.title}
              />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="url">Link</label>
              <input type="text" 
                id="url"
                name='url'
                onChange={onChange}
                value={values.url}
              />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="imageUrl">Image (URL)</label>
              <input type="text" 
                id="imageUrl"
                name='imageUrl'
                onChange={onChange}
                value={values.imageUrl}
              />
            </div>
            <div className="promotion-form__group">
              <label htmlFor="price">Price</label>
              <input type="number" 
                id="price"
                name='price'
                onChange={onChange}
                value={values.price}
              />
            </div>
            <div>
              <button type='submit'>Salvar</button>
            </div>
          </form>
      )}
    </div>
  )
}

export default PromotionForm
