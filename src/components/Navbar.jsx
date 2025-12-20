import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md"
import { IoSearch, IoBagCheck } from "react-icons/io5"
import { DataContext } from '../Context/UseContext'
import { food_items } from '../assets/food'

const Navbar = () => {

    const {
        input,
        setInput,
        setDishes,
        setShowCart
    } = useContext(DataContext)

    const submitHandler = (e) => {
        e.preventDefault()
        setInput("")
    }

    useEffect(() => {
        const searchText = input.trim().toLowerCase()

        if (searchText === "") {
            setDishes(food_items)
        } else {
            const filteredList = food_items.filter(item =>
                item.food_name.toLowerCase().includes(searchText)
            )
            setDishes(filteredList)
        }
    }, [input, setDishes])

    const handleShowCart = () => {
        setShowCart(true)
    }

    return (
        <nav className="w-full h-[90px] flex items-center justify-between px-5">

            {/* Logo */}
            <div className="flex items-center gap-3">
                <h1 className="text-4xl font-semibold bg-white rounded-xl px-4 py-2 cursor-pointer">
                    Food U
                </h1>

                <div className="flex justify-center items-center w-[60px] h-[60px] bg-white rounded-xl cursor-pointer shadow-xl">
                    <MdFastfood className="text-2xl text-green-400" />
                </div>
            </div>

            {/* Search */}
            <form
                onSubmit={submitHandler}
                className="flex items-center bg-slate-100 rounded-full px-5 shadow-xl"
            >
                <IoSearch className="text-green-400 text-xl" />
                <input
                    type="text"
                    placeholder="Enter your Food"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-[300px] h-10 outline-none px-4 text-lg bg-transparent
                     placeholder:text-gray-500 text-gray-700"
                />
            </form>

            {/* Cart */}
            <div
                onClick={handleShowCart}
                className="w-[60px] h-[60px] rounded-xl flex items-center justify-center
                   bg-white cursor-pointer shadow-xl hover:scale-105 transition"
            >
                <IoBagCheck className="text-2xl text-green-500" />
            </div>

        </nav>
    )
}

export default Navbar
