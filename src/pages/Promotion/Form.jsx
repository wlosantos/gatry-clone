import PromotionForm from 'components/Promotion/form/Form'
import UIContainer from 'components/UI/Container'
import React from 'react'
import { useParams } from 'react-router-dom'

const PagesPromotionForm = () => {
  const { id } = useParams()

  return (
    <UIContainer>
      <PromotionForm />
    </UIContainer>
  )
}

export default PagesPromotionForm
