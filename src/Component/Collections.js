import React from 'react'
import './Collections.css'
import new_collections from '../Assets/new_collections'
import Items from './Items'
const Collections = () => {
  return (
    <div className='collections-new'>
    <h1>New Collections</h1>
     <hr/>
    <div className='collections-items'>
        {new_collections.map((item,index)=>{
            return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price= {item.old_price}/>
           
        })}
    </div>
    </div>
  )
}

export default Collections