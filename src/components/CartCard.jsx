import React from 'react'
import image1 from "../assets/assets/image1.avif"
import { ImBin } from "react-icons/im";
import { RemoveItem } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartCard = ({id,name,price,qty,image}) => {

  let dispatch = useDispatch()

  return (
    <div className='c] w-full h-32 rounded-xl shadow-xl flex justify-between p-3  '>
      <div className='flex items-center w-[60%] h-full overflow-hidden gap-5 '>
        <div className=' w-[40%] p-1  '>
          <img src={image} alt="" className='rounded-xl object-cover' />
        </div>
        <div className='flex flex-col w-[40%] '>
          <span className='text-md font-semibold mb-3 '>{name}</span>
          <div className='bg-gray-300 border-b-gray-300 flex rounded-xl h-7 w-full overflow-hidden px-2 font-semibold shadow-md'>
            <button className='w-[30%] bg-slate-300 h-full rounded-l-xl flex items-center justify-center t'>-</button>
            <span className='w-[40%] bg-white text-center flex items-center justify-center'>{qty}</span>
            <button className='w-[30%] bg-slate-300 h-full rounded-r-xl flex items-center justify-center '>+</button>
          </div>

        </div>
      </div>
      {/* Right sight */}
      <div className=' flex flex-col justify-start items-end gap-6 px-2 mt-4'>
        <span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
        <ImBin className='text-xl text-red-400 cursor-pointer ' onClick={()=>dispatch(RemoveItem(id))}   />
      </div>
    </div>
  )
}

export default CartCard