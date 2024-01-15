import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { AiOutlineLike } from "react-icons/ai";

import daysCount from '../utils/DaysCount'

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import formatNumber from '../utils/FormatNumber'

const VideoDetail = () => {

    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState(null)
    const [profilePictureUrl, setProfilePictureUrl] = useState(null);
    const [subscriberCount, setSubscriberCount] = useState(null);

    //To get the id of video
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => {
                setVideoDetail(data.items[0])

                // Extract channel ID from video data
                const channelId = data?.items[0]?.snippet?.channelId;

                // Fetch channel data
                return fetchFromAPI(`channels?part=snippet&id=${channelId}`);
            }).then(data => {
                // Extract and save profile picture URL in state
                const url = data?.items[0]?.snippet?.thumbnails?.default?.url;
                const subs = data?.items[0]?.statistics?.subscriberCount
                setProfilePictureUrl(url);
                setSubscriberCount(subs);
            })

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))
    }, [id])

    if (!videoDetail?.snippet) return 'Loading...';


    const { snippet: { title, channelId, channelTitle, publishedAt, description, tags, }, statistics: { viewCount, likeCount, commentCount } } = videoDetail;

    return (
        <div className='h-full overflow-auto'>
            <div className='w-full !h-full text-white px-28 grid grid-cols-[3fr_1fr] gap-6'>
                <div className='flex flex-col gap-4'>
                    <ReactPlayer url={`https://youtube.com/watch?v=${id}`}
                        className='!h-[70vh] !w-full rounded-xl overflow-clip' controls />
                    <div className='flex flex-col gap-4'>
                        <span className='text-xl font-bold' >
                            {title}
                        </span>
                    </div>

                    <div className='flex justify-between'>
                        <Link to={`/channel/${channelId}`} className='flex gap-2 items-center'>
                            <img src={profilePictureUrl} alt="profile" className='h-[2rem] w-[2rem] rounded-full' />
                            <div className='flex flex-col'>
                                <span className='text-white text-sm font-semibold'>{channelTitle}</span>
                                <span className='text-white text-xs font-light'>{formatNumber(subscriberCount)} Subcribers</span>
                            </div>
                        </Link>

                        <div className='flex justify-center items-center px-4 py-1 bg-bg-grey-2 rounded-full gap-1'>
                            <AiOutlineLike className='text-xl' />
                            <span>
                                {formatNumber(likeCount)}
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-col p-4 bg-bg-grey-2 rounded-xl gap-2 text-sm'>
                        <div className='flex items-center gap-2 font-semibold text-sm'>
                            <span>
                                {formatNumber(viewCount)} views
                            </span>
                            <span >
                                {daysCount(publishedAt)}
                            </span>
                        </div>
                        <div>{tags.map((tag, i) => (
                            <span key={i} className='pr-1 text-link-blue'>#{tag}</span>
                        ))}</div>
                        <span>
                            {description}
                        </span>
                    </div>

                    <span className='text-xl font-bold'>
                        {commentCount} Comments
                    </span>
                </div>

                <Videos videos={videos} direction='column' />

            </div>
        </div>
    )
}

export default VideoDetail