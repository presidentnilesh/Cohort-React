import React from 'react'
import { useState } from 'react'


const App = () => {
  const [user, setUser] = useState("Aman")
  console.log(user)

  const handelClick = ()=>{
    setUser("baman")
  }
  return (

    <div>
      <h1>hello sir</h1>
      <h2>NAme of the user is : {user}</h2>
      <button onClick={handelClick}>Change the name </button>
    </div>
  )

}

export default App