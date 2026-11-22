import React, { useState } from 'react'

const Register = ({ setToggle }, e) => {

  const [formData, setFormData] = useState({})
  const [users, setUsers] = useState([])

    console.log(users)


  const handelChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  const submited = (e) => {
    setUsers([...users, formData])

    // e.target.reset()    // this is use to reset all the inputs. 
  }

  return (
    <div className='bg-white p-4 rounded-xl  flex flex-col gap-6'>
      <p>Register form</p>
      <form onClick={(e) => { e.preventDefault() }} className='flex flex-col gap-4 m-4' action="">
        <input name="name" onChange={handelChange} className='p-2 border border-gray-300 rounded' type="text" placeholder='Name' />

        <input name="email" onChange={handelChange} className='p-2 border border-gray-300 rounded' type="text" placeholder='Email' />
        <input name="password" onChange={handelChange} className='p-2 border border-gray-300 rounded' type="password" placeholder='Password' />
        <button onClick={submited} className='bg-blue-600 text-white rounded p-2 '>Register</button>
      </form>
      <div className='p-4 flex flex-col gap-6 '>
        <p>Already have an account ? <span onClick={() => setToggle((prev) => !prev)} className='text-blue-600 cursor-pointer'>Login here .</span> </p>
      </div>
    </div>
  )
}

export default Register