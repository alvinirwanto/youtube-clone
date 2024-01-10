import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
    <div
        className='flex justify-between px-8 py-4'
    >
        <Link to='/'>
            <img src={logo} alt="logo" className='h-[2.5rem]' />
        </Link>

        <SearchBar />
    </div>
)

export default Navbar;