import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    //Initial hooks
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <div className='h-[90vh] overflow-auto px-6'>
            <h4 className='text-white text-xl font-semibold flex items-center gap-3'>
                <span>Search result for :</span>
                <span className='text-[#F31503]'> {searchTerm} videos</span>
            </h4>


            <Videos
                videos={videos}
            />
        </div>
    )
}

export default SearchFeed