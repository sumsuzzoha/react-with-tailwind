import React from 'react';
import {  CheckBadgeIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='sm:text-center md:text-start font-semibold flex items-center'>
            <CheckBadgeIcon className="h-6 w-6 text-green-500" />
            <span className='p-1'>
                {feature}
            </span>
        </div>
    );
};

export default Feature;