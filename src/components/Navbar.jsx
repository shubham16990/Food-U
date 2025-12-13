import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className='w-full  h-[90px] flex items-center  justify-between px-5 '>
            <div className='flex items-center justify-between gap-1 py-2 px-3 '>
                <h1 className='text-4xl font-semibold w-40 h-24 mt-15 bg-white rounded-xl px-3 cursor-pointer '>Food U</h1>
                <div className='flex justify-center items-center w-[60px] h-[60px] bg-white rounded-xl cursor-pointer shadow-xl' >

                    {<MdFastfood className='text-2xl text-green-400 ' />}
                </div>
            </div>
            <form className='flex items-center justify-center  bg-slate-100  rounded-full px-5 shadow-xl  '>
                <IoSearch className='text-green-300 text-xl' />
                <input type="text" placeholder='Enter your Food'
                    className="w-xl h-10 outline-none px-5 m-auto text-xl
                placeholder:text-gray-500 text-gray-700"
                />
            </form>
            <div className='w-[60px] h-[60px] rounded-xl flex items-center bg-white justify-center    cursor-pointer shadow-xl'>
                <IoBagCheck className='text-2xl text-green-500 ' />
            </div>
        </nav>
    )
}

export default Navbar