import React from 'react'

const CatogeryCard = ({ image }) => {
    return (
        <div className='h-32 w-32  flex flex-col hover:scale-110 transition duration-200 ease-in-out  '>
            <img
                className='mt-5 rounded-xl cursor-pointer'
                src={image} alt="" />

        </div>
    )
}

export default CatogeryCard