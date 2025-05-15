import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../greencart_assets/assets";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const Appcontext=createContext()



export const Appcontextprovider=({children})=>{
    const currency="$"
  
 
    const [isSeller, setisSeller] = useState(true)
    const [user,Setuser]=useState(null)
    const [showlogin,setShowuserlogin]=useState(false)
    const [products,Setproducts]=useState([])
    const [cartItems,setCartItems]=useState({})
    const [searchQuery,SetsearchQuery]=useState({})

    const addToCart =  (itemId) => {

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        }
        else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    
        toast.success("item added to cart")

    }
    const removeFromCart =  (itemId) => {

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if(cartData[itemId]===0){
                delete(cartData[itemId])

            
            }
        }
       
      
        setCartItems(cartData);
      toast.error("item removed from cart")

    }
    const updateCartQuantity =  (itemId, quantity) => {

        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData)
        toast.success("cart updated")

    }


    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }







 const fetchProducts=async()=>{
    Setproducts(dummyProducts)
 }
 useEffect(()=>{
    fetchProducts()
 },[])

    const value={
        isSeller,setisSeller,
        user,Setuser,showlogin,setShowuserlogin
        ,products,Setproducts,currency,
         addToCart,getCartCount,getCartAmount
         ,cartItems,setCartItems,removeFromCart,
         searchQuery,SetsearchQuery, updateCartQuantity
    

    }
    return (
       
            <Appcontext.Provider value={value}>
                {children}
            </Appcontext.Provider>
        
    );
 
   




}