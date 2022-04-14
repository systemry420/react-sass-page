import React from 'react'
import EventsSidebar from './EventsSidebar'
import LeftSidebar from './LeftSidebar'
import Carousel from './Carousel'
import "../styles/layout/main.scss";

const Main = () => {
  return (
    <div className='main'>
      {/* <LeftSidebar /> */}

      <Carousel />
      {/* <EventsSidebar /> */}
    </div>
  )
}

export default Main