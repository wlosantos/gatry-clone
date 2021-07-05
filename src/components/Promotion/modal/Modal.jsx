import UIModal from 'components/UI/UIModal'
import useApi from 'components/utils/useApi'
import React, { useEffect } from 'react'
import CommentsTree from './CommentsTree'

const PromotionModal = ({promotionId, onClickClose}) => {
  const [load, loadInfo] = useApi({
    url: '/comments',
    params: {
      promotionId,
      _expand: 'user'
    }
  })

  useEffect(()=>{
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(loadInfo)

  return (
    <div>
      <UIModal isOpen onClickClose={onClickClose}>
        <CommentsTree comments={loadInfo.data} />
      </UIModal>
    </div>
  )
}

export default PromotionModal
