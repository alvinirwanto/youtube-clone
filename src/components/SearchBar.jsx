import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex justify-between items-center rounded-full overflow-clip' >
            <div className={`flex justify-center items-center rounded-l-full border-[1px] ${isFocused ? 'border-white' : 'border-br-grey'} h-full pl-6`}>
                {
                    isFocused && (
                        <div className='h-full flex items-center justify-center pr-4'>
                            <LuSearch className='text-white text-2xl' />
                        </div>
                    )
                }
                <input
                    type='text'
                    className='bg-transparent w-[20vw] h-full focus:outline-none text-white'
                    placeholder='Search'
                    value={searchTerm}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
            </div>
            <button type='submit' className='bg-bg-grey-2 rounded-r-full border-r-[1px] border-y-[1px] border-br-grey h-full flex items-center justify-center pr-1 w-[4vw]'>
                <LuSearch className='text-white text-2xl' />
            </button>
        </form>
    )
}

export default SearchBar