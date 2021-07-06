import React, { useState } from 'react'
import PromotionCard from '../card/Cards'
import PromotionModal from '../modal/Modal'

const PromotionList = ({ loading, error, promotions }) => {

  const [promotionId, setPromotionId] = useState(null)
  
  if (error) {
    return <div>Algo deu errado!!!</div>
  }

  if (loading || !promotions) {
    return <div>Carregando...</div>
  }
  
  if (promotions.length === 0) {
    return <div>Nenhum Resultado Encontrado!</div>
  }

  return (
    <div className="promotion-list">
      {promotions.map( (promotion) => (
        <PromotionCard promotion={promotion} key={promotion.id} onClickComments={() => setPromotionId(promotion.id)} />
      ))}
      {promotionId && (
        <PromotionModal 
          promotionId={promotionId} 
          onClickClose={() => setPromotionId(null)} />
      )}
    </div>
  )
}

export default PromotionList
