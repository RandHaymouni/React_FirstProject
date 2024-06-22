import React, { useEffect, useState } from 'react';

const Card = ({ product, addToCart }) => {
    console.log(product)
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const productInCart = cart.find((item) => item.name === product.name);
        setIsInCart(!!productInCart);
    }, [product.name]);

    return (
        <div className='w-72 mt-4 p-3 bg-[#f2eeee] rounded-lg shadow-xl'>
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

            {isInCart ? (
                <button className="w-full mt-4 bg-[#f04b4b] py-2 rounded-lg text-white font-semibold">
                    Remove From Cart
                </button>
            ) : (
                <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-4  bg-[#0b0925] py-2 rounded-lg text-white font-semibold"
                >
                    Add To Cart
                </button>
            )}
        </div>
    )
}

export default Card
