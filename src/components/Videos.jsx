import React from 'react';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {

    if (!videos?.length) return 'Loading...';

    return (
        <div className={`grid ${direction === 'column' ? 'grid-cols-1' : 'grid-cols-5'} gap-4 h-full`}>
            {videos.map((item, idx) => (
                <div key={idx}>
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                    {item.id.videoId && <VideoCard video={item} />}
                </div>
            ))}
        </div>
    )
}

export default Videos;