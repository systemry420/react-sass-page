import React, { useState } from 'react'
import image1 from "../assets/images/Ellipse 2.png";
import image2 from "../assets/images/Ellipse 3.png";
import image3 from "../assets/images/Ellipse 4.png";
import image4 from "../assets/images/Ellipse1.png";
import image5 from "../assets/images/Ellipse 5.png";
import "../styles/components/stories.scss";

const Stories = () => {
  const [stories, setStories] = useState([
    {
      name: 'Username',
      image: image1,
      company: 'Company Name'
    },
    {
      name: 'Username',
      image: image2,
      company: 'Company Name'
    },
    {
      name: 'Username',
      image: image3,
      company: 'Company Name'
    },
    {
      name: 'Username',
      image: image4,
      company: 'Company Name'
    },
    {
      name: 'Username',
      image: image5,
      company: 'Company Name'
    }
  ])
  return (
    <section className='stories-section'>
      <h1>Top Talents</h1>
      <div className='stories'>
        {stories.map(story => {
          return (
            <div className='story'>
              <img src={story.image} alt={story.name} />
              <p className='username'>{story.name}</p>
              <p className='company'>{story.company}</p>
            </div>
          )
        })}
        {stories.map(story => {
          return (
            <div className='story'>
              <img src={story.image} alt={story.name} />
              <p className='username'>{story.name}</p>
              <p className='company'>{story.company}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stories