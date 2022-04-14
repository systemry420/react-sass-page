import React from 'react'
import EventsSidebar from './EventsSidebar'
import LeftSidebar from './LeftSidebar'
import Carousel from './Carousel'
import "../styles/layout/main.scss";
import Stories from './Stories';

const Main = () => {
  return (
    <div className='main'>
      {/* <LeftSidebar /> */}

      <Carousel />
      <Stories />
      {/* <EventsSidebar /> */}
    </div>
  )
}

export default Main