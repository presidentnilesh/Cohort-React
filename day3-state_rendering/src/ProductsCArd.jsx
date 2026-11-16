import React from 'react'

const ProductsCArd = ({product,del}) => {
    
  return (
    <div className='h-fit m-3 p-2 border-2 rounded flex flex-col gap-4'>
        <div className='w-40 h-40'>
            <img src={product.image} alt="shoes image" />
        </div>
        <div>
            <h1 className='font-semibold'>Name : {product.title.substring(0,20)} </h1>
            <p className='text-xs'>Category : {product.category}</p>
            <h2 className='text-green-400'>Price : {product.price}</h2>
        </div>
        <button onClick={()=>del(product.id)} className='p-2 bg-red-500 rounded-lg'>Delete</button>
    </div>
  )
}

export default ProductsCArd