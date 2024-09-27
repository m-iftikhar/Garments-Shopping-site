import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Items from '../Component/Items'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
   
    <div className='shop-category'>
        <img src={props.banner} className='banner'/>
        <div className='shopcategory-indexsort'>
          <p>
            <span>Showing 1 to 12</span> Out of 36
          </p>
          <div className='category-sort'>
            Sort by <img src={dropdown_icon}/>  
          </div>
        </div>
        <div className='category-products'>
         {all_product.map((item,index)=>{
          if (props.category===item.category){
            return <Items key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price= {item.old_price}/>
          } 

         })}
        </div>
        <div className='loadmore'>
              Explore More
        </div>
    </div>
  )
}

export default ShopCategory
