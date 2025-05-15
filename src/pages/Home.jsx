import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Bestsellers from '../components/Bestsellers'
import Newsletter from '../components/Newsletter'

import Bottombanner from '../components/Bottombanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='px-6 md:px-10  z-100'>
      <Banner/>
   
      <Categories/>
      <Bestsellers/>
      <Newsletter/>
      <Bottombanner/>
      
     


    </div>
  )
}

export default Home 