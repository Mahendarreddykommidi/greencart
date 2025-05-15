import React, { useContext } from 'react'
import { assets } from '../../greencart_assets/assets';
import {  NavLink, useNavigate } from 'react-router-dom';
import { Appcontext } from '../../context/Appcontext';

const Sellerlayout = () => {

    const dashboardicon = (
        <img src={assets.add_icon} alt="" />
       
    );

    const Productlisticon =() => {
        <img src={assets.product_list_icon} alt="" />
    }


    const Ordericon = ()=>(
        <img src={assets.order_icon} alt=''/>
       
    );
const {setisSeller}=useContext(Appcontext)
    const sidebarLinks = [
        { name: "Addproduct", path: "/Addproduct", icon: dashboardicon },
        { name: "Productlist", path: "/productlist", icon: Productlisticon },
        { name: "Orders", path: "/orders", icon: Ordericon },
    ];
    const navigate=useNavigate()
const logout=async()=>{
    setisSeller(false)
}
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <NavLink to="/seller">
                <img src={assets.logo} alt="" />


                </NavLink>
               

                
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout}  className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <a href={item.path} key={index}
                        className={`flex items-center py-3 px-4 gap-3 
                            ${index === 0 ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-[#4fbf8b] text-[#4fbf8b]"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                       
                        <p className="md:block hidden text-center"> 
                            <img src={item.icon} alt="" />
                            
                            {item.name}</p>
                    </a>
                ))}
            </div>
        </>
    );
  
};
export default Sellerlayout