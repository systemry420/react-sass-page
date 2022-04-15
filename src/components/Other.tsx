import React, { useState } from 'react'
import "../styles/layout/section.scss";
import image1 from "../assets/images/Rectangle 34.png";
import image2 from "../assets/images/Rectangle 35.png";
import image3 from "../assets/images/Rectangle 36.png";
import image4 from "../assets/images/Rectangle 37.png";
import "../styles/components/recommended.scss";

const Other = () => {
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
        <section>
            <h1>Other For You</h1>
            <div className='videos'>
                {videos.map(video => {
                    return (
                        <div className='video'>
                            <img src={video.image} alt={video.name} />
                            <h3 className='caption'>{video.caption}</h3>
                            <p className='info'>
                                <h4 className='username'>{video.name}</h4>
                                <h4 className='views'>{video.views} views</h4>
                            </p>
                        </div>
                    )
                })}
                {videos.map(video => {
                    return (
                        <div className='video'>
                            <img src={video.image} alt={video.name} />
                            <h3 className='caption'>{video.caption}</h3>
                            <p className='info'>
                                <h4 className='username'>{video.name}</h4>
                                <h4 className='views'>{video.views} views</h4>
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Other