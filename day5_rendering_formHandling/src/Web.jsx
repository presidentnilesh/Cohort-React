import React from 'react'
import { useState } from 'react'

const Web = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [pass, setPass] = useState("")
    // console.log(name)


    const [formData, setFormData] = useState({
        name : '',
        email : '',
        password : ""
    })

    return (
        <div className='m-4 flex flex-col gap-5 w-60'>
            <input onChange={(e) => {
                setName(e.target.value)
            }
            } className='border-2 rounded p-3' type="text" placeholder='Name' />
            <input onChange={(e) => {
                setEmail(e.target.value)
            }
            } className='border-2 rounded p-3' type="text" placeholder='Email' />
            <input onChange={(e) => {
                setPass(e.target.value)
            }
            } className='border-2 rounded p-3' type="text" placeholder='Password' />
            {/* <button className='bg-red-300 p-3 rounded-xl'>Submit</button> */}
            {/* <h1>Name : {name}</h1>
            <h1>Email : {email}</h1>
            <h1>PAssword : {pass}</h1> */}
        </div>
    )
}

export default Web