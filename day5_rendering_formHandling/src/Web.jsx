import React from 'react'
import { useState } from 'react'

const Web = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [pass, setPass] = useState("")
    // console.log(name)


    const [formData, setFormData] = useState({
        user : '',
        email : '',
        password : ""
    })

    let handelChange = (e)=> {
        let { name , value} = e.target  // as e.target is a big value so we extracted name and value and use it later 
             setFormData({...formData, [name]: value })
    }
    return (
        <div className='m-4 flex flex-col gap-5 w-60'>
            <input name='user' onChange={handelChange} className='border-2 rounded p-3' type="text" placeholder='Name' />  
            {/* in this ..fromdata all the data of formdata is copy to the setdata and then we can also update and add new values .  */}
            <input name='email' onChange={handelChange} className='border-2 rounded p-3' type="text" placeholder='Email' />
            <input name='password' onChange={handelChange} className='border-2 rounded p-3' type="text" placeholder='Password' />

            <button onClick={(e)=>console.log(formData)}>Submit </button>
            <div>
                <h1>The name is : {formData.user}</h1>
                <h1>The email is : {formData.email}</h1>
                <h1>The password is : {formData.password}</h1>
            </div>
        </div>
    )
}

export default Web