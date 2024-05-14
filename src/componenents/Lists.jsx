import React from 'react'

function Lists({lists}) {
  return (
    <div>
         <ul className=' text-white'>
             {
                lists.map((item,index)=> <li key={index}> {index+1} {item} </li>)
             }
         </ul>
    </div>
  )
}

export default Lists
