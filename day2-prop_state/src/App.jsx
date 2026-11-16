import React, { useState } from 'react'

const App = () => {

  let [count ,setCount] = useState(0)

  let [felx , setFlex] = useState(false)
  console.log(count)
  console.log(felx)
  console.log('hey sir' )
  return (
    <div>

      <h1>the count is - {count}</h1>
      <button onClick={()=>{
          setCount(count +  1)
      }}>increment</button>
      <button onClick={()=>{
        setFlex(true)
      }}>Click to change boolean </button>
    </div>
  )
}

export default App


