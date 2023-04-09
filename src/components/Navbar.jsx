import { list } from 'postcss';
import React, { useState } from 'react';
import Link from './link/Link';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'



const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Blog', path: '/blog' }
    ];

    return (
        <nav className='bg-orange-500	'>
            <div onClick={() => setOpen(!isOpen)} className='md:hidden '> <span>{ isOpen === true ? <XMarkIcon className="h-6 w-6 text-purple-500"/>  : <Bars3Icon className="h-6 w-6 text-purple-500" />}</span>
                
            </div >
            <ul className={`md:flex  ${isOpen ? 'visibility: visible':'visibility: hidden'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}

                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;