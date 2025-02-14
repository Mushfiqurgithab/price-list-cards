import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    //Asking Chatgpt : Q1. a list of routes in an array  each item with id, name, path 
    //Asking Chatgpt : Q2. put each item in line
    //Asking Chatgpt : Q3. give me 5 items 
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Products', path: '/products' }
    ];
    return (
        <nav className='bg-purple-400 px-4'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                {/* <span>{open === true? 'open' : 'close'}</span>
                <Bars3Icon className="size-6 text-purple-500" />
                <XMarkIcon className="size-6 text-purple-500" /> */}
                <span>
                    {
                        open === true? 
                            <XMarkIcon className="h-6 w-6 text-purple-500"/> 
                            : <Bars3Icon className="h-6 w-6 text-purple-500" />
                    }
                </span>  
            </div>
            
            <ul className={`md:flex absolute md:static duration-300 pl-8 pb-2 bg-purple-400 ${open? 'top-6' : '-top-36'}`}>
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