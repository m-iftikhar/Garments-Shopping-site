import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribr to our news letter and stay updated</p>
      <div>
    <input type='text' placeholder='Your Email Id'/>
    <button>Subscribe</button>
      </div>
    </div>

  )
}

export default NewsLetter
