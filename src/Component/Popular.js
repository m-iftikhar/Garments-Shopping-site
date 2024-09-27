import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Items from './Items'
const Popular = () => {
  return (
    <div className='popular'>
     <h1>
        Popular in  Women
     </h1> <hr/>
     <div className='popular-items'>
        {data_product.map((item,index)=>{
            return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price= {item.old_price}/>
        })}
     </div>
    </div>
  )
}

export default Popular
