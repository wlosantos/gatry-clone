import React from 'react'
import './CommentsTree.scss'

const CommentsTree = ({comments}) => {
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
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CommentsTree
