import React from 'react';
import { categories } from '../utils/constants';

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
    <div className='flex flex-col h-[95%] overflow-y-auto text-white py-4' >

        {categories.map((category) => (
            <button
                className={`flex justify-start item-center gap-6 py-[10px] px-4 text-[15px] rounded-xl duration-300 
                ${category.name === selectedCategory ? 'bg-bg-grey-2' : 'text-white'}
                ${category.name === selectedCategory ? 'hover:bg-br-grey' : 'hover:bg-bg-grey-2'}
                `}
                onClick={() => setSelectedCategory(category.name)}
                key={category.name}
            >
                <span className={`${category.name === selectedCategory ? 'text-white' : 'text-white'}`}>
                    {category.icon}
                </span>

                <span className={`${category.name === selectedCategory ? 'font-bold' : 'font-[300]'}`}>
                    {category.name}
                </span>
            </button>
        ))}
    </div>
)

export default SideBar