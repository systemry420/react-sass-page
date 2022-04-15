import React from 'react'
import image1 from "../assets/images/Rectangle 34.png";
import image2 from "../assets/images/Rectangle 35.png";
import image3 from "../assets/images/Rectangle 36.png";
import image4 from "../assets/images/Rectangle 37.png";
import "../styles/layout/sidebar-right.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlay, faForward, faBackward, faVolumeHigh, faTimes
 } from '@fortawesome/free-solid-svg-icons'

const EventsSidebar = () => {

  const events = [
    {
      name: 'Event 1',
      image: image1,
      caption: 'A caption for this event',
    },
    {
      name: 'Event 2',
      image: image2,
      caption: 'A caption for this event',
    },
    {
      name: 'Event 3 ',
      image: image3,
      caption: 'A caption for this event',
    },
    {
      name: 'Event 4',
      image: image4,
      caption: 'A caption for this event',
    }
  ]
  return (
    <section className='sidebar-right'>
      <h1>Events</h1>
      <div className='events'>
        {events.map(event => {
          return (
            <div className='event'>
              <img src={event.image} alt={event.name} />
              <p className='info'>
                <h3 className='username'>{event.name}</h3>
                <h4 className='caption'>{event.caption}</h4>
              </p>
            </div>
          )
        })}
      </div>
      <h1>Pinned Video</h1>
      <div className='pinned'>
        You can pin video here and continue your browsing
      </div>
      <div className='buttons'>
        <span>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </span>
        <span>
          <FontAwesomeIcon icon={faBackward} />
        </span>
        <span>
          <FontAwesomeIcon icon={faPlay} />
        </span>
        <span>
          <FontAwesomeIcon icon={faForward} />
        </span>
        <span>
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </div>
    </section>
  )
}

export default EventsSidebar