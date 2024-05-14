import React from 'react'

function Person({name,age}) {
  return (
    <div className=' text-white font-semibold'>
      <p>Name : {name}</p> 
      <p>Age : {age}</p>
    </div>
  )
}

export default Person
