import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div  className='descriptionbox-navigator'>
        <div className='description-navigationbox'>Description</div>
        <div className='description-navigationbox fade'>Reviews (122)</div>
       </div> 
       <div className='description-paragraphs'>
        <p> Explore our extensive collection of high-quality clothing, ranging from trendy casual wear to elegant formal attire. With a keen eye for style and a commitment to quality, we curate the latest fashion trends to ensure you always look your best. Whether you're dressing up for a special occasion or seeking everyday comfort, our diverse range of garments caters to all tastes and preferences.
          </p>
        <p>  Shop with confidence and elevate your wardrobe with our exceptional garments designed to inspire confidence and sophistication.</p>
       </div>
    </div>
  )
}

export default DescriptionBox
