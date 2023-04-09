import React from 'react';
import Feature from '../features/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='m-2 rounded-md text-center bg-indigo-500 flex flex-col'>
            <h2 className='text-5xl text-red-500 font-semibold'>{price.price}<span className='text-2xl'>/mon</span></h2>
            <h5 className='text-2xl font-bold'>{price.name}</h5>

            <p className='text-start text-xl underline px-3 font-semibold'>Features:</p>
            {
                price.features.map((feature, idx) =>
                    <Feature
                        feature={feature}
                        key= {idx}
                    ></Feature>)
            }
            <button class="w-9/12 mx-auto mt-auto hover:bg-green-500 bg-blue-400 py-2 text-white font-bold rounded-md">Buy Now</button>
        </div>
    );
};

export default PriceCard;