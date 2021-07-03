import PromotionCard from 'components/Promotion/card/Cards'
import React from 'react'
import { promotions } from 'store/promotions'

const PagesPromotionSearch = () => {

  const promotion = promotions
  return (
    <div className='App'>
      <PromotionCard promotion={promotion} />
    </div>
  )
}

export default PagesPromotionSearch
