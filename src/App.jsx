import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


const App = () => {
    return (
        <BrowserRouter>
            <div className='bg-bg-grey h-screen overflow-auto'>
                <Navbar />
                <div className='mt-[5rem] mb-[3rem]'>
                    <Routes>
                        <Route path='/' exact element={<Feed />} />
                        <Route path='/video/:id' element={<VideoDetail />} />
                        <Route path='/channel/:id' element={<ChannelDetail />} />
                        <Route path='/search/:searchTerm' element={<SearchFeed />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App