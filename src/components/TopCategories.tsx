import React, { useState } from 'react'
import image1 from "../assets/images/Rectangle 41.png";
import image2 from "../assets/images/Rectangle 42.png";
import image3 from "../assets/images/Rectangle 43.png";
import image4 from "../assets/images/Rectangle 44.png";
import "../styles/components/topcat.scss";

const TopCategories = () => {
    const cats = [
        {
            image: image1,
            caption: 'Martial Arts',
            views: '123k'
        },
        {
            image: image2,
            caption: 'Martial Arts',
            views: '123k'
        },
        {
            image: image3,
            caption: 'Martial Arts',
            views: '123k'
        },
        {
            image: image4,
            caption: 'Martial Arts',
            views: '123k'
        }
    ]

  return (
    <section className='top-cats'>
        <h1>Top Categories</h1>
        <div className='categories'>
                {cats.map(cat => {
                    return (
                        <div className='category'>
                            <img src={cat.image} alt='' />
                            <p className='info'>
                                <h4 className='caption'>{cat.caption}</h4>
                                <h5 className='views'>{cat.views} views</h5>
                            </p>
                        </div>
                    )
                })}
                {cats.map(cat => {
                    return (
                        <div className='category'>
                            <img src={cat.image} alt='' />
                            <div className='info'>
                                <h4 className='caption'>{cat.caption}</h4>
                                <h5 className='views'>{cat.views} views</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
    </section>
  )
}

export default TopCategories