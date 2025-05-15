import React, { useContext, useState } from 'react'
import Productcard from './Productcard'
import { Appcontext } from '../context/Appcontext'

const Bestsellers = () => {
  const { products, Setproducts } = useContext(Appcontext)
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Bestsellers</p>
      <div className="grid space-x-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 md:grid-cols-4 lg:grid-cols-5 mt-6">
          {products
            .filter((product) => product.inStock)
            .slice(0, 5)
            .map((product, index) => (
              <Productcard key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Bestsellers