import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import daysCount from '../utils/DaysCount'

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {

    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState(null)
    const [profilePictureUrl, setProfilePictureUrl] = useState(null);
    const [subscriberCount, setSubscriberCount] = useState(null);

    console.log(subscriberCount)

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
            <div className='w-full !h-full text-white px-20 grid grid-cols-[3fr_1fr] gap-10'>
                <div className='flex flex-col gap-4'>
                    <ReactPlayer url={`https://youtube.com/watch?v=${id}`}
                        className='!h-[70vh] !w-full rounded-xl overflow-clip' controls />
                    <div className='flex flex-col gap-4'>
                        <span className='text-xl font-bold' >
                            {title}
                        </span>
                    </div>

                    <Link to={`/channel/${channelId}`} className='flex gap-2 items-center'>
                        <img src={profilePictureUrl} alt="profile" className='h-[3rem] w-[3rem] rounded-full' />
                        <span className='text-white text-lg font-semibold'>
                            {channelTitle}
                        </span>
                    </Link>
                    <span>{subscriberCount}</span>

                    <div>
                        <span >
                            {daysCount(publishedAt)}
                        </span>
                        <span>
                            {description}
                        </span>
                        <span>{tags}</span>

                        <span>
                            {parseInt(viewCount).toLocaleString()} views
                        </span>

                        <span>
                            {parseInt(likeCount).toLocaleString()} likes
                        </span>

                        <span>
                            {parseInt(commentCount).toLocaleString()} likes
                        </span>
                    </div>
                </div>

                <Videos videos={videos} direction='column' />

            </div>
        </div>
    )
}

export default VideoDetail