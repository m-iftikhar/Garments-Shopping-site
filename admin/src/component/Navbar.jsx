import React from 'react'
import './navbar.css'
import navlogo from '../assets/nav-logo.svg'
import profilelogo from '../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} className='nav-logo' alt=''/>
        <img src={profilelogo} className='nav-profile' alt=''/>

    </div>
  )
}

export default Navbar