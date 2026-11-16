import React from 'react'

const Cards = ({product,del}) => {
  return (
    <div className='w-50 border-2 p-4 m-3 rounded flex flex-col'>
        <div className='w-40 h-fit'>
            <img className='rounded' src={product.image} alt="image" />
        </div>
        <div className=''>
            <h1>Name : {product.title.substring(0,20)}</h1>
            <p>Price : {product.price}</p>
            <p>Discription : {product.discription}</p>
        </div>
        <button className='bg-red-500 p-3 rounded-xl' onClick={()=>del(product.id)}>Delete</button>
    </div>
  )
}

export default Cards