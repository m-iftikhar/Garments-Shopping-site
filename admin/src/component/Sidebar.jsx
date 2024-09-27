import React from 'react'
import './sidebar.css'
import add_product_con from '../assets/Product_Cart.svg'
import list_product_con from '../assets/Product_list_icon.svg'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
      <img src={add_product_con} alt=''/> 
      <p>Add Product</p> 
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
      <img src={list_product_con} alt=''/> 
      <p>List Product</p> 
      </div>
      </Link>
    </div>
  )
}

export default Sidebar