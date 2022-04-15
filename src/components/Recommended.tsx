import React, { useState } from 'react'
import "../styles/layout/section.scss";
import image1 from "../assets/images/Rectangle 34.png";
import image2 from "../assets/images/Rectangle 35.png";
import image3 from "../assets/images/Rectangle 36.png";
import image4 from "../assets/images/Rectangle 37.png";
import "../styles/components/recommended.scss";

const Recommended = () => {
    const [videos, setVideos] = useState([
        {
            name: 'Username',
            image: image1,
            caption: 'Video 12345',
            views: 123
        },
        {
            name: 'Username',
            image: image2,
            caption: 'Video 12345',
            views: 123
        },
        {
            name: 'Username',
            image: image3,
            caption: 'Video 12345',
            views: 123
        },
        {
            name: 'Username',
            image: image4,
            caption: 'Video 12345',
            views: 123
        }
    ])
    return (
        <section className='recommended'>
            <h1>Recommended For You</h1>
            <div className='videos'>
                {videos.map(video => {
                    return (
                        <div className='video'>
                            <img src={video.image} alt={video.name} />
                            <h5 className='caption'>{video.caption}</h5>
                            <p className='info'>
                                <h6 className='username'>{video.name}</h6>
                                <h6 className='views'>{video.views} views</h6>
                            </p>
                        </div>
                    )
                })}
                {videos.map(video => {
                    return (
                        <div className='video'>
                            <img src={video.image} alt={video.name} />
                            <h5 className='caption'>{video.caption}</h5>
                            <p className='info'>
                                <h6 className='username'>{video.name}</h6>
                                <h6 className='views'>{video.views} views</h6>
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Recommended