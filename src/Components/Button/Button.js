import React from 'react'
import './Button.css'

const Button = ({ onClick, children, type }) => {
  return (
    <div>
      <button type={type} className='button' onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button