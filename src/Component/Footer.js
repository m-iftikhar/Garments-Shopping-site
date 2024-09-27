import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      < div className='footer-logo'>
           <img src={footer_logo} />
           <p>SHOPPER</p>
      </div> 
      <ul className='footer-links'>
         <li>Compmay</li>
         <li>Product</li>
         <li>Offices</li>
         <li>About </li>
         <li>Contact</li>
      </ul>
      <div className='social-icons'> 
      <div className='icons-container'>
        <img src={whatsapp_icon}/>
        </div>
        <div className='icons-container'>
        <img src={pintester_icon}/>
        </div>
        <div className='icons-container'>
        <img src={instagram_icon}/>
        </div>

      

      </div>
      <div className='copyright'>
        <hr/>
        <p> Copy Right @ 2024 All Reserved</p>
      </div>
    </div>
  )
}

export default Footer
