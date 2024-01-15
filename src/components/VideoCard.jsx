import React from 'react';
import { Link } from 'react-router-dom';

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
import daysCount from '../utils/DaysCount';

const VideoCard = ({ direction, video: { id: { videoId }, snippet } }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className={`w-full overflow-clip duration-300 gap-3
            ${direction === 'column' ? 'grid grid-cols-[4fr_5fr] h-[6rem]'
                    : 'flex flex-col rounded-xl hover:rounded-none'}`}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className='rounded-lg overflow-hidden'>
                    <img
                        src={snippet?.thumbnails?.high?.url}
                        alt={snippet?.title}
                        className={`w-full ${direction === 'column' ? 'object-cover h-full' : 'h-[13rem] object-cover'}`}
                    />
                </Link>

                <div className={`flex flex-col ${direction === 'column' ? 'justify-between' : 'h-[7rem] '}`}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <span className={`text-white font-semibold line-clamp-2 ${direction === 'column' ? 'text-sm' : 'text-base'}`}>
                            {snippet?.title || demoVideoTitle.slice(0, 60)}
                        </span>
                    </Link>

                    <div className='flex flex-col'>
                        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                            <span className='text-gray-400 text-sm'>
                                {snippet?.channelTitle || demoChannelTitle}
                            </span>
                        </Link>

                        <span className='text-gray-400 text-xs'>{daysCount(snippet?.publishedAt)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard