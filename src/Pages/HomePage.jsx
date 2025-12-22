import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Collection from '../components/Collection'
import catogerys from '../Catogery'
import CatogeryCard from '../components/CatogeryCard'
import FoodCard from '../components/FoodCard'
import { food_items } from '../assets/food'
import { DataContext } from '../Context/UseContext'
import { RxCross2 } from "react-icons/rx";
import CartCard from '../components/CartCard'
import { useSelector } from 'react-redux'

const HomePage = () => {
    let { dishes, setDishes, showCart, setShowCart } = useContext(DataContext)

    const filterDish = (category) => {
        if (category === "All") {
            setDishes(food_items)
        }
        else {
            let newList = food_items.filter((item) => {
                return item.food_category === category || item.category === category
            })
            setDishes(newList)
        }
    }

    let items = useSelector((state) => state.cart.item)

   let subTotal = items.reduce((total,item)=>{
    return total+item.price * item.qty
   },0)
  let deliverFee = 20;
  let taxes = subTotal*0.6/100;
  let total = subTotal + deliverFee + taxes ;

    return (
        <div className='w-full h-screen min-h-screen max-h-screen bg-[#FFFFFF]'>
            <Navbar />
            <Collection onFilter={filterDish} />
            <div className='flex items-center justify-center overflow-hidden flex-wrap'>
                {dishes.map((item, idx) => {
                    return <div
                        key={idx}>
                        <FoodCard name={item.food_name} image={item.food_image} id={item.id} catogerys={item.food_category} price={item.price} type={item.food_type} />
                    </div>
                })}
            </div>
            {/* Add to cart section */}
            <div className={` w-full md:w-[75vh] h-screen shadow-xl fixed top-0 right-0 px-4 bg-[#FFFFFF] transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`} >
                <header className='flex justify-between mt-2 p-2'>
                    <span className='text-xl font-semibold text-green-400 cursor-pointer'>Order items</span>
                    <RxCross2 className='text-green-400 font-bold text-[18px] h-8 w-7 cursor-pointer hover:text-gray-600 '
                        onClick={() => setShowCart(false)}
                    />
                </header>
                <div className=" flex flex-col gap-3 mt-5
               w-full overflow-y-auto h-screen cursor-pointer  scrollbar-hide ">
                    {items.map((item) => {
                        return <div>
                            <CartCard name={item.name} image={item.image} price={item.price} id={item.id} qty={item.qty} />
                        </div>
                    })}
                    
                </div>  
                
            </div>
        </div>
    )
}

export default HomePage

