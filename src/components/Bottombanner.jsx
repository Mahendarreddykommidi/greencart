import React from 'react'
import { assets,features } from '../greencart_assets/assets'

const Bottombanner = () => {
  return (
    <div className='relative'>
        <img src={assets.bottom_banner_image} className="hidden md:block w-full" alt="" />
        <img src={assets.bottom_banner_image_sm} className='block md:hidden w-full' alt="" />
        <div className='absolute inset-0 flex flex-col items-center justify-start md:items-end md:justify-center pt-16 md:pt-0 md:pr-24  '>
          <div>
            <h1 className='text-2xl md:text-3xl font-semibold mb-5 text-green-500'>Why We Are The Best</h1>
          {features.map((feature,index)=>(
              <div key={index} className='flex items-center gap-4 mt-2 '>
                  
                <img src={feature.icon} className='w-10' alt={feature.title} />
                <div>   
                <p className='text-sm md:text-xl font-semibold'>{feature.title}</p>
                <p className='text-xs text-gray-500/70 md:text-sm'>{feature.description}</p>
                </div>
                </div>
              

             
          


        
       
            ))}
            </div>
            </div>

    </div>
  )
}

export default Bottombanner