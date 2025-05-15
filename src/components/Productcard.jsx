import React, { useContext } from 'react'
import { assets } from '../greencart_assets/assets';
import { Appcontext } from '../context/Appcontext';
import { useNavigate } from 'react-router-dom';

export default function Productcard({ product }) {
    const [count, setCount] = React.useState(0);
    const { currency, cartItems, addToCart, removeFromCart } = useContext(Appcontext);
    const navigate = useNavigate(); // Corrected

    return product && (
        <div onClick={() => navigate(`/products/${product.category.toLowerCase()}/${product._id}`)} className="border border-gray-500/20 rounded-md md:px-7 px-3 py-2 bg-white  max-w-50 w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                        <img
                            key={i}
                            className="w-3.5"
                            src={product.rating > i ? assets.star_icon : assets.star_dull_icon}
                            alt={`star-${i}`}
                        />
                    ))}
                    <p>(4)</p>
                </div>
                <div className="flex items-end justify-between mt-3 gap-3">
                    <p className="md:text-xl text-base font-medium text-indigo-500">
                        {currency}{product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">${product.price}</span>
                    </p>
                    <div onClick={(e) => e.stopPropagation()} className="text-green-700">
                        {!cartItems[product._id] ? (
                            <button 
                                onClick={() => {
                                    cartItems[product._id];
                                    addToCart(product._id);
                                }}
                                className="flex items-center justify-center gap-1 bg-[#4fbf8b]/30 text-[#44ae7c] text-xs opacity-80 md:w-[80px] w-[64px] h-[34px] rounded font-bold"
                            >
                                <img src={assets.cart_icon} alt="" className="w-5 font-semibold opacity-100" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                                <button 
                                    onClick={() => removeFromCart(product._id)} 
                                    className="cursor-pointer text-md px-2 h-full"
                                >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button 
                                    onClick={() => addToCart(product._id)} 
                                    className="cursor-pointer text-md px-2 h-full"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};