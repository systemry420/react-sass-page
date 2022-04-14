import React, { useState } from 'react'
import image1 from "../assets/images/Ellipse 2.png";
import image2 from "../assets/images/Ellipse 3.png";
import image3 from "../assets/images/Ellipse 4.png";
import image4 from "../assets/images/Ellipse1.png";
import image5 from "../assets/images/Ellipse 5.png";

const Stories = () => {
  const [stories, setStories] = useState([
    {
      name: 'Username',
      image: image1
    },
    {
      name: 'Username',
      image: image2
    },
    {
      name: 'Username',
      image: image3
    },
    {
      name: 'Username',
      image: image4
    },
    {
      name: 'Username',
      image: image5
    }
  ])
  return (
    <div className='stories'>
      {stories.map(story => {
        return (
          <div className='story'>
            <img src={story.image} alt={story.name} />
            <span className='username'>{story.name}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Stories