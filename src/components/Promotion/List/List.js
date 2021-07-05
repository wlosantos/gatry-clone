import UIModal from 'components/UI/UIModal'
import React, { useState } from 'react'
import PromotionCard from '../card/Cards'

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
      <UIModal isOpen={Boolean(promotionId)} onClickClose={()=> setPromotionId(null)}>
        <h1>Comentários</h1>
      </UIModal>
    </div>
  )
}

export default PromotionList
