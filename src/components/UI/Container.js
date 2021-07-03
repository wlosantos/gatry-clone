import React from 'react'
import './container.scss'

const UIContainer = ({children}) => {
  return (
    <div className="ui-container">
      { children }
    </div>
  )
}

export default UIContainer
