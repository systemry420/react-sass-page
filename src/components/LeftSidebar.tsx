import React from 'react'
import { links } from '../assets/data/sidebar-links'
import "../styles/layout/sidebar-left.scss";

const LeftSidebar = () => {
  return (
    <div className='sidebar-left'>
      <ul className='links'>
        {links.map(link => {
          return (
            <li className='link'>
              <a href={link.text}>
                <span className='icon'>{link.icon}</span>
                <span>{link.text}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LeftSidebar