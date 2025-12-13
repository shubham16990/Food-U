import React from 'react'
import Navbar from '../components/Navbar'
import Collection from '../components/Collection'
import catogerys from '../Catogery'
import CatogeryCard from '../components/CatogeryCard'
import FoodCard from '../components/FoodCard'
import { food_items } from '../assets/food'

const HomePage = () => {
    return (
        <div className='w-full h-full min-h-screen bg-[#FFFFFF]'>
            <Navbar />
            <Collection />
            <div className='flex items-center justify-center overflow-hidden flex-wrap'>
                {food_items.map((item,idx) => {
                    return <div key={idx}>
                        <FoodCard  name={item.food_name} image={item.food_image} id={item.food_id} catogerys={item.food_category} price={item.price} type={item.food_type} />
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default HomePage

