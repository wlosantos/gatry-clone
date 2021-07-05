import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

const PromotionCard = ({promotion, onClickComments}) => (
  <div className='promotion-card'>
    <img src={promotion.imageUrl} alt='' className='promotion-card__image' />
    <div className='promotion-card__info'>
      <h1 className='promotion-card__title'>{promotion.title}</h1>
      <span className='promotion-card__price'>R$ {promotion.price}</span>
      <footer className='promotion-card__footer'>
        {promotion.comments.length > 0 
        ? (<div className='promotion-card__comment'>"{promotion.comments[0].comment}"</div>)
        : (<div className='promotion-card__comment'></div>)
        }
        <div className='footer_rigth'>
          <button className='promotion-card__comments-count' onClick={onClickComments}>
            {promotion.comments.length} Comentário(s)
          </button>
          <a href={promotion.url} target="_blank" rel="noopener noreferrer" className='promotion-card__link'>Ir Para o Site</a>
          <Link to={`/edit/${promotion.id}`} className='promotion-card__edit-button'> 
            Editar
          </Link>
        </div>
      </footer>
    </div>
  </div>
)

export default PromotionCard
