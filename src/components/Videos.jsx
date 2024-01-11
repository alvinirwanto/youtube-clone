import React from 'react';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {

    if (!videos?.length) return 'Loading...';

    return (
        <div className='grid grid-cols-5 gap-4'>
            {videos.map((item, idx) => (
                <div key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </div>
            ))}
        </div>
    )
}

export default Videos;