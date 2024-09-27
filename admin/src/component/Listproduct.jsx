import React, { useEffect, useState } from 'react'
import removeicon from '../assets/cross_icon.png'
import './listproduct.css'
const Listproduct = () => {
  const [allproducts,setallproducts]=useState([]);
  const fetchinfo= async()=>{
    await fetch('http://localhost:4000/allproduct')
    .then((res)=>res.json())
    .then((data)=>{(setallproducts(data))});

  }
  const removeProduct = async (id, name) => {
    try {
      const response = await fetch('http://localhost:4000/deleteproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name }),
      });
      const result = await response.json();

      if (result.success) {
        setallproducts(allproducts.filter((product) => product.id !== id));
      } else {
        console.error('Failed to remove product:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(()=>{
      fetchinfo();
  },[]);
 

     
  return (
    <div className='list-product'>
      <h1>All Products Lists</h1>
      <div className='listproduct-format-main'>
      <p>Products</p>
      <p>Title</p>
      <p>Old Price</p>
      <p>New Price</p>
      <p>Category</p>
      <p>Remove</p>
      </div>
    
    <div className='list-product-allproduct'>
      <hr/>
      {allproducts.map((product,index)=>{
        return <><div  key={index}  className='listproduct-format-main list-productformat'>
            <img src={product.image} alt="" className="producticon" />
            <p>{product.name}</p>
            <p> ${product.old_price}</p>
            <p> ${product.old_price}</p>
            <p>{product.category}</p>
            <img  onClick={()=>removeProduct(product.id,product.name)} src={removeicon} alt='' className='product-removeicon'/>
          </div>
          <hr/>
          </>

      })}

    </div>
    </div>
  )
}

export default Listproduct