import React from 'react'
import '../styles/layout/nav.scss'
import logo from '../assets/images/logo.png'
import profile from '../assets/images/Ellipse 2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
  return (
    <nav className='nav'>
      <img src={logo} alt='logo' />
        <div className='nav-content'>
          <div>
            <form>
              <div className='form-input'>
                <select>
                  <option>All Categories</option>

                </select>

                <input type='search' placeholder='Search' />

                <button>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
          </div>
          <div>
            <button className='upload-btn'>Upload Video</button>
          </div>
          <div className='info'>
            <FontAwesomeIcon icon={faBell} />
            <img src={profile} alt='profile' />
          </div>
      </div>
    </nav>
  )
}

export default Nav