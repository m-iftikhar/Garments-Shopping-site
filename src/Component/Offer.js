import React from 'react'
import './Offer.css'
import Exclusive_image from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
             <h1> Exclusive</h1> 
             <h1> Offers For You</h1> 
             <p> Only on Best Seller Products</p>
             <button>
                Check Now
             </button>
        </div>
        <div className='offers-right'>
            <img src={Exclusive_image}/>

        </div>
      
    </div>
  )
}

export default Offer
