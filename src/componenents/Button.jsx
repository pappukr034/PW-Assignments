import React from 'react'

function Button({text,onClick}) {
  return (
    <div>
      <button className=' text-white boreder-1 bg-pink-400 p-3 w-24 rounded-lg' onClick={onClick}> {text} </button>
    </div>
  )
}

export default Button
