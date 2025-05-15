import React from 'react'
import { assets } from '../greencart_assets/assets'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='relative  opacity-100 my-10 m:my-0 '>
      <img className='md:hidden w-full' src={assets.main_banner_bg_sm} alt="" />
      <img className='hidden md:block w-full' src={assets.main_banner_bg} alt="" />
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h2 className='text-3xl  lg:text-5xl font-bold  lg:leading-15 text-gray-700'>Freshness You Can <br />Trust, Savings <br />You  will Love!</h2>
        <div className='flex items-start gap-3 mt-5  lg:my-5 font-medium mx-7'>
    <Link to="/products" className='bg-[#4fbf8b] hover:bg-[#44ae7c] text-xs md:text-base  px-7 py-3   md:px-7 text-white rounded shadow-md '>
    Shop now
    </Link>
    <Link to="/products" className=' hidden md:flex px-7 md:px-9 my-2  '  >
    <div className='flex items-center gap-2 trnslate-x-1  '>
      Explore deals
      <img src={assets.black_arrow_icon} alt="" className=' ' />
    </div>

    
    
    
    </Link>



      </div>

  </div>


    </div>
  )
}

export default Banner