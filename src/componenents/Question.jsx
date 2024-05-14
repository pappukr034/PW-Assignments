import React from 'react'
import Person from './Person'
function Question({quesNo,children}) {
  return (
    <div>
        <h1 className=' text-white flex justify-center items-center text-4xl'>Question {quesNo}</h1>
        <hr className=' mt-1 w-44 relative ml-[44%]' />
        <div className='flex justify-center items-center mt-5 border-2 p-2'>
           {children}
        </div>
    </div>
  )
}

export default Question
