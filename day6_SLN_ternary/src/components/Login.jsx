import React from 'react'

const Login = () => {
    return (
        <div className='bg-white p-4 rounded-xl w-80 flex flex-col gap-6'>
            <p>Login form</p>
            <form className='flex flex-col gap-4 m-4' action="">
                <input className='p-2 border border-gray-300 rounded' type="text" placeholder='Email' />
                <input className='p-2 border border-gray-300 rounded' type="text" placeholder='Password' />
                <button className='  border border-b-gray-600'>Login</button>
            </form>
            <div className='p-4 flex flex-col gap-6 '>
                <p>don't have an account ? </p>
               <div className="reg gap-4 flex">
                 <span>Register here .</span>
                <button className='border border-gray-500 p-2 rounded-xl'>Register</button>
               </div>
            </div>
        </div>
    )
}

export default Login