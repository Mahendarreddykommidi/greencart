import React, { useState } from 'react'
import { assets } from '../greencart_assets/assets';

const Addadress = () => {
    const [address, setAddress] = useState({
        firstName: '',
        Lastname: '',
        phoneNumber:'',
    
        pincode: '',
        area: '',
        city: '',
        state: '',
    })

    const onSubmitHandler = async (e) => {
        e.preventDefault();

    }
  return (
    <div>
         <div className="px-6 md:px-16 lg:px-32 py-16 flex flex-col md:flex-row justify-between">
                <form onSubmit={onSubmitHandler} className="w-full">
                    <p className="text-2xl md:text-3xl text-gray-500">
                        Add Shipping <span className="font-semibold text-[#4fbf8b]">Address</span>
                    </p>
                    <div className="space-y-3 max-w-sm mt-10">
                      <div className="grid grid-cols-2 gap-3">
                      <input
                            className="px-2 py-2.5 focus:border-[#4fbf8b] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            placeholder="First name"
                            onChange={(e) => setAddress({ ...address, firstName: e.target.value })}
                            value={address.firstName}
                        />
                            <input
                            className="px-2 py-2.5 focus:border-[#4fbf8b] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            placeholder="Lastname"
                            onChange={(e) => setAddress({ ...address, Lastname: e.target.value })}
                            value={address.Lastname}
                        />
                      


                      </div>
                      <input
                            className="px-2 py-2.5 focus:border-[#4fbf8b] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            placeholder="Phone number"
                            onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })}
                            value={address.phoneNumber}
                        />
                        <input
                            className="px-2 py-2.5 focus:border-[#4fbf8b] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                            type="text"
                            placeholder="Pin code"
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            value={address.pincode}
                        />
                        <textarea
                            className="px-2 py-2.5 focus:border-[#4fbf8b] transition border border-gray-500/30 rounded outline-none w-full text-gray-500 resize-none"
                            type="text"
                            rows={4}
                            placeholder="Address (Area and Street)"
                            onChange={(e) => setAddress({ ...address, area: e.target.value })}
                            value={address.area}
                        ></textarea>
                        <div className="flex space-x-3">
                            <input
                                className="px-2 py-2.5 focus:border-[#4fbf8b] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                                type="text"
                                placeholder="City/District/Town"
                                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                value={address.city}
                            />
                            <input
                                className="px-2 py-2.5 focus:border-[#4fbf8b] transition border border-gray-500/30 rounded outline-none w-full text-gray-500"
                                type="text"
                                placeholder="State"
                                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                value={address.state}
                            />
                        </div>
                    </div>
                    <button type="submit" className="max-w-sm w-full bg-[#4fbf8b] py-3 text-white mt-6 bg-primary uppercase">
                        Save address
                    </button>
                </form>
                <img
                    className="md:mr-16 mt-16 md:mt-0"
                    src={assets.add_address_iamge}
                    
                    alt="my_location_image"
                />
            </div>



    </div>
  )
}

export default Addadress