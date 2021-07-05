import React, { useMemo, useState } from 'react'
import './CommentsTree.scss'

function getTree(list) {
  if(!list) return []

  const roots = []
  const childrenByParentId = {}

  list.forEach( item => {
    if (!item.parentId) {
      roots.push(item)
      return;
    }

    if(!childrenByParentId[item.parentId]) {
      childrenByParentId[item.parentId] = []
    }

    childrenByParentId[item.parentId].push(item)
  })

  function buildNodes(nodes) {
    
    if (!nodes) return null

    return nodes.map( node => ({
      ...node,
      children: buildNodes(childrenByParentId[node.id])
    }))
  }

  return buildNodes(roots)
}

const CommentsTree = ({comments, sendComment}) => {
  const tree = useMemo(() => getTree(comments), [comments])
  const [comment, setComment] = useState('')
  const [activeCommentBox, setActiveCommentBox] = useState(false)

  if(!comments) {
    return <div>Carregando...</div>
  }

  function renderItem (item) {
    return (
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
          {item.children && renderList(item.children)}
        </div>
      </li>
    )
  }
  function renderList (list) {
    return (
      <ul className='promotion-modal-comments-tree'>
      {list.map( item => renderItem(item))}
    </ul>
    )
  }

  return (
    renderList(tree)
  )
}

CommentsTree.defaultProps = {
  sendComment: (comment, parentId) => {}
}

export default CommentsTree
