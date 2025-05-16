import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { categories } from '../greencart_assets/assets'
import { Appcontext } from '../context/Appcontext'
import Productcard from '../components/Productcard'

const Productcategory = () => {
    const { products } = useContext(Appcontext)
    const { category } = useParams()
    const Searchcategory = categories.find((item) => item.path.toLowerCase() === category)
    const filterProducts = products.filter((product) => product.category.toLowerCase() === category)

    return (
        <div className='mt-16 mx-20'>
            {Searchcategory && (
                <div className='flex flex-col items-end w-max '>
                    <p className='text-2xl font-medium ml-20'>{Searchcategory.text.toUpperCase()}</p>
                </div>
            )}
            {filterProducts.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-20 gap-5 w-full md:gap-6 mt-6   '>
                    {filterProducts.map((product) => (
                        <Productcard key={product._id || product.name} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-4">
                    No products available in this category.
                </div>
            )}
        </div>
    )
}

export default Productcategory