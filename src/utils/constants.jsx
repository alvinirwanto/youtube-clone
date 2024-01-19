import { LuCode2, LuUser, LuTrendingUp, LuMusic, LuSchool, LuPodcast, LuFilm, LuGamepad2, LuCamera, LuShirt  } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { MdSportsHandball, MdOutlineTheaterComedy } from "react-icons/md";
import { IoWomanOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categories = [
    { name: 'New', icon: <LuTrendingUp className='text-xl' />, },
    { name: 'Alvin Irwanto', icon: <LuUser className='text-xl' />, },
    { name: 'Coding', icon: <LuCode2 className='text-xl' />, },
    { name: 'ReactJS', icon: <FaReact className='text-xl' />, },
    { name: 'NextJS', icon: <SiNextdotjs className='text-xl' />, },
    { name: 'Music', icon: <LuMusic className='text-xl' /> },
    { name: 'Education', icon: <LuSchool className='text-xl' />, },
    { name: 'Podcast', icon: <LuPodcast className='text-xl' />, },
    { name: 'Movie', icon: <LuFilm className='text-xl' />, },
    { name: 'Gaming', icon: <LuGamepad2 className='text-xl' />, },
    { name: 'Live', icon: <LuCamera className='text-xl' />, },
    { name: 'Sport', icon: <MdSportsHandball className='text-xl' />, },
    { name: 'Fashion', icon: <LuShirt className='text-xl' />, },
    { name: 'Beauty', icon: <IoWomanOutline className='text-xl' />, },
    { name: 'Comedy', icon: <MdOutlineTheaterComedy className='text-xl' />, },
    { name: 'Gym', icon: <CgGym className='text-xl' />, }
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'
