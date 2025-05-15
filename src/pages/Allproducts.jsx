import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../context/Appcontext'
import Productcard from '../components/Productcard'

const Allproducts = () => {
  const {searchQuery, SetsearchQuery, products} = useContext(Appcontext)
  const [filterProducts, Setfilterproducts] = useState([])

  useEffect(() => {
    if (searchQuery.length > 0) {
        Setfilterproducts(
            products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    } else {
        Setfilterproducts(products);
    }
  }, [products, searchQuery])

  return (
    <div>   
      <p className=' py-10 text-2xl px-15 font-medium'>All products</p>  
      <div className='w-16 h-0.5 rounded-full '></div>
    <div className='mt-16 flex flex-col items-center'>
      <div className="flex flex-col justify-start items-start">
      
    

      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-6'>
        {filterProducts
          .filter(product => product.inStock)
          .map((product, index) => (
            <Productcard key={index} product={product} />
          ))}
      </div>
    </div>
    </div>
  )
}

export default Allproducts