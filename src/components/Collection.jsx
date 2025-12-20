import React, { useState } from 'react'
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import CatogeryCard from './CatogeryCard';
import catogerys from '../Catogery';

const Collection = ({onFilter}) => {

    return (
        <div>
            <div className='w-full h-80 flex items-center justify-center ' >
                <div className=' w-5/6 h-64 flex flex-col gap-3 px-5  '>
                    <div className='w-full pl-4 flex items-center justify-between'>
                        <h2 className='font-semibold text-xl ' >
                            What's on your mind
                        </h2>
                        {/* Buttons */}
                        <div className='pr-3  flex gap-4 px-2  '>
                            <button className='bg-[#d6dde3] rounded-full py-1 px-1'>{<MdOutlineArrowForward />}</button>
                            <button className='rounded-full py-1 px-1 bg-[#d6dde3] '>{<MdOutlineArrowBack />}</button>
                        </div>
                    </div>
                    {/* menu */}
                    <div className='flex overflow-x-scroll overflow-y-hidden no-scrollbar h-48 gap-5'>
                        {/* Add "All" button first */}
                        <div onClick={() => onFilter("All")} className='cursor-pointer'>
                            <CatogeryCard image="all_image_here" name="All" />
                        </div>
                        
                        {catogerys.map((item, idx) => {
                            return <div 
                                onClick={() => onFilter(item.name || item.category)} // Call the filter function
                                className='cursor-pointer'
                                key={idx}
                            >
                                <CatogeryCard image={item.image} name={item.name} />
                            </div> 
                        })}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Collection