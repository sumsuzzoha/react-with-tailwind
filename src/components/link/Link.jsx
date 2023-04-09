import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='md:ms-7 py-3 gap-9'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;