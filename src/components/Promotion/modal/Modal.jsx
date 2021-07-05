import UIModal from 'components/UI/UIModal'
import useApi from 'components/utils/useApi'
import React, { useEffect, useState } from 'react'
import CommentsTree from './CommentsTree'

import './Modal.scss'

const PromotionModal = ({promotionId, onClickClose}) => {
  const [comment, setComment] = useState()
  const [load, loadInfo] = useApi({
    url: '/comments',
    params: {
      promotionId,
      _expand: 'user'
    }
  })

  const [sendComment, sendCommentInfo] = useApi({
    url: '/comments',
    method: 'post'
  })

  useEffect(()=>{
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (evt) => {
    evt.preventDefault()

    try {
      await sendComment({
        data: {
          userId: 1,
          promotionId,
          comment
        }
      })
      setComment('')
      load()
    } catch (e) {

    }

  }

  return (
    <div>
      <UIModal isOpen onClickClose={onClickClose}>
        <form className='promotion-modal' onSubmit={onSubmit}>
          <textarea 
            name="" placeholder="commentar..."
            value={comment}
            onChange={e => setComment(e.target.value)} />
          <button type="submit" disabled={sendCommentInfo.loading}>
            {sendCommentInfo.loading ? 'Envinado...' : 'Enviar'}
          </button>
        </form>
        <CommentsTree comments={loadInfo.data} />
      </UIModal>
    </div>
  )
}

export default PromotionModal
