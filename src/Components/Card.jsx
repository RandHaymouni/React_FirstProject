import React from 'react'

const Card = ({ product }) => {
    console.log(product)
    return (
        <div className='w-72 mt-4 p-3 bg-[#f2eeee] rounded-lg '>
            <img className='w-full rounded-md '
                src={product.imageUrl}
                alt="Lampa"
            />
            <div>
                <div className=' flex items-center justify-between my-4 '>
                    <span className='font-bold text-lg'>{product.name}</span>
                    <span className='font-bold text-orange-300 '> {product.price}$</span>
                </div>
                <div>
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
