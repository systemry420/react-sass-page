import React from 'react'
import '../styles/layout/nav.scss'
import logo from '../assets/images/logo.png'
import profile from '../assets/images/Ellipse 2.png'

const Nav = () => {
  return (
    <div className='nav'>
      <img src={logo} alt='logo' />
        <div className='nav-content'>
          <div>
            <form>
              <div className='form-input'>
                <select>
                  <option>All Categories</option>

                </select>

                <input type='search' placeholder='Search' />

                <button>S</button>
              </div>
            </form>
          </div>
          <div>
            <button className='upload-btn'>Upload Video</button>
          </div>
          <div className='info'>
            <img src={profile} alt='profile' />
            <img src={profile} alt='profile' />
          </div>
      </div>
    </div>
  )
}

export default Nav