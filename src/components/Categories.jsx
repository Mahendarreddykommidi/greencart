import React from 'react'
import { assets,categories } from '../greencart_assets/assets'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate=useNavigate()
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6'>
        {categories.map((category,index)=>(

            <div className="group cursor-pointer py-5 px-5 gap-2 mt-6 rounded-lg flex flex-col items-center justify-center" key={index}
            style={{backgroundColor:category.bgColor}}
            onClick={()=>{
              navigate(`/products/${category.path.toLowerCase()}`)

            }}
            
            
            >
            <img src={category.image} alt="" className='group hover:scale-108 transition max-w-28' />
            <p className='text-sm font-medium'>{category.text}</p>
  
  
          </div>
          
  
  
          ))}
        </div>
     


    </div>
  )
}

export default Categories