import React, { useEffect, useState } from 'react';
import PriceCard from '../priceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]) ;

    useEffect( () =>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data));
    } , [])
    return (
        <div>
            <h2 className='text-6xl text-orange-700 text-center co bg-purple-500'>Awesome affordable Price</h2>
            <div className='grid md:grid-cols-3 gap-2'>
            {
                prices.map(price => <PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;