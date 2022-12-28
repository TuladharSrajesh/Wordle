import React from 'react'

export default function Replay() {

const handleClick = () => {
    window.location.reload()
}

  return (
    
    <button onClick={handleClick}>Restart</button>
  )
}
