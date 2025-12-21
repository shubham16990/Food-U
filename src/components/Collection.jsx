import React, { useRef, useState } from 'react'
import { MdOutlineArrowForward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import CatogeryCard from './CatogeryCard';
import catogerys from '../Catogery';

const Collection = ({ onFilter }) => {

    const slideRef = useRef(null)

    const handleRight = () => {
        slideRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        })
    }

    const handleLeft = () => {
        slideRef.current.scrollBy({
            left: -300,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <div className='w-full flex items-center justify-center py-6 md:py-10' >
                <div className='w-full md:w-5/6 flex flex-col gap-3 px-4 md:px-0'>
                    <div className='w-full flex items-center justify-between'>
                        <h2 className='font-bold text-xl md:text-2xl text-gray-800' >
                            What's on your mind
                        </h2>
                        {/* Buttons */}
                        <div className='hidden md:flex gap-2'>
                            <button onClick={handleLeft} className='bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-sm transition-all'>{< MdOutlineArrowBack className='text-xl' />}</button>
                            <button onClick={handleRight} className='bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-sm transition-all'>{<MdOutlineArrowForward className='text-xl' />}</button>
                            {/*  */}

                        </div>
                    </div>
                    {/* menu */}
                    <div
                        ref={slideRef}
                        className='flex overflow-x-scroll overflow-y-hidden no-scrollbar gap-5 md:gap-8 scroll-smooth py-2'>
                        {/* Add "All" button first */}
                        <div onClick={() => onFilter("All")} className='cursor-pointer'>
                            <CatogeryCard image="all_image_here" name="All" />
                        </div>

                        {catogerys.map((item, idx) => {
                            return <div
                                onClick={() => onFilter(item.name || item.category)} 
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