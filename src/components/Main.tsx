import React from 'react'
import EventsSidebar from './EventsSidebar'
import LeftSidebar from './LeftSidebar'
import Carousel from './Carousel'
import "../styles/layout/main.scss";
import Stories from './Stories';

const Main = () => {
  return (
    <main className='main'>
      {/* <LeftSidebar /> */}

      <Carousel />
      <Stories />
      {/* <EventsSidebar /> */}
    </main>
  )
}

export default Main