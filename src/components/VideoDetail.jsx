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

    //To get the id of video
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))

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

                    <Link to={`/channel/${channelId}`}>
                        <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff">
                            {channelTitle}
                            <CheckCircle sx={{
                                fontSize: '12px',
                                color: 'gray',
                                ml: '5px'
                            }} />
                        </Typography>
                    </Link>

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