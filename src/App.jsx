import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useContext } from 'react'
import { Appcontext } from './context/Appcontext'
import Login from './components/Login'
import Allproducts from './pages/Allproducts'
import Productcategory from './pages/Productcategory'
import Productdetails from './pages/Productdetails'
import Cart from './pages/Cart'
import Addadress from './pages/Addadress'
import Myorders from './pages/Myorders'
import Sellerlayout from './pages/seller/sellerlayout'
import Sellerlogin from './pages/seller/Sellerlogin'
import Addproduct from './pages/seller/Addproduct'
import Orders from './pages/seller/Orders'
import Productlist from './pages/seller/Productlist'

function AppRoutes() {
  const location = useLocation()
  const isSellerpath = location.pathname.includes("seller")
  const {showlogin,  isSeller,setisSeller,}=useContext(Appcontext)
  
  return (
    <>
      {isSellerpath ? null : <Navbar />}
     {showlogin ? <Login/>:null}
     <div className={`${isSellerpath? "":"px-6 md:px-10 "}`}>       
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Allproducts/>}/>
        <Route path='/products/:category' element={<Productcategory/>}/>
        <Route path='/products/:category/:id' element={<Productdetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/add-address' element={<Addadress/>}/>
        <Route path='/my-orders' element={<Myorders/>}/>
        <Route path='/seller' element={isSeller? <Sellerlayout/> : <Sellerlogin/> }>
        <Route index element={isSeller ? <Addproduct/>:null}/>
    
        </Route>
        <Route path='/orders' index element ={<Orders/>}/>
        <Route path= '/productlist' element={<Productlist/>}/>
        <Route path='/Addproduct' element={<Addproduct/>}/>
           


      </Routes>
      {!isSellerpath &&<Footer/>}
      
   
      </div>
    </>
  )
}

function App() {

  return (
    <div>
 <BrowserRouter>
      <Toaster />
      <AppRoutes />
    
    
    </BrowserRouter>
 

    </div>
   
  )
}

export default App
