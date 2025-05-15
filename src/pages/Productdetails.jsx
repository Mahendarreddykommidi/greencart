import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../context/Appcontext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { assets } from '../greencart_assets/assets';
import Productcard from '../components/Productcard';



export default function Productdetails () {
    const {products,addToCart,currency}=useContext(Appcontext)
    const {id}=useParams();
     const navigate=useNavigate();
     const [thumbnail,SetThumbnail]=useState(null);
     const product=products.find((item)=>item._id===id);
     const [relatedProducts,SetRelatedproducts]=useState([0])

     useEffect(()=>{
        if(products.length>0){
            let productsCopy=products.filter((item)=>product.category===item.category);
            SetRelatedproducts(productsCopy.slice(0,5))

        }
     },[products])

     useEffect(()=>{
        SetThumbnail(product?.image[0])
     },[product])


    return product && (
        <div className="max-w-6xl w-full px-10 lg:px-0 mx-auto my-10">
            <p>
                <Link to="/" >Home</Link> /
                <Link to ="/products"> Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`}>{product.category}</Link>
                <span className='text-[#4fbf8b] 500 ml-3'>{product.name}</span>
             
           
         
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                <div className="flex flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => SetThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                
                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                    <img src={thumbnail} alt="Selected product" />
                      
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                <h1 className="text-3xl font-medium">{product.name}</h1>

                    <div className="flex flex-col  gap-4 mt-1">
                        <div className='flex items-center mt-13 gap-3'>
                        {Array(5).fill('').map((_, i) => (
                                           <img
                                               key={i}
                                               className="w-3.5 flex items-center"
                                               src={product.rating > i ? assets.star_icon : assets.star_dull_icon}
                                               alt={`star-${i}`}
                                           />
                                       ))}
                                       <p>(4)</p>
                        </div>
                 

                    <div className="mt-6">
                    <p className="text-gray-500/70 line-through">MRP: ${product.price}</p>
                    <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
                      
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                    {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    
                    </ul>
                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={()=>addToCart(product._id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button onClick={()=>addToCart(product._id)} className="w-full py-3.5 cursor-pointer font-medium text-white bg-[#4fbf8b] btransition" >
                            Buy now
                        </button>
                    </div>

                </div>
            
                </div>
            
                </div>
                <div className='related products my-10 flex flex-col gap-3 items-center'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>Related products</h1>
                     
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 md:grid-cols-4 lg:grid-cols-5 mt-6">
                             {relatedProducts
                               .filter((product) => product.inStock)
                               .slice(0, 5)
                               .map((product, index) => (
                                 <Productcard key={index} product={product} />
                               ))}
                           </div>  
                  
                             <button onClick={()=>{navigate("/products"),scrollTo(0,0)}} className='px-8 py-3 my-4  font-bold bg-[#44ae7c]/20 rounded-lg'>see more</button>

                </div>
                </div>
                
                
    );
};