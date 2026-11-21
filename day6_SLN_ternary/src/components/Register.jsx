import React from 'react'

const Register = ({setToggle}) => {
    return (
        <div className='bg-white p-4 rounded-xl  flex flex-col gap-6'>
            <p>Register form</p>
            <form className='flex flex-col gap-4 m-4' action="">
                <input className='p-2 border border-gray-300 rounded' type="text" placeholder='Name' />

                <input className='p-2 border border-gray-300 rounded' type="text" placeholder='Email' />
                <input className='p-2 border border-gray-300 rounded' type="text" placeholder='Password' />
                <button className='bg-blue-600 text-white rounded p-2 '>Register</button>
            </form>
            <div className='p-4 flex flex-col gap-6 '>
                <p>Already have an account ? <span onClick={() => setToggle((prev) => !prev)} className='text-blue-600 cursor-pointer'>Login here .</span> </p>
            </div>
        </div>
    )
}

export default Register