import React from 'react'
import PromotionCard from '../card/Cards'

const PromotionList = ({ loading, promotions }) => {
  if (loading || !promotions) {
    return <div>Carregando...</div>
  }
  
  if (promotions.length === 0) {
    return <div>Nenhum Resultado Encontrado!</div>
  }

  return (
    <div className="promotion-list">
      {promotions.map( (promotion) => (
      <PromotionCard promotion={promotion} key={promotion.id} />
    ))}
    </div>
  )
}

export default PromotionList
