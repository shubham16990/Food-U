import React, { createContext, useState } from 'react';
import { food_items } from '../assets/food';

export const DataContext = createContext();

const UseContext = ({ children }) => {

    const [input, setInput] = useState("");
    const [dishes, setDishes] = useState(food_items)
    const [showCart, setShowCart ] = useState(false)

    const data = {
        input,
        setInput, 
        dishes,
        setDishes,
        showCart, 
        setShowCart
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default UseContext;
