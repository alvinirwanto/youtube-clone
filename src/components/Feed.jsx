import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');

    const [videos, setVideos] = useState([])

    //Initial hooks
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
        <div className='grid grid-cols-[1fr_7fr]'>

            <div className='h-auto md:h-[92vh] px-4'>
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <div className='text-white text-sm' >
                © {new Date().getFullYear()} Alvin Media
                </div>

            </div>

            <div className='overflow-auto p-6 h-[90vh]'>
                <div className='font-bold text-2xl flex items-center gap-2 mb-6'>
                    <span className='text-white'>{selectedCategory}</span>
                    <span className='text-[#F31503]'> Videos</span>
                </div>

                <Videos
                    videos={videos}
                    direction={'row'}
                />
            </div>

        </div>
    )
}

export default Feed