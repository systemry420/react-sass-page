import React from 'react'
import EventsSidebar from './EventsSidebar'
import LeftSidebar from './LeftSidebar'
import Carousel from './Carousel'
import "../styles/layout/main.scss";
import Stories from './Stories';
import Recommended from './Recommended';
import TopCategories from './TopCategories';
import Other from './Other';

const Main = () => {
  return (
    <main className='main'>
      {/* <LeftSidebar /> */}

      {/* <Carousel /> */}
      {/* <Stories /> */}
      {/* <Recommended /> */}
      {/* <TopCategories /> */}
      {/* <Other /> */}
      <EventsSidebar />
    </main>
  )
}

export default Main