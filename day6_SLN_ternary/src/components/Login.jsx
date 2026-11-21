import React, { useState } from 'react'

const Login = ({setToggle}) => {

    const [formData, setFormData] = useState({})
    const handelChange = (e) => {
        let {name , value } = e.target ;
        setFormData({...formData , [name]:value})
    }
    return (
        <div className='bg-white p-4 rounded-xl  flex flex-col gap-6'>
            <p>Login form</p>
            <form className='flex flex-col gap-4 m-4' action="">
                <input onChange={handelChange} className='p-2 border border-gray-300 rounded hover:bg-blue-300' type="text" placeholder='Email' />
                <input onChange={handelChange} className='p-2 border border-gray-300 rounded hover:bg-blue-300' type="text" placeholder='Password' />
                <button onChange={handelChange} className='bg-blue-600 text-white rounded p-2 '>Login</button>
            </form>
            <div className='p-4 flex flex-col gap-6 '>
                <p>don't have an account ? <span onClick={()=> setToggle((prev)=> !prev)} className='text-blue-600 cursor-pointer '>Register here .</span> </p>
            </div>
        </div>
    )
}

export default Login