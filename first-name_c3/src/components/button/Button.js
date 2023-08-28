import React from 'react'

const Button = ({label}) => {
    const style = {
      backgroundColor: 'steelblue',
      color: 'white',
      border: 'none',
      padding: '5px 9px',
      borderRadius: '5px',
      cursor: 'pointer',
    }
  return (
    <div>
      <button style={style}>{label}</button>
    </div>
  )
}

export default Button
