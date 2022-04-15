import React from 'react'
import EventsSidebar from './EventsSidebar'
import LeftSidebar from './LeftSidebar'
import Carousel from './Carousel'
import "../styles/layout/main.scss";
import Stories from './Stories';
import Recommended from './Recommended';
import TopCategories from './TopCategories';
import Other from './Other';
import Nav from './Nav';

const Main = () => {
  return (
    <main className='container'>
        <Carousel />
        <Stories />
        <Recommended />
        <TopCategories />
        <Other />
    </main>
  )
}

export default Main