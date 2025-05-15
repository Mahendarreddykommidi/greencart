import { useContext, useState } from "react";
import { assets, dummyOrders } from "../greencart_assets/assets";
import { Appcontext } from "../context/Appcontext";

export default function Myorders  () {
 const [myOrders,setMyorders]=useState(dummyOrders)
 const {currency}=useContext(Appcontext)
    return (
        <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-semibold">Orders List</h2>
            {myOrders.map((order, index) => (
                <div key={order._id || index} className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl">
                  <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
                    <span>OrderId {order._id}</span>
                
                    <span>Payment: {order.paymentType}</span>
                    <span className="text-[#4fbf8b]">Total amount: {currency} {order.amount}</span>
                  
                  </p>
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className={`relative bg-white text-gray-500/70 ${
                          order.items.length !== index + 1 ? "border-b" : ""
                      } border-gray-400 flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}
                    >
                      <div className="flex items-center mb-4 gap-16 md:mb-0">
                        <div className="bg-primary p-4 rounded-lg">
                          <img src={item.product.image[0]} alt={item.product.name} className="w-16" />
                        </div>
                        <div className="ml-4">
                        <h2 className="text-xl font-medium text-gray-800">{item.product.name}</h2>
                        <p>Category:{item.product.category}</p>
                        </div>
                     
                      <p className="text-left ml-10 text-[#4fbf8b]">Total amount {order.amount}</p>
                      </div>
                      <div className="text-[#4fbf8b] text-lg font-medium">
                        <p>Quantity:{item.quantity||"1"}</p>
                        <p>status :{order.status}</p>
                        <p>Date :{new Date(order.createdAt).toLocaleDateString()}</p>
                      </div>
                      <p className="text-[#4fbf8b]">{currency}{item.product.offerPrice*item.quantity}</p>
                    </div>
                  ))}
                </div>
            ))}

            <div>
                

            </div>
        </div>
    );
};