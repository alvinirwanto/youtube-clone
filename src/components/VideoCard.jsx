import React from 'react';
import { Link } from 'react-router-dom';

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import daysCount from '../utils/DaysCount';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <div className='flex justify-center items-center'>
            <div className='w-full rounded-xl hover:rounded-none overflow-clip duration-300 flex flex-col gap-3'>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <img
                        src={snippet?.thumbnails?.high?.url}
                        alt={snippet?.title}
                        className='w-full h-[13rem] object-cover'
                    />
                </Link>
                <div className='h-[7rem] flex flex-col'>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <span className='font-semibold text-white'>
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </span>
                    </Link>

                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                        <span className='text-gray-400 text-sm'>
                            {snippet?.channelTitle || demoChannelTitle}
                            {/* <CheckCircle
                                sx={{
                                    fontSize: 12, color: 'gray', ml: '5px'
                                }}
                            /> */}
                        </span>
                    </Link>

                    <span className='text-gray-400 text-sm'>{daysCount(snippet?.publishedAt)}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoCard