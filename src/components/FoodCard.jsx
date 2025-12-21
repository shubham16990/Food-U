import React from 'react'
import { FaLeaf, FaStar } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { food_items } from '../assets/food';

const FoodCard = ({type,image,price,catogerys,name,id, rating, reviews}) => {

let dispatch = useDispatch()
    return (
        <div className='w-full p-2'>
            <div className='bg-white rounded-2xl shadow-lg overflow-hidden  
                            transition-all duration-300 hover:shadow-2xl hover:-translate-y-2'>

                <div className='flex flex-col justify-between w-[240px] h-[360px] p-4'>

                    {/* IMAGE */}
                    <div className='relative overflow-hidden rounded-xl'>
                        <img
                            src={image}
                            alt=""
                            className='h-40 w-full object-cover rounded-xl 
                                    transition-transform duration-300 hover:scale-110'
                        />

                        {/* TYPE BADGE */}
                        <div className='absolute top-2 left-2 bg-white px-2 py-1 
                                        rounded-full shadow flex items-center gap-1'>
                            {type === "veg"
                                ? <FaLeaf className='text-green-500 text-sm' />
                                : <GiChickenOven className='text-red-500 text-sm' />
                            }
                            <span className='text-xs font-semibold capitalize'>{type}</span>
                        </div>
                    </div>

                    {/* TEXT DETAILS */}
                    <div className='mt-3'>
                        <h3 className='text-xl font-semibold text-gray-800 line-clamp-1'>
                            {name}
                        </h3>

                        {/* RATING */}
                        <div className='flex items-center gap-1 mt-1'>
                            <FaStar className='text-yellow-400 text-lg' />
                            <span className='font-semibold text-gray-700'>{rating}</span>
                            <span className='text-sm text-gray-500'>({reviews} reviews)</span>
                        </div>

                        <div className='flex justify-between items-center mt-2'>
                            <p className='text-lg font-bold text-green-600'>
                                ₹{price}
                            </p>

                            <div className='flex items-center gap-2 text-sm'>
                                <span className='font-medium text-gray-600'>{catogerys}</span>
                                <FaLeaf className='text-green-500' />
                            </div>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button className='w-full bg-green-500 text-white py-2 mt-4 
                                        rounded-xl font-semibold text-lg 
                                        hover:bg-green-600 active:scale-95 
                                        transition-all duration-200 cursor-pointer'
                                       onClick={() =>
  dispatch(AddItem({
    id,
    image,
    price,
    qty: 1,
    name,
    type
  }))
}

                                        >
                        Add to Cart 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
