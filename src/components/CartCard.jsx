import React from 'react'
import image1 from "../assets/assets/image1.avif"
import { ImBin } from "react-icons/im";

const CartCard = () => {
  return (
    <div className='bg-[#FFFFFF] w-full h-32 rounded-xl shadow-xl flex justify-between'>
      <div className='flex items-center w-[60%] h-full overflow-hidden gap-5 '>
        <div className=' w-[40%] p-1  '>
          <img src={image1} alt="" className='rounded-xl object-cover' />
        </div>
        <div className='flex flex-col w-[20%] '>
          <span className='text-xl font-semibold mb-3 '>pancake</span>
          <div className='bg-gray-300 border-b-gray-300 flex rounded-xl h-7 w-full overflow-hidden px-2 font-semibold shadow-md'>
            <button className='w-[30%] bg-slate-300 h-full rounded-l-xl flex items-center justify-center t'>-</button>
            <span className='w-[40%] bg-white text-center flex items-center justify-center'>1</span>
            <button className='w-[30%] bg-slate-300 h-full rounded-r-xl flex items-center justify-center '>+</button>
          </div>

        </div>
      </div>
      {/* Right sight */}
      <div className=' flex flex-col justify-start items-end gap-6 px-2'>
        <span className='text-xl text-green-400 font-semibold'>Rs 499/-</span>
        <ImBin className='text-xl text-red-400  ' />
      </div>
    </div>
  )
}

export default CartCard