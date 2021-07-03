import React from 'react'
import PromotionCard from '../card/Cards'

const PromotionList = ({ loading, promotions }) => {
  if (loading) {
    return <div>Carregando...</div>
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
