import React, { useState } from 'react'
import './CommentsTree.scss'

const CommentsTree = ({comments, sendComment}) => {
  const [comment, setComment] = useState('')
  const [activeCommentBox, setActiveCommentBox] = useState(false)

  if(!comments) {
    return <div>Carregando...</div>
  }

  return (
    <ul className='promotion-modal-comments-tree'>
      {comments.map( item => (
        <li key={item.id}>
          <img src={item.user.avatarUrl} alt={`foto de ${item.user.name}`} className='avatar' />
          <div className='info'>
            <span>{item.user.name}</span>
            <p>{item.comment}</p>
            <button 
              type='button' 
              className='answer-button'
              onClick={() => {
                setComment('')
                setActiveCommentBox(activeCommentBox=== item.id ? null : item.id)}
                }>
                Responder
              </button>
            {activeCommentBox === item.id && (
              <div className="comment-box">
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                <button 
                  type='button' 
                  className='send-button'
                  onClick={() => {
                    sendComment(comment, item.id)
                    setComment('')
                    setActiveCommentBox(null)
                  }}
                >
                  Enviar
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

CommentsTree.defaultProps = {
  sendComment: (comment, parentId) => {}
}

export default CommentsTree
