import React from 'react'
import { useState } from 'react'


const App = () => {
  console.log("counter is rendering ")
  let [res, setRes] = useState(0)
  return (
    <div className='p-2.5 gap-1.5' >
      <h1 className='' >the count is - {res}</h1>
      <button className='bg-red-300 text-blue-400 p-3 border-2' onClick={()=>{
        // setRes(res+1)
        // setRes(res+1) // learn concept state batching and functional updates
        // setRes(res+1) 
        setRes((prev)=> prev+1 )
        setRes((prev)=> prev+1 )
        setRes((prev)=> prev+1 )
      }}>Increase by 1 </button>
      <button className='bg-red-300 text-blue-400 p-3 border-2' onClick={()=>{
        setRes(res+4)
      }}>Increase by 4 </button>
    </div>
  )
}

export default App